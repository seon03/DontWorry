import React from 'react';
import "../../styles = css/UnexpectedItem.css";

// 백엔드에서 가져오기
const UnexpectedItem = () => {
    return (
        <div className="unexpectedCardsRow">
            <span className="rowTitle">
                <div className="row-header-title">{/*일정에 없는 수입 & 지출*/}</div>
            </span>
            <div className="rowContainer">
                <div className="slider">
                    <span className="unexpected">
                    {unexdata.map((item) => 
                        
                            <div className="unexpected-item" key={item.id}>
                                <div className="unexpected-title">{item.title}</div>
                                <div className="unexpected-expense">{item.expense}</div>
                            </div>
                    
                    )}
                    </span>
                </div>
            </div>
        </div>  
    );
}

export default UnexpectedItem;


const unexdata = [
    {
        id: '0011',
        title: '편의점',
        category: '생활',
        income: '', 
        expense: '1,000원'
    },
    {
        id: '0012',
        title: '택시',
        category: '교통비',
        income: '', 
        expense: '8,000원'
    }
]


/*
import React, { useState, useEffect } from 'react';
import "../../styles = css/UnexpectedItem.css";

const UnexpectedItem = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetch('/api/expenses')
            .then(response => response.json())
            .then(data => setExpenses(data))
            .catch(error => console.error('Error fetching expenses:', error));
    }, []);

    return (
        <div className="unexpectedCardsRow">
            <span className="rowTitle">
                <div className="row-header-title">{일정에 없는 수입 & 지출}</div>
                </span>
                <div className="rowContainer">
                    <div className="slider">
                        <span className="unexpected">
                        {expenses.map((expense) => (
                            <div className="unexpected-item" key={expense.id}>
                                <div className="unexpected-title">{expense.name}</div>
                                <div className="unexpected-expense">{expense.amount}</div>
                            </div>
                        ))}
                        </span>
                    </div>
                </div>
            </div>  
        );
    }
    
    export default UnexpectedItem;
*/