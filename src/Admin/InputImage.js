import axios from 'axios';
import React, { useState } from 'react';

function InputImage() {
    const [images, setImages] = useState([]);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleImageChange = (e) => {
        setImages(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (let i = 0; i < images.length; i++) {
            formData.append('images[]', images[i]);
        }

        try {
            const response = await axios.post('http://localhost/Resort-API/uplaodImage.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setUploadStatus(response.data.message);
        } catch (error) {
            console.error('Error uploading images: ', error);
            setUploadStatus('Error uploading images');
        }
    };

    return (
        <div>
            <h1>Upload Images</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="file" name="images[]" multiple onChange={handleImageChange} />
                <button type="submit">Upload</button>
            </form>
            {uploadStatus && <p>{uploadStatus}</p>}
        </div>
    );
}

export default InputImage;
