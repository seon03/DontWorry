import React from 'react';
import "../styles = css/GoalDescribePage.css";
import { useNavigate } from 'react-router-dom';


function GoalDescribePage() {
    const navigate = useNavigate();

    const navigateToBudget = () => {
        navigate("/budgetBubble");
    }
  return (
    <div className="goal-descrlbe-page-des">
        <img className="dony_goal_describe" src={require('../assets/Dony_목표.png')} alt=""/>
        <div className="rectangle-4289-des"></div>
        <div className="div-des">&lt;-</div>
        <div className="div2-des">한달동안 이만큼을 절약해요!</div>
        <div className="_1-des">1년에 이만큼을 모아요!</div>
        <div className="div3-des">이번달 생활비예요!</div>
        <div className="_170-000-des">170,000원</div>
        <div className="_204-des">204만원</div>
        <div className="_430-000-des">430,000원</div>
        <div className="div4-des">나의 목표는</div>
        <div className="line-229-des"></div>
        <div className="line-230-des"></div>
        <div className="_60-16-76-des">(천만원) % (60개월) ≈ 16.76만원/월</div>
        <div className="_17-12-204-des">(17만원) * (12개월) ≈ 204만원/년</div>
        <div className="_60-17-43-des">(60만원) - (17만원) = 43만원</div>
        <div className="div5-des">안에</div>
        <div className="div6-des">모으기</div>
        <div className="rectangle-4290-des"></div>
        <div className="_5-des">5년</div>
        <div className="rectangle-4294-des"></div>
        <div className="div7-des">천만원</div>
        <div className="rectangle-4293-des" onClick={navigateToBudget}></div>
        <div className="rectangle-4295-des"></div>
        <div className="div8-des">수정</div>
        <div className="div9-des" onClick={navigateToBudget}>다음</div>
        <div className="line-231-des"></div>
    </div>
  )
}

export default GoalDescribePage