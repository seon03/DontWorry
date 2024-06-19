import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles = css/AccountAddModal.css";

//백엔드로 보내기
const AccountAddModal = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();
    const navigate  = useNavigate();
    const navigateToAdd = () => {
        navigate("/ocr");
    }
    const [post, setPost] = useState();

    const changeValue = (event) => {
        setPost({
            ...post,
            [event.target.name] : event.target.value,
        });
    }

    const addAccountButton = (event) => {
        event.preventDefault();
        fetch('http://localhost:8080/api/v1/accountbook', { //요청보내기
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset-utf-8',
            },
            body: JSON.stringify(post)
        })
            .then((res) => res.json())
            //.then((res) => console.log(res), props.history.push('/'));

        setModalOpen(false);
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
                        <div className={'modal-content-account'}>
                            <button className="ocr-button" onClick={navigateToAdd}>
                                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                                <span className="material-symbols-outlined">
                                photo_camera
                                </span>
                            </button>
                            <h1>새{' '} 
                                <select className="select-in-out-modal" style={{width: 70 +"px", color:'#000000', backgroundColor:"#FFD3D3", borderColor:"#ffffff", fontSize: 16+"px"}}>
                                    <option value="income-account-modal">수입</option>
                                    <option value="expense-account-modal">지출</option>
                                </select>
                            </h1>
                            <form>
                                <div>
                                <input className="input" type="date" date-placeholder="날짜" required style={{width:255+"px", backgroundColor: "#ffffff", color: "#000000"}}></input>
                                </div>
                                <select className="input_일정" type="text" placeholder="일정" style={{width:255+"px", backgroundColor: "#ffffff", color: "#000000"}}>
                                    <option value="일정 없음">*일정 없음</option>
                                    <option value="재석이랑 맛집 탐방">재석이랑 맛집 탐방</option>
                                    <option value="카페에서 팀플">카페에서 팀플</option>
                                    <option value="민경이랑 영화">민경이랑 영화</option>
                                </select>
                                <input className="input_내용" type="text" placeholder="내용" style={{width: 255 + "px"}}></input>
                                <select className="input" name="money-type" style={{width:255+"px", backgroundColor: "#FFF2F2", color: "#000000", borderColor:"#ffffff"}}>
                                    <option value="자산-선택">자산 선택*</option>
                                    <option value="은행"> 은행</option>
                                    <option value="현금"> 현금</option>
                                    <option value="카드"> 카드</option>
                                </select>
                                <div>
                                <select className="input" name="category" required style={{width:255+"px", backgroundColor: "#FFF2F2", color: "#000000", borderColor:"#ffffff"}}>
                                    <option value="카테고리-선택">카테고리 선택*</option>
                                    <option value="식비">식비</option>
                                    <option value="문화생활">문화생활</option>
                                    <option value="교통">교통</option>
                                    <option value="건강/의료">건강</option>
                                </select>
                                </div>
                                <button className={'modal-close-btn'} style={{fontWeight:'bold'}} onClick={() => navigate('/home5') /*&& addAccountButton()*/}>
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