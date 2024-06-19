import React, { useState, useRef } from 'react';
import '../../styles = css/BudgetCircle.css';

function BudgetCircle() {
  const [scale, setScale] = useState(1);
  const lastTouchTime = useRef(null);

  const handleTouchStart = (e) => {
    // 터치가 시작되면 초기 스케일 값을 설정하고, 마지막 터치 시간을 기록합니다.
    const touch1 = e.touches[0];
    const touch2 = e.touches[1];
    if (touch1 && touch2) { // 터치가 두 개 이상인 경우에만 처리합니다.
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) +
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
      setScale(distance / 100); // 임의의 값을 사용하여 스케일 조정
      lastTouchTime.current = Date.now(); // 마지막 터치 시간 기록
    }
  };

  const handleTouchEnd = () => {
    // 터치가 종료되면 스케일 값을 초기화합니다.
    setScale(1);
  };

  const handleSecondTouchStart = () => {
    // 첫 번째 터치 후 지정된 시간 내에 두 번째 터치가 발생하면 원의 크기를 변경합니다.
    if (lastTouchTime.current && Date.now() - lastTouchTime.current < 300) {
      setScale(scale + 0.2); // 원의 크기를 커지게 합니다.
      lastTouchTime.current = null; // 마지막 터치 시간 초기화
    }
  };

  return (
    <div className="App"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchStartCapture={handleSecondTouchStart}
      style={{ transform: `scale(${scale})` }}>
      <div className="centered-content">
        {/* 여러 개의 원 */}
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default BudgetCircle;
