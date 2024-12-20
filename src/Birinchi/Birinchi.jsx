import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./birinchi.css";

const Birinchi = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data.slice(0, 5)); 
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        getProducts();
    }, []);

    const handleProductClick = (product) => {
        navigate(`/product/${product.id}`, { state: { product } });
    };

    return (
        <div className="about-us">
            <div className="head">
                <h2>The company leads entire webdesign process from concept to delivery.</h2>
                <h3>The Era Of Technology.</h3>
                <p>
                    Through True Rich Attended does no end it his mother since real had half every
                    him case in packages enquire we up ecstatic unsatiable saw his giving Remain
                    expense you position concluded.
                </p>
            </div>

            <div className="statistics">
                <div className="stat-item">
                    <h4>1560+</h4>
                    <p>Project Delivered</p>
                </div>
                <div className="stat-item">
                    <h4>100+</h4>
                    <p>Professionals</p>
                </div>
                <div className="stat-item">
                    <h4>950+</h4>
                    <p>Happy Clients</p>
                </div>
                <div className="stat-item">
                    <h4>10 yrs</h4>
                    <p>Experience</p>
                </div>
            </div>

            <div className="products">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="product-card"
                        onClick={() => handleProductClick(product)}
                    >
                        <img src={product.image} alt={product.title} />
                        <h5>{product.title}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Birinchi;



