import React from 'react';
import '../../styles = css/BudgetStatus.css';
import BudgetBar from './BudgetBar';

export const BudgetStatus = () => {

    return (
        <div className="budget-s">
            <div className="budget-status">
                <BudgetBar />
                <div className="budget-status-total">600,000원</div>
                <div className="budget-status-month">6월 예산</div>
            </div>
        </div>
    );
}

export default BudgetStatus;
