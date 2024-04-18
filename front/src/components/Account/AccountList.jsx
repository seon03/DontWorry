import React from "react";
//import MonthFilter from "../filter/MonthFilter";
import AccordionItems from "./AccordionItems";
import UnexpectedItem from "./UnexpectedItem";
import "../../styles = css/AccountList.css";


function AccountList(props) {
    // 오늘, 내일, 모레의 날짜를 계산
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const afterTomorrow = new Date(today);
    afterTomorrow.setDate(afterTomorrow.getDate() + 2);

    // 각 AccordionItem의 내용을 상태로 관리
    const [items, setItems] = useState([
        { date: today, content: '오늘의 내용' },
        { date: tomorrow, content: '내일의 내용' },
        { date: afterTomorrow, content: '모레의 내용' },
        // 필요에 따라 더 많은 항목을 추가할 수 있음
    ]);

    return (
        <div className="two-Lists">
            <AccordionItems key={index} date={items.date} content={items.content} />
            <UnexpectedItem />
        </div>
        
    );
}

export default AccountList;
