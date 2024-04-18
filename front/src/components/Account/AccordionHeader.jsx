import React from 'react';
import { useState, useEffect } from 'react';
import "../../styles = css/AccordionHeader.css";

//import CustomDate from '../ui/CustomDate';
//import MonthFilterButton from '../ui/MonthFilterButton';

//백엔드에서 가져오기
function AccordionHeader({scheduleDate}) {

    return (
        <div className="heading">
                <div className='accountHeaderFrame'>
                    <div className='schedule-expected'>
                        <div className='오늘'>오늘</div>
                        <div className="div-2-span" >{scheduleDate}{/*<CustomDate/>*/}4월 17일{/*<MonthFilterButton />*/}</div>
                    </div>
                    <div className='총수입지출'>
                            <div className='total-income'>
                                <div className='수입'>수입</div>
                                <div className="총수입" >0원</div>
                            </div>
                            <div className='total-expense'>
                                <div className='지출'>지출</div>
                                <div className="총지출" >44,000원</div>
                            </div>
                    </div>
                </div>
        </div>
    );
}

export default AccordionHeader;
