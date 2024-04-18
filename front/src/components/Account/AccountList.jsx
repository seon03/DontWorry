import React from "react";
//import MonthFilter from "../filter/MonthFilter";
import AccordionItems from "./AccordionItems";
import UnexpectedItem from "./UnexpectedItem";
import "../../styles = css/AccountList.css"
;
/* AccountList (1차)
//import styled from "styled-components";
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function ExpensesList(props){
    const { expenses } = props;

    return (
        <Wrapper>
            {expenses.map((expense, index) => {
                return (
                    <ExpensesItem 
                        key={expense.title}
                        expense={expense}
                    />
                );
            })}
        </Wrapper>
    );
}

export default ExpensesList;
*/

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