import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

const Home = () => {
const [data, setData] = useState({});
    useEffect(()=> {
        const getData = () => {
            fetch('https://dummyjson.com/products/1')
            .then(res => res.json())
            .then(setData)
        }

        getData();
    }, [])

    const clickHandler = () => {
        console.log("abc")
    }
    return (
        <div>
            <Helmet>
                <title>{data.title}</title>
            </Helmet>
            <h1>Home page</h1>
            <p>loremjkfdshfjkahfjkasdhfkasjdfhasdjkfhasdjkfhsdsjkafhasfkjas</p>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default Home