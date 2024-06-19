import React, { useState } from 'react';
import "../styles = css/GoalInputPage.css"
import { useNavigate } from 'react-router-dom';

function GoalInputPage() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); //뒤로가기
    };

    const [goalAmount, setGoal] = useState("");

    const handleGoalChange = (e) => {
        const formattedGoal = e.target.value.replace(/\D/g, "");
        setGoal(formattedGoal);
    };

    const navigateToGoalDescribe = () => {
        navigate("/goalDescribe");
    }

    const formattedGoalWithWon = (value) => {
        const num = parseInt(value);
    if (isNaN(num) || num === 0) {
        return `1000만원`;
        } else if (num < 10000) {
        return `${value}원`;
        } else if (num < 100000000) {
        const man = Math.floor(num / 10000);
        const rest = num % 10000;
        return `${man}만${rest === 0 ? '' : rest.toLocaleString()}원`;
        } else {
        const billion = Math.floor(num / 100000000);
        const rest = num % 100000000;
        return `${billion}억${rest === 0 ? '' : rest.toLocaleString()}원`;
        }
    }

    return (
        <div className="goal-input-page">
            <div className="rectangle-4295-goal"></div>
            <div className="div-goal">얼마를 모으고 싶나요?</div>
            <div 
                className="_10-000-000-goal"
                type="number"
                inputmode="numeric"
                placeholder="10,000,000원"
                value={goalAmount}
                onChange={handleGoalChange}
            >10,000,000</div>
            <svg
                className="line-223-goal"
                width="22231"
                height="14949"
                viewBox="0 0 22231 14949"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M0.367188 14948.8L0.367248 -8.55462e-05L22230.9 -8.55462e-05L22230.9 14948.8"
                stroke="black"
                stroke-width="22"
                />
            </svg>
            <div className="goal-ammount-simplify-goal">{formattedGoalWithWon(goalAmount)}</div>
            <div className="line-228-goal"></div>
            <button className="다음-button-goal" onClick={navigateToGoalDescribe}>다음</button>
            
            <div className="뒤로가기-button-2-goal" onClick={goBack}>&lt;-</div>
            <div className="rectangle-42952-goal"></div>
            <div className="div5-goal">목표를 달성할 기한을 정해주세요</div>
            <div className="goal-year">5년</div>
            <div className="line-2282-goal"></div>
            <div className="_60-goal">= 60개월</div>
        </div>
    )
}

export default GoalInputPage;