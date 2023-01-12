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
const getData = async () => {
    const res = await fetch('https://dummyjson.com/products/1')
    let jsonData = res.json();
    return jsonData;

}
let data = { title: "Default title" }

app.get('*', async (req, res) => {
    data = await getData();
    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>
    )
    const helmet = Helmet.renderStatic("arju2");

    // console.log(helmet.title.toString(), "title");
    console.log(data.title, "data")
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title data-react-helmet="true">Arjun</title>
        <meta name="title" content="Default Title" data-react-helmet="true">
        </head>
        <body >
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