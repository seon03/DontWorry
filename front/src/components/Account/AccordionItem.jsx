// AccordionItem.jsx
import React, { useState, useRef } from "react";

const AccordionItem = ({ schedule, expected, income, expense, details, categoryId }) => {
    const [clicked, setClicked] = useState(false);
    const contentEl = useRef();

    const handleToggle = () => {
        setClicked((prev) => !prev);
    };

    return (
        <div className={`accordion_item ${clicked ? "active" : ""}`}>
            <button className="button-schedule-account" onClick={handleToggle}>
                <div className="frame-title">
                    
                    {/* 일정-수입-지출 내용 */}
                    <div className='frame-1'>
                        <div className='schedule-expected'>
                            <div className='div-2-span-accordion-item'>{schedule}</div>
                            <div className="expected-accordion-item" >{expected}</div>
                        </div>
                        <div className='in-out'>
                            <div className="income-accordion-item" >{income}</div>
                            <div className="expense-accordion-item" >{expense}</div>
                        </div>
                    </div>
                </div>
                <span className="control-accordion-item">{clicked ? "-" : "+"} </span>
            </button>
            <div
                ref={contentEl}
                className="answer_wrapper"
                style={
                    clicked
                        ? { height: contentEl.current.scrollHeight }
                        : { height: "0px" }
                }
            >
                <div className="answer">
                    {details && details.map((detail, index) => (
                      <div key={index} className="item">
                          <div className="item-name">{detail.split(":")[0]}</div>
                          <div className="item-price">{detail.split(":")[1]}</div>
                      </div>
                  ))}
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;


