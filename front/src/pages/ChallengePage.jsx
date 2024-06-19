import React, { useEffect, useRef, useState } from 'react';
import "../styles = css/ChallengePage.css";

function ChallengePage() {
    const [isAccordionOpen, setIsAccordionOpen] = useState(true);
    const [accordionHeight, setAccordionHeight] = useState('0px');
    const [contentMarginTop, setContentMarginTop] = useState('0px');
    const accordionRef = useRef(null);
    const outerContainerRef = useRef(null);
    const [isFriendsAccordionOpen, setIsFriendsAccordionOpen] = useState(true);

    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };

    const toggleFriendsAccordion = () => {
        setIsFriendsAccordionOpen(!isFriendsAccordionOpen);
    };

    useEffect(() => {
        if (accordionRef.current) {
            const height = isAccordionOpen ? `${accordionRef.current.scrollHeight}px` : '0px';
            setAccordionHeight(height);

            const marginTop = isAccordionOpen ? `${accordionRef.current.scrollHeight}px` : '0px';
            setContentMarginTop(marginTop);
        }
    }, [isAccordionOpen]);

    useEffect(() => {
        if (accordionRef.current) {
            setAccordionHeight(`${accordionRef.current.scrollHeight}px`);
            setContentMarginTop(`${accordionRef.current.scrollHeight}px`);
        }
    }, []); // 빈 배열을 두어 처음 렌더링 시에도 실행되게 함

    return (
        <div className="challenge-chlng">
            <div className="base-chlng"></div>
            <div className="status-bar-hidden-chlng"></div>
            <div className="div23-chlng">챌린지</div>
            <div className="base2-chlng"></div>
            <div className="status-bar-hidden2-chlng"></div>
            <div className="ellipse-185-chlng"></div>
            <img className="추천_1" src={require('../assets/추천_1.png')} alt="추천_계산기_1" />
            <img className="추천_3" src={require('../assets/추천_3.png')} alt="추천_계산기_2" />
            <img className="추천_4" src={require('../assets/추천_4.png')} alt="추천_계산기_3" />
            <img className="추천_2" src={require('../assets/추천_2.png')} alt="추천_상품" />
            <div className="frame-2608159-chlng">
            <div className="frame-2608159-chlng-c">
                {/* 아코디언 외부 컨테이너 */}
                <div ref={outerContainerRef} style={{ overflow: 'hidden', transition: 'height 0.3s ease', height: accordionHeight }}>
                    {/* 아코디언 */}
                    <div className="accordion-container"
                        ref={accordionRef}
                        style={{ overflow: "hidden", transition: "height 0.3s ease" }}
                    >
                        {isAccordionOpen && (
                            <div className="accordion-content">
                                <div className="_5-chlng">5년동안 천만원 모으기</div>
                                <div className="rectangle-3396-chlng"></div>
                                <div className="rectangle-3377-chlng"></div>
                                <div className="rectangle-3378-chlng"></div>
                                <div className="rectangle-3379-chlng"></div>
                                <div className="rectangle-3380-chlng"></div>
                                <div className="rectangle-3381-chlng"></div>
                                <div className="rectangle-3382-chlng"></div>
                                <div className="_10-chlng">하루동안 무지출 챌린지 10번</div>
                                <div className="ellipse-142-chlng"></div>
                                <div className="ellipse-143-chlng"></div>
                                <div className="ellipse-144-chlng"></div>
                                <div className="ellipse-145-chlng"></div>
                                <div className="ellipse-146-chlng"></div>
                                <div className="ellipse-147-chlng"></div>
                                <div className="ellipse-148-chlng"></div>
                                <div className="ellipse-149-chlng"></div>
                                <div className="ellipse-150-chlng"></div>
                                <div className="ellipse-151-chlng"></div>
                                <div className="_3-chlng">한달에 배달은 3번만 챌린지</div>
                                <div className="line-9-chlng"></div>
                                <div className="line-243-chlng"></div>
                                <div className="line-244-chlng"></div>
                                <img className="image-8-chlng" src="image-80.png" />
                                <img className="image-9-chlng" src="image-90.png" />
                                <div className="_20-chlng">20%</div>
                                <div className="_40-chlng">40%</div>
                                <div className="_80-chlng">80%</div>
                                <div className="ellipse-152-chlng"></div>
                                <div className="ellipse-153-chlng"></div>
                                <div className="ellipse-155-chlng"></div>
                                <div className="ellipse-156-chlng"></div>
                                <div className="ellipse-157-chlng"></div>
                                <div className="ellipse-167-chlng"></div>
                                <div className="ellipse-168-chlng"></div>
                                <div className="ellipse-169-chlng"></div>
                                <div className="ellipse-158-chlng"></div>
                                <div className="ellipse-170-chlng"></div>
                                <div className="ellipse-171-chlng"></div>
                                <div className="ellipse-172-chlng"></div>
                                <div className="ellipse-182-chlng"></div>
                                <div className="ellipse-159-chlng"></div>
                                <div className="ellipse-174-chlng"></div>
                                <div className="ellipse-175-chlng"></div>
                                <div className="ellipse-161-chlng"></div>
                                <div className="ellipse-162-chlng"></div>
                                <div className="ellipse-176-chlng"></div>
                                <div className="ellipse-177-chlng"></div>
                                <div className="ellipse-178-chlng"></div>
                                <div className="ellipse-183-chlng"></div>
                                <div className="ellipse-163-chlng"></div>
                                <div className="_6-chlng">12월</div>
                                <div className="ellipse-164-chlng"></div>
                                <div className="ellipse-165-chlng"></div>
                                <div className="ellipse-166-chlng"></div>
                                <div className="_7-chlng">1월</div>
                                <div className="_8-chlng">2월</div>
                                <div className="_9-chlng">3월</div>
                                <div className="_102-chlng">4월</div>
                                <div className="_11-chlng">5월</div>
                            </div>
                        )}
                    </div>
                </div>
                {/* 아코디언 토글 버튼 */}
                <div className="div10-chlng" onClick={toggleAccordion}>나는 예산 지킴이입니다</div>
                <div className="div11-chlng" onClick={toggleAccordion}>
                    {isAccordionOpen ? "△" : "▽"}
                </div>
                <div className="div22-chlng">▽</div>
            </div>
            <div>
            {/* 아코디언 내용이 닫힐 때 아래 요소들의 마진을 조절 */}
            <style>
                {`
                .frame-2608159-chlng-c {
                    margin-top: ${contentMarginTop};
                    transition: margin-top 0.3s ease;
                }
                `}
            </style>
                <div className="friends-accordion">
                    <div className="div14-chlng" onClick={toggleFriendsAccordion}>
                        친구랑
                        <div className="div13-chlng">{isFriendsAccordionOpen ? "△" : "▽"}</div>
                    </div>
                    {isFriendsAccordionOpen && (
                        <div className="friends-accordion-content">
                            {/* 친구 아코디언 내용 */}
                            <img className="dony_친구랑" src={require('../assets/Dony_친구랑.png')} alt="친구2" />
                            <div className="ellipse-135-chlng"></div>
                            <img className="happy_친구랑" src={require('../assets/Happy_친구랑.png')} alt="친구1" />
                            <div className="ellipse-136-chlng"></div>
                            <div className="ellipse-838-chlng"></div>
                            <img className="주머니_친구랑" src={require('../assets/주머니_친구랑.png')} alt="친구3" />
                            <div className="ellipse-820-chlng"></div>
                            <div className="rectangle-4308-chlng"></div>
                            <div className="rectangle-4309-chlng"></div>
                            <div className="_30-chlng">30%</div>
                            <div className="_300-chlng">여행경비 300만원 모으기</div>
                            <div className="div19-chlng">공유중인 챌린지</div>
                            <div className="div20-chlng">친구 추가하기 +</div>
                            <div className="ellipse-830-chlng"></div>
                            <img className="happy_친구랑_mini" src={require('../assets/Happy_친구랑.png')} alt="친구1" />
                            <img className="현금_친구랑" src={require('../assets/현금_친구랑.png')} alt="친구4" />
                            <img className="주머니_친구랑_mini" src={require('../assets/주머니_친구랑.png')} alt="친구3" />
                            <div className="ellipse-822-chlng"></div>
                            <div className="ellipse-834-chlng"></div>
                            <div className="div21-chlng">+</div>
                        </div>
                    )}
                </div>
            </div>
            <div className = "additional-element">
                <div className="div-chlng">청년적금상품 순위</div>
                <div className="div2-chlng">이달의 저축왕</div>
                <div className="div3-chlng">맛집좌</div>
                <div className="div4-chlng">뱃지</div>
                <div className="_2-chlng">
                    <span>
                        <span className="_2-span-chlng">
                            지금처럼 소비한다면,
                            <br />
                            천만원을 모으는데
                        </span>
                        <span className="_2-span2-chlng">“2년”</span>
                        <span className="_2-span3-chlng">이 더 걸립니다.</span>
                    </span>
                </div>
                <div className="div5-chlng-미션">미션</div>
                <div className="div5-chlng">다음달부터 “맛집” 소비를 줄이세요</div>
                <div className="div6-chlng">청년적금상품 추천 &gt;</div>
                <div className="div7-chlng">은행별 청년적금 금리 혜택 알아보기 &gt;</div>
                <div className="div8-chlng">다음달 예산추천 &gt;</div>
                <div className="div9-chlng">
                    <span>
                        <span className="div-9-span-chlng">“맛집 방문”</span>
                        <span className="div-9-span2-chlng">
                            을 줄이지 않아도
                            <br />
                            천만원을 모을 수 있다고?
                        </span>
                    </span>
                </div>
                <div className="_1-chlng">
                    <span>
                        <span className="_1-span-chlng">내 또래는 나보다</span>
                        <span className="_1-span2-chlng">
                            <br />
                            “1년 먼저”
                        </span>
                        <span className="_1-span3-chlng">천만원을 모은다고?</span>
                    </span>
                </div>
                <div className="ellipse-138-chlng"></div>
                <div className="ellipse-139-chlng"></div>
                <div className="ellipse-140-chlng"></div>
                <div className="ellipse-184-chlng"></div>
                <div className="ellipse-141-chlng"></div>
                <img className="뱃지_key" src={require('../assets/뱃지_key.png')} alt="뱃지1" />
                <img className="뱃지_pig" src={require('../assets/뱃지_pig.png')} alt="뱃지2" />
                <img className="뱃지_gift" src={require('../assets/뱃지_gift.png')} alt="뱃지3" />
                <img className="뱃지_coin" src={require('../assets/뱃지_coin.png')} alt="뱃지4" />
                <div className="line-11-chlng"></div>
                <div className="line-10-chlng"></div>
                <div className="line-10-chlng-미션"></div>
                <div className="line-5-chlng"></div>
                <div className="line-12-chlng"></div>
                <div className="line-13-chlng"></div>
                <div className="line-14-chlng"></div>
                <div className="line-15-chlng"></div>
                <div className="line-17-chlng"></div>
                <div className="line-19-chlng"></div>
                <div className="line-18-chlng"></div>
                <div className="line-16-chlng"></div>
                <div className="_12-chlng">매달 맛집 방문을 1회 더 할 수 있어요</div>
                <div className="_4-3-chlng">4년 3개월만에 천만원을 모을 수 있어요</div>
                <div className="_4-chlng">4년만에 천만원을 모을 수 있어요</div>
                <div className="line-23-chlng"></div>
            </div>

        </div>
        </div>
    );
}

export default ChallengePage;
