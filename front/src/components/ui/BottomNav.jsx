import React, { useState } from "react";
import "../../styles = css/BottomNav.css"
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
//import { FaChartLine } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";

const BottomNav = () => {
    //현재 선택된 아이콘을 관리하는 state
    const [activeNav, setActiveNav] = useState(1);
    return (
        <nav className="wrapper">
            {/* 하단 네비게이션 최상위 태그 */}
            <div>
                <Link to="/home5" className="nav-link" onClick={() => setActiveNav(1)}>
                    <FaHome
                        className={activeNav === 1 ? "nav-item active" : "nav-item"}
                        size = "22"
                    />
                    {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
                </Link>
            </div>
            <div>
                <Link to="/budgetbubble" className="nav-link" onClick={() => setActiveNav(2)}>
                    <FaPenToSquare
                        className={activeNav === 2 ? "nav-item active" : "nav-item"} 
                        size = "22"
                    />
                </Link>
            </div>
            <div>
                <Link to="/challenge" className="nav-link" onClick={() => setActiveNav(3)}>
                    <FaTrophy
                        className={activeNav === 3 ? "nav-item acitve" : "nav-item"}
                        size = "22"
                    />
                </Link>
            </div>
        </nav>
    );
}

export default BottomNav;