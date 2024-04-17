import React from 'react';
import '../styles = css/OCRPage.css';
import textImg from '../assets/문자내역.png';
import UploadButton from '../components/ui/UploadButton';
import { IconButton } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

function OCRPage() {
    return (
        <div className="bg">
            <div className="top-square"></div>
            <div className="new-account-image">
                <div className="box test-gradient-border border-image">
                    <img className="문자내역" src={textImg}/>
                </div>
            </div>
            <UploadButton />
            <div className="bottom-square">
            <IconButton variants="contained" sx={{m:2, color:"black"}}>{<InsertPhotoIcon/>}</IconButton>
            </div>
        </div>
    )
}

export default OCRPage;