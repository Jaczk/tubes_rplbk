import "./style.css";
import React from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

const BASE_API_URL = `https://dummyjson.com`;

function FragranceDetail() {
    const [detail, setDetail] = useState([]);
    const { productId } = useParams()

    useEffect(() => {
        async function getProducts() {
            await axios
                .get(`${BASE_API_URL}/products/category/fragrances`)
                .then((res) => {
                    const responseData = res.data.products;
                    setDetail(responseData);
                })
                .catch((error) => {
                    console.log(error);
                    window.alert(error);
                });
        }

        getProducts();
    }, []);


    const peta = detail.find(prod => prod.id.toString() === productId)
    console.log(peta);


    return (
        <div className="App">
            <div className="list-title-wrapper">
                <h1>{peta.title}</h1>
                <p>Price: ${peta.price}</p>
                <p>{peta.description}</p>
                <h1>AKU</h1>
            </div>
        </div>
    )
}

export default FragranceDetail