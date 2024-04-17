import React, { useState, useRef } from 'react';
import axios from 'axios';
import './OCRPage.css';
import './AddModal.css'
import textImg from './문자내역.png';
//사진등록버튼
import './UploadButton.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
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

    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();
    const navigate  = useNavigate();
    const navigateToAdd = () => {
        navigate("/home");
    };

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

    const clickUploadButton = () => {
        handleUpload(); 
        setModalOpen(true);
    };

    const clickAddButton = () => {
        setModalOpen(false);
        navigateToAdd();
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
            <Button className="upload-button" onClick={clickUploadButton}>등록</Button>
            {
                modalOpen &&
                <div className={'modal-container'} ref={modalBackground} onClick={e => {
                    if (e.target === modalBackground.current) {
                    setModalOpen(false);
                    }
                }}>
                    <div className={'modal-content'}>
                        <p className='money-title'>새 수입/지출 추가</p>
                        <form className="ocr-content">
                            <div className="input" placeholder="날짜">날짜 4월 18일</div>
                            {/*<div className="input" placeholder="일정">일정 선택</div>*/}
                            <div className="input" placeholder="내용">내용 추가</div>
                            {/*<div className="money-type">자산 선택</div>*/}
                            {/*<div className="money-category">카테고리 선택</div>*/}
                            <button className={'modal-close-btn'} onClick={clickAddButton}>
                                추가하기
                            </button>
                        </form>
                        
                    </div>
                </div>
            }
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
