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
import UnexpectedItem from "../components/Account/UnexpectedItem";
import AccordionHeader from "../components/Account/AccordionHeader";
import Accordion from "../components/Account/Accordion";
import AccordionItem from "../components/Account/AccordionItem";
import { useScheduleContext } from '../contexts/ScheduleContext';



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
                        <AccordionHeader />
                        <Accordion />
                        <ul className="accordion">
                        </ul>
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
                                        <div className="expected-home-two" >예상지출: 36654.567원</div>
                                            <div className="income" ></div>
                                            <div className="expense" ></div>
                                        </div>
                                    </div>
                                </div>
                                <span className="control">{clicked ? "-" : "+"} </span>
                            </button>
                        </div>
                    </div>
                        <UnexpectedItem />
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

