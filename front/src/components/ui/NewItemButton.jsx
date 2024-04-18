import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

function NewItemButton(props) {
    const { title, onClick } = props;
    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>
}
// props로 받은 title이 버튼에 표시됨
// props로 받은 onClick은 StyledButton에 넣어줌으로써 클릭 이벤트를 상위 컴포넌트에서 받을 수 있도록 함

export default NewItemButton;