import 'regenerator-runtime/runtime';
import 'babel-polyfill';
import express from 'express';
import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import App from './src/App'
import bodyParser from 'body-parser';
import { Helmet } from 'react-helmet';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('build/public'));

app.get('*', (req, res) => {

    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>
    )

    const helmet = Helmet.renderStatic();
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta name="title" content="Default Title" data-react-helmet="true">
        ${helmet.meta.toString()}
        ${helmet.title.toString()}
        </head>
        <body>
            <div id="root">
            ${content}
            </div>
            <script src="client_bundle.js"></script>
        </body>
    </html>
    `
    res.send(html)
})

app.listen(PORT, () => {
    console.log(`App is runnin on port ${PORT}`)
})