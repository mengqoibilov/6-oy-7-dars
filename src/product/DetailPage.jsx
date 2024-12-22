import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./detailpage.css";

const PhotoDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const photo = location.state?.photo;

    if (!photo) {
        return (
            <div className="no-photo">
                <h2>Photo not found!</h2>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
        );
    }

    return (
        <div className="photo-details">
            <button className="back-button" onClick={() => navigate(-1)}>
                Go Back
            </button>
            <div className="photo-info">
                <img src={photo.url} alt={photo.title} />
                <h2>{photo.title}</h2>
                <p><strong>Album ID:</strong> {photo.albumId}</p>
                <p><strong>Photo ID:</strong> {photo.id}</p>
            </div>
        </div>
    );
};

export default PhotoDetails;
