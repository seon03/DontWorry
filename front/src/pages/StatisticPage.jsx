import React from 'react';
import "../styles = css/StatisticPage.css";
import { useNavigate } from 'react-router-dom';

function StatisticPage() {
    const navigate = useNavigate();

    const navigateToBudgetCircle = () => {
        navigate('/budgetbubble');
    }
    return (
        <div className="budget-stat-graph-stats">
            <div className="_5-stats">6월</div>
            <svg
                className="icon-stats"
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                y="1.60156"
                width="15"
                height="14.3991"
                rx="2"
                stroke="#B9B9B9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                />
                <path
                d="M10.833 0V3.1998"
                stroke="#B9B9B9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                />
                <path
                d="M4.16699 0V3.1998"
                stroke="#B9B9B9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                />
                <path
                d="M0 6.39844H15"
                stroke="#B9B9B9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                />
            </svg>
            <div className="income-stats">
                <div className="frame-8778-stats">
                <div className="rectangle-4058-stats"></div>
                <div className="div-stats">실제 지출</div>
                </div>
                <div className="frame-87782-stats">
                <div className="_190-000-stats">₩ 190,000</div>
                </div>
            </div>
            <div className="line-3-stats"></div>
            <div className="outcome-stats">
                <div className="frame-8778-stats">
                <div className="rectangle-40582-stats"></div>
                <div className="div-stats">추천 지출</div>
                </div>
                <div className="frame-87782-stats">
                <div className="_180-000-stats">₩ 180,000</div>
                </div>
            </div>
            <div className="line-4-stats"></div>
            <div className="savings-stats">
                <div className="frame-8778-stats">
                <div className="rectangle-40583-stats"></div>
                <div className="div-stats">예상 지출</div>
                </div>
                <div className="frame-87782-stats">
                <div className="_200-000-stats">₩ 200,000</div>
                </div>
            </div>
            <svg
                className="vector-4-stats"
                width="265"
                height="66"
                viewBox="0 0 265 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M0 65.9996C0 65.9996 14.3556 42.492 28.5 32.0004C45.5105 19.3829 62.8374 38.3602 83.5 38.4994C105.113 38.6451 102.007 6.53004 123 1.00007C143.325 -4.35391 144.258 21.2057 164.5 15.4994C191.787 7.80703 207.5 2.5 223 40.5C238.629 78.8174 264.5 25 264.5 25"
                stroke="#42D8CF"
                />
            </svg>
            <div className="line-1-stats"></div>
            <div className="_25-k-stats">25k</div>
            <div className="line-12-stats"></div>
            <div className="_20-k-stats">20k</div>
            <div className="line-13-stats"></div>
            <div className="_15-k-stats">15k</div>
            <div className="line-14-stats"></div>
            <div className="_5-k-stats">5k</div>
            <svg
                className="vector-10-stats"
                width="201"
                height="96"
                viewBox="0 0 201 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M33.6268 22.5178C13.8002 28.0675 0.0664062 65.8874 0.0664062 65.8874V95.9166H201V15.1049C188.495 17.1756 172.067 31.6027 159.418 31.8669C141.117 32.2491 141.264 0.235656 122.96 0.183666C98.9991 0.115607 111.031 48.2831 87.7097 54.201C64.3022 60.1409 56.9017 16.0028 33.6268 22.5178Z"
                fill="url(#paint0_linear_939_3314)"
                />
                <defs>
                <linearGradient
                    id="paint0_linear_939_3314"
                    x1="132.256"
                    y1="0.183594"
                    x2="132.256"
                    y2="95.9166"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#DA4C4C" stop-opacity="0.29" />
                    <stop offset="1" stop-color="#E68E8E" stop-opacity="0.01" />
                </linearGradient>
                </defs>
            </svg>
            <svg
                className="vector-12-stats"
                width="64"
                height="81"
                viewBox="0 0 64 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M43.1639 39.2021C20.23 52.2561 25.645 -3.47984 0 0.766701V80.9178H63.445V10.502C63.445 10.502 57.3462 31.1295 43.1639 39.2021Z"
                fill="url(#paint0_linear_939_3315)"
                />
                <defs>
                <linearGradient
                    id="paint0_linear_939_3315"
                    x1="-68.7442"
                    y1="-14.8145"
                    x2="-68.7442"
                    y2="80.9186"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#DAC34C" stop-opacity="0.29" />
                    <stop offset="1" stop-color="#E6DD8E" stop-opacity="0.01" />
                </linearGradient>
                </defs>
            </svg>
            <svg
                className="vector-3-stats"
                width="202"
                height="66"
                viewBox="0 0 202 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M0.0664062 65.8874C0.0664062 65.8874 13.8002 28.0675 33.6268 22.5178C56.9017 16.0028 64.3022 60.1408 87.7097 54.201C111.031 48.2831 98.9991 0.115607 122.96 0.183666C141.264 0.235656 141.117 32.2491 159.418 31.8669C172.067 31.6027 188.995 17.5706 201.5 15.5"
                stroke="#FF9595"
                stroke-width="2"
                stroke-linecap="round"
                />
            </svg>
            <svg
                className="vector-11-stats"
                width="63"
                height="42"
                viewBox="0 0 63 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M0.5 0.501773C26 -2.99805 20.2291 52.2561 43.163 39.2022C57.3454 31.1296 63 11.002 63 11.002"
                stroke="#F0EAB7"
                stroke-width="2"
                stroke-linecap="round"
                />
            </svg>
            <div className="rrr-stats"></div>
            <div className="_2020-stats">2020</div>
            <div className="rrr2-stats"></div>
            <div className="_2021-stats">2021</div>
            <div className="rrr3-stats"></div>
            <div className="_2022-stats">2022</div>
            <div className="rrr4-stats"></div>
            <div className="_2023-stats">2023</div>
            <div className="rrr5-stats"></div>
            <div className="_2024-stats">2024</div>
            <div className="rrr6-stats"></div>
            <div className="_2025-stats">2025</div>
            <div className="income2-stats">
                <div className="frame-8778-stats">
                <div className="rectangle-4058-stats"></div>
                <div className="div-stats">실제 지출</div>
                </div>
                <div className="frame-87782-stats">
                <div className="_190-000-stats">₩ 190,000</div>
                </div>
            </div>
            <div className="line-32-stats"></div>
            <div className="outcome2-stats">
                <div className="frame-8778-stats">
                <div className="rectangle-40582-stats"></div>
                <div className="div-stats">추천 지출</div>
                </div>
                <div className="frame-87782-stats">
                <div className="_160-000-stats">₩ 160,000</div>
                </div>
            </div>
            <div className="line-42-stats"></div>
            <div className="savings2-stats">
                <div className="frame-8778-stats">
                <div className="rectangle-40584-stats"></div>
                <div className="div-stats">예상 지출</div>
                </div>
                <div className="frame-87782-stats">
                <div className="_200-0002-stats">₩ 200,000</div>
                </div>
            </div>
            <svg
                className="vector-42-stats"
                width="266"
                height="81"
                viewBox="0 0 266 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M0 80.2469C0 80.2469 8.3556 62.4916 22.5 52C39.5105 39.3825 57.8374 39.8607 78.5 40C100.113 40.1457 107.007 50.53 128 45C148.325 39.646 139.11 10.9003 159.351 5.19397C186.639 -2.49843 183.336 50.2958 211.5 52C242.589 53.8812 265.103 0 265.103 0"
                stroke="#42D8CF"
                />
            </svg>
            <div className="line-15-stats"></div>
            <div className="_25-k2-stats">25k</div>
            <div className="line-16-stats"></div>
            <div className="_20-k2-stats">20k</div>
            <div className="line-17-stats"></div>
            <div className="_15-k2-stats">15k</div>
            <div className="line-18-stats"></div>
            <div className="_5-k2-stats">5k</div>
            <svg
                className="vector-102-stats"
                width="205"
                height="115"
                viewBox="0 0 205 115"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M33.6268 41.5178C13.8002 47.0675 0.0664062 0 0.0664062 0V114.917H205V41.5178C205 41.5178 199 34.7656 188.149 34.7656C175.475 34.7656 172.067 50.6027 159.418 50.8669C141.117 51.2491 141.264 19.2357 122.96 19.1837C98.9991 19.1156 111.031 67.2831 87.7097 73.201C64.3022 79.1408 56.9017 35.0028 33.6268 41.5178Z"
                fill="url(#paint0_linear_939_3392)"
                />
                <defs>
                <linearGradient
                    id="paint0_linear_939_3392"
                    x1="132.256"
                    y1="19.1836"
                    x2="132.256"
                    y2="114.917"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#9C4CDA" stop-opacity="0.29" />
                    <stop offset="1" stop-color="#BA8EE6" stop-opacity="0.01" />
                </linearGradient>
                </defs>
            </svg>
            <svg
                className="vector-122-stats"
                width="60"
                height="81"
                viewBox="0 0 60 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M39.5 39.5C26.3462 48 0 7 0 7V80.9167H59.445V0.765625C59.445 0.765625 53.2062 30.643 39.5 39.5Z"
                fill="url(#paint0_linear_939_3393)"
                />
                <defs>
                <linearGradient
                    id="paint0_linear_939_3393"
                    x1="-72.7443"
                    y1="-14.8164"
                    x2="-72.7443"
                    y2="80.9165"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#DABB4C" stop-opacity="0.29" />
                    <stop offset="1" stop-color="#E6D88E" stop-opacity="0.01" />
                </linearGradient>
                </defs>
            </svg>
            <svg
                className="vector-32-stats"
                width="205"
                height="75"
                viewBox="0 0 205 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M0.5 0.5C0.5 0.5 13.8002 48.0675 33.6268 42.5178C56.9017 36.0028 64.3022 80.1408 87.7097 74.201C111.031 68.2831 98.9991 20.1156 122.96 20.1837C141.264 20.2357 141.117 52.2491 159.418 51.8669C172.067 51.6027 175.645 37.8362 188.149 35.7656C198 34.1344 205 42.5 205 42.5"
                stroke="#CA95FF"
                stroke-width="2"
                stroke-linecap="round"
                />
            </svg>
            <svg
                className="vector-112-stats"
                width="60"
                height="42"
                viewBox="0 0 60 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M0.5 8C9 16 26 50 39.1643 39.201C51.7811 28.8511 59.4454 0.765625 59.4454 0.765625"
                stroke="#F0E0B7"
                stroke-width="2"
                stroke-linecap="round"
                />
            </svg>
            <div className="group-8789-stats">
                <div className="rrr7-stats"></div>
                <div className="_1-stats">2월</div>
            </div>
            <div className="_20242-stats">2024</div>
            <div className="group-8789-stats">
                <div className="rrr8-stats"></div>
                <div className="_2-stats">3월</div>
            </div>
            <div className="_20243-stats">2024</div>
            <div className="group-8789-stats">
                <div className="rrr9-stats"></div>
                <div className="_3-stats">4월</div>
            </div>
            <div className="_20244-stats">2024</div>
            <div className="group-8789-stats">
                <div className="rrr10-stats"></div>
                <div className="_4-stats">5월</div>
            </div>
            <div className="_20245-stats">2024</div>
            <div className="group-8789-stats">
                <div className="rrr11-stats"></div>
                <div className="_52-stats">6월</div>
            </div>
            <div className="_20246-stats">2024</div>
            <div className="group-8789-stats">
                <div className="rrr12-stats"></div>
                <div className="_6-stats">7월</div>
            </div>
            <div className="_20247-stats">2024</div>
            <div className="_30-000-stats">
                이번달 지출 추천 지출 초과
                <br />
                =&gt; 다음달 30,000원 추가로 절약해야 합니다
            </div>
            <div className="ellipse-121-stats"></div>
            <svg
            className="chart-stats"
            width="26"
            height="28"
            viewBox="0 0 26 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M8.3916 11.666L8.3916 18.666"
                stroke="#606367"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M12.5869 14L12.5869 18.6667"
                stroke="#606367"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M16.7822 9.33398L16.7822 18.6673"
                stroke="#606367"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <rect
                x="3.14648"
                y="4.66602"
                width="18.8802"
                height="18.6667"
                rx="2"
                stroke="#606367"
                stroke-width="2"
            />
            </svg>
            <div className="ellipse-118-stats"></div>
            <div className="ellipse-122-stats" onClick={navigateToBudgetCircle}></div>
            <div className="ellipse-119-stats"></div>
            <div className="ellipse-120-stats"></div>
            </div>

    );
}

export default StatisticPage;