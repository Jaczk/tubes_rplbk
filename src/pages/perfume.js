import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BASE_API_URL = `https://dummyjson.com`;

const Fragrance = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        async function getProducts() {
            await axios
                .get(`${BASE_API_URL}/products/category/fragrances`)
                .then((res) => {
                    const responseData = res.data.products;
                    setProducts(responseData);
                })
                .catch((error) => {
                    console.log(error);
                    window.alert(error);
                });
        }

        getProducts();
    }, []);


    const perfume = products.map(prod => {
        return (
            <div key={prod.id}>
                <h3>
                    <Link to={`/perfumes/${prod.id}`}>{prod.title}</Link>
                </h3>
                <p>Price: ${prod.price}</p>
                <hr />
            </div>
        );
    });
    console.log(perfume);
    return (
        <div className="App">
            <div className="list-title-wrapper">
                <h1>Home Page</h1>
                {perfume}
            </div>
        </div>
    );
};

export default Fragrance;

