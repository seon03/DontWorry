// AccordionItem.jsx
import React, { useState, useRef } from "react";

const AccordionItem = ({ schedule, expected, income, expense, details }) => {
    const [clicked, setClicked] = useState(false);
    const contentEl = useRef();

    const handleToggle = () => {
        setClicked((prev) => !prev);
    };

    return (
        <div className={`accordion_item ${clicked ? "active" : ""}`}>
            <button className="button" onClick={handleToggle}>
                <div className="frame-title">
                    {/* 카테고리 박스 */}
                    <div className="category">
                        <div className='rectangle-4062'></div>
                    </div>
                    {/* 일정-수입-지출 내용 */}
                    <div className='frame-1'>
                        <div className='schedule-expected'>
                            <div className='div-2-span'>{schedule}</div>
                            <div className="expected" >{expected}</div>
                        </div>
                        <div className='in-out'>
                            <div className="income" >{income}</div>
                            <div className="expense" >{expense}</div>
                        </div>
                    </div>
                </div>
                <span className="control">{clicked ? "-" : "+"} </span>
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


