import React from 'react';
import { Container } from 'react-bootstrap';
import '../../styles = css/BudgetStatus.css';
import BudgetBar from './BudgetBar';

export const BudgetStatus = () => {
    return (
        <div className="budget-s">
            <div className="budget-status">
                <BudgetBar />
                <div className="budget">500,000원</div>
                <div className="budget-month">3월 예산</div>
            </div>
        </div>
    );
}

export default BudgetStatus;
