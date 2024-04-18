import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles = css/AccountAddModal.css";

//백엔드로 보내기
const AccountAddModal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();
    const navigate  = useNavigate();
    const navigateToAdd = () => {
        navigate("/ocr");
    }

    return (
    <>
        {/* 새 수입/지출 모달 */}
                <div className={'btn-wrapper'}>
                    <button className={'modal-open-btn'} onClick={() => setModalOpen(true)}>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                        <span class="material-symbols-outlined">
                            payments
                        </span>
                    </button>
                </div>
                {
                    modalOpen &&
                    <div className={'modal-container'} ref={modalBackground} onClick={e => {
                        if (e.target === modalBackground.current) {
                        setModalOpen(false);
                        }
                    }}>
                        <div className={'modal-content'}>
                            <button className="ocr-button" onClick={navigateToAdd}>
                                    ocr카메라버튼
                            </button>
                            <h1>새 수입/지출 추가</h1>
                            <form className="">
                                <input className="input" placeholder="날짜"></input>
                                <input className="input" placeholder="일정"></input>
                                <input className="input" placeholder="내용"></input>
                                <div>자산</div>
                                <div>카테고리</div>
                                <button className={'modal-close-btn'} onClick={() => setModalOpen(false)}>
                                    추가하기
                                </button>
                            </form>
                            
                        </div>
                    </div>
                }
    </>
    );
};

export default AccountAddModal;