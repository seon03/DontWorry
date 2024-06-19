import React from 'react';
import "../styles = css/LoginPage.css";
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();

    const navigateToGoogle = () => {
        navigate('/googleLogin');
    }
    return (
        <div className="sign-up">
        <div className="page-title-login">
            퍼스널 예산 AI
            <br />
            코디네이터, 돈워리
        </div>
        <div className="page-title2-login">
            돈 관리, 이제 걱정 마세요!
            <br />
            도니&amp; 해피와 함께 스마트한 맞춤형 예산관리 AI 서비스를 경험해보세요.
            <br />
            Don’t worry, be happy!
        </div>
        <div className="button-login">
            <div className="rectangle-2-login"></div>
            <div className="page-title3-login">회원가입</div>
        </div>
        <div className="div-login" onClick={navigateToGoogle}>로그인해서 캘린더 불러오기</div>
        <div className="ellipse-811-login"></div>
        <div className="ellipse-812-login"></div>
        <svg
            className="div2-login-happy"
            width="142"
            height="151"
            viewBox="0 0 142 151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="M23.4491 62.7412C30.8566 35.6527 64.2045 21.5381 91.0272 31.1208C117.85 40.7035 125.924 65.5867 118.516 92.6751C111.109 119.764 84.0779 132.103 57.2552 122.521C30.4324 112.938 16.0416 89.8296 23.4491 62.7412Z"
            fill="#FFE999"
            />
            <ellipse
            cx="4.05425"
            cy="4.76901"
            rx="4.05425"
            ry="4.76901"
            transform="matrix(0.992139 -0.125139 0.117367 0.993089 33.8965 53.3594)"
            fill="black"
            />
            <ellipse
            cx="4.05425"
            cy="4.76901"
            rx="4.05425"
            ry="4.76901"
            transform="matrix(0.992139 -0.125139 0.117367 0.993089 73.1445 43.8555)"
            fill="black"
            />
            <path
            d="M101.161 59.0431C128.786 67.5323 118.133 85.4446 99.8909 81.9142"
            stroke="black"
            />
            <path
            d="M132.328 97.6848C133.064 103.916 128.092 113.651 121.398 118.232"
            stroke="black"
            />
            <path
            d="M125.36 94.1906C126.095 100.422 121.123 110.157 114.43 114.738"
            stroke="black"
            />
            <path
            d="M78.7225 60.7405C80.108 69.2517 74.056 77.455 65.2049 79.0631C56.3538 80.6712 48.0553 75.0751 46.6698 66.5639C45.2842 58.0527 52.6644 58.0081 61.5155 56.4C70.3666 54.7919 77.3369 52.2294 78.7225 60.7405Z"
            fill="#FF9898"
            />
        </svg>
        <svg
            className="div3-login-coin"
            width="99"
            height="103"
            viewBox="0 0 99 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <ellipse
            cx="33.9463"
            cy="36.1122"
            rx="33.9463"
            ry="36.1122"
            transform="matrix(0.886429 0.462865 -0.439488 0.898249 38.7246 2.73242)"
            fill="#FFE03C"
            />
            <ellipse
            cx="35.0533"
            cy="35.4678"
            rx="35.0533"
            ry="35.4678"
            transform="matrix(0.886429 0.462865 -0.439488 0.898249 31.1758 4.73047)"
            fill="#FFD541"
            />
            <ellipse
            cx="31.7324"
            cy="31.9743"
            rx="31.7324"
            ry="31.9743"
            transform="matrix(0.886429 0.462865 -0.439488 0.898249 33.125 9.14258)"
            fill="#FFEB85"
            />
            <g filter="url(#filter0_i_616_3747)">
            <path
                d="M65.4858 49.5231C64.8096 60.9607 57.9764 93.1163 46.0159 63.0104C33.2009 113.692 5.74662 -8.08731 38.9687 60.5764C42.9287 33.4775 46.502 26.0857 53.1049 62.2649C69.8141 16.1174 67.4947 38.7279 65.4858 49.5231Z"
                fill="#FFE03B"
            />
            </g>
            <g filter="url(#filter1_i_616_3747)">
            <path
                d="M21.9249 56.6278C36.9318 54.9387 47.3283 54.5635 70.9817 55.3688"
                stroke="#FEDF3B"
                stroke-width="4"
            />
            </g>
            <g filter="url(#filter2_i_616_3747)">
            <path
                d="M21.5772 49.8641C36.6989 48.172 47.1748 47.7949 71.0085 48.5955"
                stroke="#FEDF3B"
                stroke-width="4"
            />
            </g>
            <defs>
            <filter
                id="filter0_i_616_3747"
                x="23.1543"
                y="34.3867"
                width="44.7285"
                height="45.3457"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
                />
                <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
                />
                <feOffset dx="1" dy="4" />
                <feGaussianBlur stdDeviation="3.3" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.720833 0 0 0 0 0.56225 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_616_3747"
                />
            </filter>
            <filter
                id="filter1_i_616_3747"
                x="21.709"
                y="52.9395"
                width="49.3398"
                height="9.69727"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
                />
                <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.841667 0 0 0 0 0.6565 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_616_3747"
                />
            </filter>
            <filter
                id="filter2_i_616_3747"
                x="21.3633"
                y="43.1719"
                width="49.7109"
                height="8.70117"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
                />
                <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
                />
                <feOffset dy="-3" />
                <feGaussianBlur stdDeviation="4.35" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.925 0 0 0 0 0.666 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_616_3747"
                />
            </filter>
            </defs>
        </svg>
        <div className="ellipse-814-login"></div>
        <div className="ellipse-815-login"></div>
        </div>

    )
}

export default LoginPage;