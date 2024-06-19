// ScheduleContext.jsx
import React, { createContext, useContext, useState } from 'react';

const ScheduleContext = createContext();

export const useScheduleContext = () => useContext(ScheduleContext);

export const ScheduleProvider = ({ children }) => {
    const [accordionData, setAccordionData] = useState([
        {
            schedule_name: "재석이와 영화",
            prediction_result: "예상지출 15,000원",
            income: "0원",
            expense: "16,000원",
            details: ["팝콘: 2,000원", "영화티켓: 14,000원"]
        },
        {
            schedule_name: "민경이와 밥약",
            prediction_result: "예상지출 20,000원",
            income: "0원",
            expense: "18,000원",
            details: ["식사: 11,000원", "카페: 7,000원"]
        },
        {
            schedule_name: "세호와 카페",
            prediction_result: "예상지출 8,000원",
            income: "0원",
            expense: "9,000원",
            details: ["아메리카노: 5,000원", "케이크: 4,000원"]
        }
    ]);

    const updateAccordionData = (data) => {
        setAccordionData(data);
    };


    return (
        <ScheduleContext.Provider value={{ accordionData, updateAccordionData }}>
            {children}
        </ScheduleContext.Provider>
    );
};

export default ScheduleContext;
