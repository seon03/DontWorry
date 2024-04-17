import React, { useState } from 'react';
import axios from 'axios';
import '../styles = css/OCRPage.css';
import textImg from '../assets/문자내역.png';
//사진등록버튼
import '../styles = css/UploadButton.css';
import { Button } from 'react-bootstrap';
//사진불러오기버튼
import { IconButton } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

function OCRPage() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setUploadedImage(URL.createObjectURL(event.target.files[0])); // 선택된 파일을 화면에 나타내기 위해 URL.createObjectURL 사용
    };

    const [uploadedImage, setUploadedImage] = useState(null);

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('file', selectedFile);
    
        axios.post('http://127.0.0.1:5000/upload', formData)
            .then(response => {
            console.log(response.data);
            // 서버 응답을 받아와서 화면에 나타낼 이미지를 업데이트
            setUploadedImage(response.data.imageUrl);
            })
            .catch(error => {
            console.error('Error uploading file: ', error);
            });
    };
    
    return (
        <div className="bg">
            <div className="top-square"></div>
            <div className="new-account-image">
                <div className="box test-gradient-border border-image">
                {selectedFile ? (
                            <img className="문자내역" src={URL.createObjectURL(selectedFile)} alt="Selected" />
                        ) : (
                            <div className="불러오기">사진</div>
                        )}
                </div>
            </div>
            <Button className="upload-button"onClick={handleUpload}>등록</Button>
            <div className="bottom-square">
                <IconButton 
                    variants="contained" 
                    sx={{m:2, color:"black"}}
                    component="label" // IconButton을 파일 선택을 위한 레이블로 사용
                >
                    <InsertPhotoIcon />
                    <input type="file" onChange={handleFileChange} style={{ display: "none" }} />
                </IconButton>
            
            </div>

            
        </div>
    )
}

export default OCRPage;
