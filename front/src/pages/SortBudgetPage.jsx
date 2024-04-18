import React from 'react';
import "../styles = css/SortBudget.css";
import happy from '../assets/happy1.png'

function SortBudgetPage() {
    return (
        <div class="sort">
            <div className="don-t-worry">Don’t worry!</div>
            <img className="group-1321314019" src={happy} />
            <div className="rectangle-4225"></div>
            <div className="rectangle-4226"></div>
            <div className="rectangle-4227"></div>
            <div className="n">n% 절약하기</div>
            <div className="div2">매일 천원 절약하기</div>
            <div className="div3">카테고리별 절약하기</div>
        </div>
    )
}

export default SortBudgetPage;