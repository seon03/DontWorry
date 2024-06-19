import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles = css/GoogleLoginPage.css";

function GoogleLoginPage() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/home5');
  }

  return (
    <div className="create-account">
      <div className="page-title-google">Google 로그인</div>
      <input type="email" inputMode="email" className="rectangle-2-google" placeholder="   Email address" />
      <input type="password" inputMode="numeric" className="rectangle-3-google" placeholder="   Password" />
      <svg
        className="vector-google"
        width="6"
        height="12"
        viewBox="0 0 6 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 11.3124L0 6.08489L6 0.857422"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="page-title4-google">구글 회원이 아니신가요?</div>
      <div className="page-title5-google">구글 일정에 맞는 맞춤형 예산을 받아보세요</div>
      <div className="button-google">
        <div className="rectangle-22-google" onClick={navigateToHome}></div>
        <div className="page-title6-google" onClick={navigateToHome}>로그인</div>
      </div>
    </div>
  );
}

export default GoogleLoginPage;
