import React, { useState } from 'react';
import "../../styles = css/BudgetInput.css";
import { useNavigate } from 'react-router-dom';

function BudgetInput() {
  const [budget, setBudget] = useState("");
  const navigate = useNavigate();

  const handleBudgetChange = (e) => {
    const formattedBudget = e.target.value.replace(/\D/g, "");
    setBudget(formattedBudget);
  };

  const formatBudgetWithWon = (value) => {
    const num = parseInt(value);
    if (isNaN(num) || num === 0) {
      return `60만원`;
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
  };

  const handleInputClick = () => {
    const formattedBudget = formatBudgetWithWon(budget);
    localStorage.setItem('budget', formattedBudget);
    localStorage.setItem('fixedExpensesExist', 'true');
    navigate("/fixedCategory");
  };

  return (
    <div className="monthly-budget">
      <div className="rectangle-4295"></div>
      <input
        className="total-budget-input"
        type="number"
        inputMode="numeric"
        placeholder="600000"
        value={budget}
        onChange={handleBudgetChange}
      />
      <div className="budget-input-simplify">{formatBudgetWithWon(budget)}</div>
      
      <div className="line-228-budget-input"></div>
      <button className="입력하기-button" onClick={handleInputClick}>입력하기</button>
      <div className="뒤로가기-button">&lt;-</div>
      <div className="total-budget-input-title">평균 한달 예산을 입력하세요</div>
    </div>
  );
}

export default BudgetInput;
