import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./productdetails.css";

const ProductDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product;

    if (!product) {
        return (
            <div className="no-product">
                <h2>Mahsulot topilmadi!</h2>
                <button onClick={() => navigate(-1)}>Orqaga qaytish</button>
            </div>
        );
    }

    return (
        <div className="product-details">
            <button className="back-button" onClick={() => navigate(-1)}>
                Orqaga
            </button>
            <div className="product-info">
                <img src={product.image} alt={product.title} />
                <div className="details">
                    <h2>{product.title}</h2>
                    <p><strong>Narxi:</strong> ${product.price}</p>
                    <p><strong>Tavsifi:</strong> {product.description}</p>
                    <p><strong>Kategoriyasi:</strong> {product.category}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
