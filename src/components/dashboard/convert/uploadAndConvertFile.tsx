import React, { useState } from 'react';
import axios from 'axios';

const UploadAndConvertFile = () => {
    const [file, setFile] = useState(null);
    const [downloadLink, setDownloadLink] = useState('');

    const handleFileChange = (e: { target: { files: React.SetStateAction<null>[]; }; }) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (!file) {
            console.error('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('file', file); 

        try {

            const response = await axios.post('http://localhost:4040/api/v1/convert/uploadAndConvertFile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                responseType: 'blob',
            });

            if (response?.data) {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                setDownloadLink(url);
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <h1>Upload and Convert File</h1>
            <form onSubmit={handleUpload}>
                <input type="file" onChange={handleFileChange} accept=".csv" required />
                <button type="submit">Upload and Convert</button>
            </form>
            {downloadLink && (
                <div>
                    <a href={downloadLink} download="converted_file.xlsx">Download Converted File</a>
                </div>
            )}
        </div>
    );
};

export default UploadAndConvertFile;
