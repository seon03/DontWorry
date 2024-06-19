import React, { useState, useEffect } from 'react';
import "../../styles = css/BudgetCircleTotal.css";
import { useNavigate } from 'react-router-dom';
import { GoPencil } from "react-icons/go";
import BudgetLiquidCircle from '../Budget/BudgetLiquidCircle'; // BudgetLiquidCircle 컴포넌트를 불러옵니다.

function BudgetCircleTotal() {
    const [clicked, setClicked] = useState(false); // 원이 클릭되었는지 여부를 추적하기 위한 state
    const [showLiquidCircle, setShowLiquidCircle] = useState(false); // BudgetLiquidCircle를 표시할지 여부를 추적하기 위한 state
    const [fixedExpensesExist, setFixedExpensesExist] = useState(false); // 고정지출 존재 여부를 추적하기 위한 state
    const [loading, setLoading] = useState(true); // 로딩 상태를 추적하기 위한 state
    const [budget, setBudget] = useState("?원"); // 기본값으로 "?" 설정
    const [savings, setSavings] = useState("17만원"); // '절약'에 해당하는 값
    const [variableExpenses, setVariableExpenses] = useState("38만원"); // '변동지출'에 해당하는 값
    const [fixedExpenses, setFixedExpenses] = useState("5만원"); // '고정지출'에 해당하는 값
    const [currentMonth, setCurrentMonth] = useState('');
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동을 위한 함수를 가져옵니다.

    const navigateToStats = () => {
        navigate('/statistics');
    }

    // 고정지출 존재 여부를 확인하는 함수
    const checkFixedExpensesExistence = async () => {
        try {
            const fixedExpensesExist = localStorage.getItem('fixedExpensesExist') === 'true';
            const budget = localStorage.getItem('budget');
            setFixedExpensesExist(fixedExpensesExist);
            if (budget) {
                setBudget(budget);
            }
        } catch (error) {
            console.error("Error checking fixed expenses existence:", error);
        } finally {
            setLoading(false);
        }
    };

    // 예산 데이터를 가져오는 함수
    const fetchBudgetData = async () => {
        try {
            const response = await fetch('/api/budget-data'); // 적절한 API 엔드포인트를 사용하세요
            const data = await response.json();
            setSavings(data.savings || "17만원"); // '절약'에 해당하는 값
            setVariableExpenses(data.variableExpenses || "38만원"); // '변동지출'에 해당하는 값
            setFixedExpenses(data.fixedExpenses || "5만원"); // '고정지출'에 해당하는 값
        } catch (error) {
            console.error("Error fetching budget data:", error);
        }
    };

    useEffect(() => {
        const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
        const today = new Date();
        const currentMonthName = monthNames[today.getMonth()];
        setCurrentMonth(currentMonthName);
        checkFixedExpensesExistence();
        fetchBudgetData();
    }, []);

    // 원 클릭 이벤트 핸들러
    const handleCircleClick = () => {
        setClicked(!clicked); // 클릭 상태를 토글합니다.
    };

    // 원 외부 클릭 이벤트 핸들러
    const handleOutsideClick = (e) => {
        if (!e.target.classList.contains("ellipse-115")) {
            setClicked(false); // 클릭된 상태를 해제합니다.
        }
    };

    // "입력하기" 클릭 이벤트 핸들러
    const handleInputClick = () => {
        navigate("/budgetInput"); // "/budgetInput" 페이지로 이동합니다.
    };

    // "변동지출" 원 클릭 이벤트 핸들러
    const handleEllipse1172Click = () => {
        navigate("/scheduleCircle"); // "/liquidCircle" 페이지로 이동합니다.
    };

    const initialCircles = [
        { className: "ellipse-117-절약", left: 230.39, top: 290.29, radius: 58.71 },
        { className: "ellipse-1172", left: 90, top: 230, radius: 108 },
        { className: "ellipse-1173", left: 150.18, top: 350.84, radius: 93.34 }
    ];

    const enlargedRadius = 1.5;
    const enlargedDistance = 1.5;

    // 로딩 중일 때 표시할 내용
    if (loading) {
        return <div className="loading-total-circle">Loading...</div>;
    }

    // JSX를 반환합니다.
    return (
        <div className="budget-circle-total" onClick={handleOutsideClick}>
            <div className="budget-circle-month">{/*currentMonth*/}6월</div>
            {!clicked && (  
                <>
                    <div className="budget-total-money" 
                        style={{ zIndex: 2, cursor: fixedExpensesExist ? 'default' : 'pointer' }}
                        onClick={!fixedExpensesExist ? handleInputClick : undefined}
                    >
                        {fixedExpensesExist ? budget : "입력하기"}
                        {fixedExpensesExist && <GoPencil style={{ marginLeft: '8px' }} />}
                    </div>
                    <div className="circle-title-예산" style={{ zIndex: 2 }}>예산</div>
                </>
            )}

            <div className={clicked ? "ellipse-115 clicked" : "ellipse-115"} onClick={handleCircleClick}></div>

            {fixedExpensesExist && initialCircles.map((circle, index) => (
                <div
                    key={index}
                    className={clicked ? `${circle.className} clicked` : circle.className}
                    style={{
                        left: `${clicked ? (circle.left - 36) * enlargedDistance - 36 : circle.left}px`,
                        top: `${clicked ? (circle.top - 184) * enlargedDistance + 92 : circle.top}px`,
                        width: `${clicked ? circle.radius * enlargedRadius : circle.radius}px`,
                        height: `${clicked ? circle.radius * enlargedRadius : circle.radius}px`
                    }}
                    // ellipse-1172 클릭 이벤트 핸들러를 추가합니다.
                    onClick={index === 1 ? handleEllipse1172Click : undefined}
                >
                    <div className="circle-text" style={{ opacity: clicked ? 1 : 0, fontSize: '16px' }}>
                        {/* 해당하는 값에 대한 텍스트를 표시합니다. */}
                        {index === 0 && '절약'}
                        {index === 1 && '변동지출'}
                        {index === 2 && '고정지출'}
                        {/* 해당하는 값에 대한 금액을 표시합니다. */}
                        <div className="circle-text-money" style={{ fontSize: '16px', color: '#333', opacity: 0.5, marginTop: '10%' }}>
                            {index === 0 ? savings : index === 1 ? variableExpenses : fixedExpenses}
                        </div>
                    </div>
                </div>
            ))}
            <svg
            className="chart-stats"
            width="26"
            height="28"
            viewBox="0 0 26 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={navigateToStats}
            >
            <path
                d="M8.3916 11.666L8.3916 18.666"
                stroke="#606367"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M12.5869 14L12.5869 18.6667"
                stroke="#606367"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M16.7822 9.33398L16.7822 18.6673"
                stroke="#606367"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <rect
                x="3.14648"
                y="4.66602"
                width="18.8802"
                height="18.6667"
                rx="2"
                stroke="#606367"
                stroke-width="2"
            />
            </svg>
        </div>
    );
}

export default BudgetCircleTotal;