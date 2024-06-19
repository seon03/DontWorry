import React, { useState, useRef } from "react";
import Header from "../components/Header/Header";
import ScheduleAddModal from "../components/modals/ScheduleAddModal";
import AccountAddModal from "../components/modals/AccountAddModal";
import ScheduleAccount from "../components/Account/ScheduleAccount";
import { ScheduleProvider } from "../contexts/ScheduleContext";
import '../styles = css/HomePage.css';
import '../styles = css/AddModal.css';
import "../styles = css/AccountList.css";
import '../styles = css/AccordionItems.css';
import '../styles = css/UnexpectedItem.css'
import UnexpectedItem from "../components/Account/UnexpectedItem";
import AccordionHeader from "../components/Account/AccordionHeader";
import Accordion from "../components/Account/Accordion";



function HomeTwo() {
    const [clicked, setClicked] = useState(false);
    const contentEl = useRef();

    const handleToggle = () => {
        setClicked((prev) => !prev);
    };
    return (
        <ScheduleProvider>
            <div className="home-bg">
                <div style={{}}>
                    <Header />
                    <div className="schedule-account">
                    <div className="two-Lists">
                    <div className="container">
                        <div className="heading">
                                <div className='accountHeaderFrame'>
                                    <div className='schedule-expected'>
                                        <div className='오늘'>오늘</div>
                                        <div className="div-2-span" >{/*<CustomDate/>*/}4월 19일{/*<MonthFilterButton />*/}</div>
                                    </div>
                                    <div className='총수입지출'>
                                            <div className='total-income'>
                                                <div className='수입'>수입</div>
                                                <div className="총수입" >0원</div>
                                            </div>
                                            <div className='total-expense'>
                                                <div className='지출'>지출</div>
                                                <div className="총지출" >48,500원</div>
                                            </div>
                                    </div>
                                </div>
                        </div>
                        <Accordion />
                        <ul className="accordion">
                        
                        <div className={`accordion_item`}>
                            <button className="button" onClick={handleToggle}>
                                <div className="frame-title">
                                    {/* 카테고리 박스 */}
                                    <div className="category">
                                        <div className='rectangle-4062'>
                                        <div className="category-icon">
                                            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                                            <span className="material-symbols-outlined">
                                            event_note
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                    {/* 일정-수입-지출 내용 */}
                                    <div className='frame-1'>
                                        <div className='schedule-expected'>
                                            <div className='div-2-span'>진주랑 밥약속</div>
                                        </div>
                                        <div className='in-out'>
                                        <div className="expected-home-two" >예상지출: 36654원</div>
                                            <div className="income" ></div>
                                            <div className="expense" ></div>
                                        </div>
                                    </div>
                                </div>
                                <span className="control">{clicked ? "-" : "+"} </span>
                            </button>
                        </div>
                        </ul>
                    </div>

                    <div className="unexpected-container-thrd">
                        <UnexpectedItem />
                        <div className="unexpectedCardsRow-thrd">
                            <span className="rowTitle">
                                <div className="row-header-title">{/*일정에 없는 수입 & 지출*/}</div>
                            </span>
                            <div className="rowContainer-thrd">
                                <div className="slider">
                                    <span className="unexpected-thrd">
                                        
                                            <div className="unexpected-item">
                                                <div className="unexpected-title">김선생</div>
                                                <div className="unexpected-expense">5,500원</div>
                                            </div>
                                    </span>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
                </div>
                    <ScheduleAddModal />
                    <AccountAddModal />
                </div>
            </div>
        </ScheduleProvider>
    );
}

export default HomeTwo;

