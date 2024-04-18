import React from "react";
//import MonthFilter from "../filter/MonthFilter";
import AccordionItems from "./AccordionItems";
import UnexpectedItem from "./UnexpectedItem";
import "../../styles = css/AccountList.css"
;

//// Accordian items list
function AccountList(props) {
    return (
        <div className="two-Lists">
            <AccordionItems />
            <UnexpectedItem />
        </div>
        
    );
}

export default AccountList;
