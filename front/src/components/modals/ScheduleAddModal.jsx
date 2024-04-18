// ScheduleAddModal.js
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles = css/AddModal.css";
import { useScheduleContext } from "../../contexts/ScheduleContext";
import { ScheduleProvider } from "../../contexts/ScheduleContext"; // ScheduleProvider 추가

const ScheduleAddModal = () => {
    const { updateScheduleData } = useScheduleContext();
    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef();
    const navigate = useNavigate();

    const addScheduleButton = (event) => {
        event.preventDefault();
        fetch('http://localhost:8080/api/v1/schedule', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset-utf-8',
            },
            body: JSON.stringify(post),
        })
            .then((res) => res.json())
            .then((res) => console.log(res), props.history.push('/'));
    
        const formData = new FormData(event.target);
        const date = formData.get("date");
        const year = new Date(date).getFullYear();
        const month = new Date(date).getMonth() + 1;
        const day = new Date(date).getDate();

        const budgetData = {
            name: formData.get("name"),
            memo: formData.get("memo"),
            year: year,
            month: month,
            day: day,
            amount: formData.get("amount"),
            category: formData.get("category"),
        };

        axios
            .post("http://127.0.0.1:5000/predict", budgetData)
            .then((response) => {
                console.log("예산 예측 결과:", response.data);
                updateScheduleData(response.data);
                navigate("/home");
            })
            .catch((error) => {
                console.error("예산 예측 오류:", error);
            });

        setModalOpen(false);
    };

    return (
        <ScheduleProvider> {/* ScheduleProvider로 감싸줌 */}
            <>
                <div className={"btn-schedule-wrapper"}>
                    <button className={"modal-open-btn"} onClick={() => setModalOpen(true)}>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                        <span className="material-symbols-outlined">edit_calendar</span>
                    </button>
                </div>
                {modalOpen && (
                    <div
                        className={"modal-container"}
                        ref={modalBackground}
                        onClick={(e) => {
                            if (e.target === modalBackground.current) {
                                setModalOpen(false);
                            }
                        }}
                    >
                        <div className={"modal-content"}>
                            <h1>새 일정 추가</h1>
                            <form onSubmit={addScheduleButton}>
                                <input className="input" name="name" placeholder="일정 이름*" required />
                                <input className="input" name="memo" placeholder="여기에 메모하세요.." />
                                <input className="input" name="date" type="date" placeholder="날짜" required />
                                <div>카테고리</div>
                                <select className="input" name="category" required>
                                    <option value="식비">식비</option>
                                    <option value="문화생활">문화생활</option>
                                    <option value="교통">교통</option>
                                </select>
        
                                <button type="submit" className={"modal-close-btn"}>
                                    추가하기
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </>
        </ScheduleProvider>
    );
};

export default ScheduleAddModal;
