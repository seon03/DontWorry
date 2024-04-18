import React from 'react';

const CustomDate = () => {
    const today = new Date();
    const week = ['일', '월', '화', '수', '목', '금', '토', '일'];
    const todayWeek = week[today.getDay()];

    const formattedDate = `${today.getMonth()+1}.${today.getDate()}(${todayWeek}) 일정`;

    return(
        <div>{formattedDate}</div>
    );
}
export default CustomDate;