import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./birinchi.css";

const Birinchi = () => {
    const [photos, setPhotos] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getPhotos = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/photos");
                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }
                const data = await response.json();
                setPhotos(data.slice(0, 5)); 
            } catch (error) {
                console.error("Error fetching photos:", error.message);
            }
        };

        getPhotos();
    }, []);

    const handlePhotoClick = (photo) => {
        setSelectedPhoto(photo);
    };

    const handleSeeMore = () => {
        if (selectedPhoto) {
            navigate(`/photo/${selectedPhoto.id}`, { state: { photo: selectedPhoto } });
            setSelectedPhoto(null); 
        }
    };

    const closeModal = () => {
        setSelectedPhoto(null);
    };

    return (
        <div className="about-us">
            <div className="head">
                <h2>Photo Gallery</h2>
                <p>Click on a photo to view details.</p>
            </div>

            <div className="products">
                {photos.map((photo) => (
                    <div
                        key={photo.id}
                        className="product-card"
                        onClick={() => handlePhotoClick(photo)}
                    >
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                        <h5>{photo.title}</h5>
                    </div>
                ))}
            </div>

            {selectedPhoto && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <img src={selectedPhoto.url} alt={selectedPhoto.title} />
                        <h2>{selectedPhoto.title}</h2>
                        <button onClick={handleSeeMore}>See More</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Birinchi;
