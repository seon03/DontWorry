import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles = css/AddModal.css";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const ScheduleAddModal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        memo: "",
        date: "",
        category: ""
    });

    const navigate = useNavigate();

    const modalRef = useRef(null);

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setModalOpen(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/schedule`, {
                title: formData.name,
                memo: formData.memo,
                date: formData.date,
                category: formData.category
            });
            if (response.status === 201) {
                // 일정 등록 성공 시 메인 화면으로 이동
                navigate("/home5");
            } 
        } catch (error) {
            console.error("Error while adding schedule:", error);
            // 에러 처리 로직 추가
        } finally {
            setModalOpen(false); // 모달 닫기
        }
    };

    return (
        <div className="new-schedule">
            <div className={"btn-schedule-wrapper"}>
                <button className={"modal-open-btn"} onClick={() => setModalOpen(true)}>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                    <span className="material-symbols-outlined">edit_calendar</span>
                </button>
            </div>
            {modalOpen && (
                <div className="modal" onClick={handleClickOutside}>
                    <div className="modal-content" ref={modalRef}>
                        <span className="close" onClick={() => setModalOpen(false)}>
                            &times;
                        </span>
                        <div className="new-schedule-title-modal">새 일정</div>
                        <form className="new-schedule-modal-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                className="input_일정이름"
                                placeholder="일정 이름*"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="memo"
                                className="input_메모"
                                placeholder="여기에 메모하세요..."
                                value={formData.memo}
                                onChange={handleChange}
                                style={{height: 80 +"px"}}
                            />
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                className="date-schedule-modal" 
                                date-placeholder="날짜"
                                style={{width: 258 + "px", backgroundColor: "#ffffff", color: "#000000"}}
                            />
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                style={{backgroundColor: "#FFF2F2", color: "#000000", borderColor:"#ffffff"}}
                            >
                                <option value="">카테고리 선택*</option>
                                <option value="식사">식사</option>
                                <option value="약속">약속</option>
                                <option value="문화생활">문화생활</option>
                                <option value="생활용품">생활용품</option>
                            </select>
                            <button className={"modal-close-btn"} type="submit">일정 추가하기</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ScheduleAddModal;
