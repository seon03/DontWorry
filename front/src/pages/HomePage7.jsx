import React from "react";
import Header from "../components/Header/Header";
import ScheduleAddModal from "../components/modals/ScheduleAddModal";
import AccountAddModal from "../components/modals/AccountAddModal";
import ScheduleAccount from "../components/Account/ScheduleAccount";
import { ScheduleProvider } from "../contexts/ScheduleContext";
import '../styles = css/HomePage5.css';
import '../styles = css/AddModal.css';
import { useLocation } from "react-router-dom";



function HomePage7() {
    const location = useLocation();
    const formData = location.state;

    const getOutputBasedOnCategory = (category) => {
        switch (category) {
            case "식사":
                return "1만 2200원";
            case "약속":
                return "5200원";
            case "문화생활":
                return "5만 9500원";
            case "생활용품":
                return "9100원";
            default:
                return "카테고리를 선택하세요.";
        }
    };

    return (
        <ScheduleProvider>
            <div className="home-bg-hp5">
                <div style={{}}>
                    <Header />
                    <div className="first-schedule-account-hp5">
                        <div className="line-231-hp5"></div>
                        <div className="_5-32-hp5">
                            <div className="rectangle-4247-hp5"></div>
                            <div className="div-hp5">카페에서 팀플</div>
                            <div className="ellipse-117-hp5"></div>
                            <div className="_1-2520-hp5">예상 지출 1만 2520원</div>
                            <div className="_2-hp5">추천 지출 2만원</div>
                        </div>
                        <div className="_5-33-hp5">
                            <div className="_5-3-rectangle-hp5"></div>
                            <div className="_0-hp5">예상 지출 0원</div>
                            <div className="_02-hp5">추천 지출 0원</div>
                            <div className="div2-hp5">중간고사</div>
                            <div className="ellipse-1172-hp5"></div>
                        </div>
                        <div className="_03-hp5">0원</div>
                        <div className="div3-hp5">지출</div>
                        <div className="_04-hp5">0원</div>
                        <div className="div4-hp5">수입</div>
                        <div className="div5-hp5">›</div>
                        <div className="_6-10-hp5">6월 10일(월) 일정</div>
                        <div className="div6-hp5">
                            <div className="rectangle-4439-hp5"></div>
                            <div className="div7-hp5">#시험</div>
                            <div className="rectangle-4440-hp5"></div>
                            <div className="_1-hp5">1</div>
                        </div>
                        <div className="div8-hp5">
                            <div className="rectangle-44392-hp5"></div>
                            <div className="div9-hp5">#과제</div>
                            <div className="rectangle-44402-hp5"></div>
                            <div className="_12-hp5">1</div>
                        </div>
                        <div className="div10-hp5">
                            <div className="rectangle-44393-hp5"></div>
                            <div className="_12500-hp5">#총지출_12500원</div>
                        </div>
                        <div className="line-2312-hp5"></div>
                        <div className="_5-34-hp5">
                            <div className="rectangle-42472-hp5"></div>
                            <div className="div11-hp5">카페에서 팀플</div>
                            <div className="ellipse-1173-hp5"></div>
                            <div className="_1-25202-hp5">예상 지출 1만 2520원</div>
                            <div className="_22-hp5">추천 지출 2만원</div>
                        </div>
                        <div className="_5-35-hp5">
                            <div className="_5-3-rectangle2-hp5"></div>
                            <div className="_9252-hp5">예상 지출 9252원</div>
                            <div className="_13-hp5">추천 지출 1만원</div>
                            <div className="div12-hp5">운동</div>
                            <div className="ellipse-1174-hp5"></div>
                        </div>
                        <div className="_05-hp5">0원</div>
                        <div className="div13-hp5">지출</div>
                        <div className="_06-hp5">0원</div>
                        <div className="div14-hp5">수입</div>
                        <div className="div15-hp5">›</div>
                        <div className="_6-14-hp5">6월 14일(금) 일정</div>
                        <div className="div6-hp5">
                            <div className="rectangle-44394-hp5"></div>
                            <div className="rectangle-44403-hp5"></div>
                            <div className="_14-hp5">1</div>
                            <div className="div16-hp5">#운동</div>
                        </div>
                        <div className="div17-hp5">
                            <div className="rectangle-44395-hp5"></div>
                            <div className="rectangle-44404-hp5"></div>
                            <div className="_15-hp5">1</div>
                            <div className="div18-hp5">#과제</div>
                        </div>
                        <div className="div19-hp5">
                            <div className="rectangle-44396-hp5"></div>
                            <div className="_22000-hp5">#총지출_22000원</div>
                        </div>
                        <div className="line-2313-hp5"></div>
                        <div className="_5-34-hp5">
                            <div className="rectangle-42473-hp5"></div>
                            <div className="div20-hp5">세호랑 맛집 탐방</div>
                            <div className="ellipse-1175-hp5"></div>
                            <div className="_2-2520-hp5">예상 지출 2만 2520원</div>
                            <div className="_23-hp5">추천 지출 2만원</div>
                        </div>
                        <div className="_5-36-hp5">
                            <div className="_5-3-rectangle3-hp5"></div>
                            <div className="_1-25203-hp5">예상 지출 1만 2520원</div>
                            <div className="_16-hp5">추천 지출 1만원</div>
                            <div className="div21-hp5">카페에서 팀플</div>
                            <div className="ellipse-1176-hp5"></div>
                        </div>
                        <div className="_07-hp5">0원</div>
                        <div className="div22-hp5">지출</div>
                        <div className="_08-hp5">0원</div>
                        <div className="div23-hp5">수입</div>
                        <div className="div24-hp5">›</div>
                        <div className="_6-12-hp5">6월 12일(수) 일정</div>
                        <div className="div25-hp5">
                            <div className="rectangle-44397-hp5"></div>
                            <div className="div26-hp5">#과제</div>
                            <div className="rectangle-44405-hp5"></div>
                            <div className="_17-hp5">1</div>
                        </div>
                        <div className="div25-hp5">
                            <div className="rectangle-44398-hp5"></div>
                            <div className="div27-hp5">#약속</div>
                            <div className="rectangle-44406-hp5"></div>
                            <div className="_18-hp5">1</div>
                        </div>
                        <div className="div28-hp5">
                            <div className="rectangle-44399-hp5"></div>
                            <div className="_35000-hp5">#총지출_35000원</div>
                        </div>
                        <div className="_6-9-hp5">6월 9일(일) 일정</div>
                        <div className="div29-hp5">
                            <div className="rectangle-42474-hp5"></div>
                            <div className="div30-hp5">일정 없음</div>
                        </div>
                        <div className="div31-hp5">지출</div>
                        <div className="_09-hp5">0원</div>
                        <div className="div32-hp5">수입</div>
                        <div className="_010-hp5">0원</div>
                        <div className="div33-hp5">›</div>
                        <div className="_6-11-hp5">6월 11일(화) 일정</div>
                        <div className="div34-hp5">
                            <div className="rectangle-42475-hp5"></div>
                            <div className="div35-hp5">일정 없음</div>
                        </div>
                        <div className="div36-hp5">지출</div>
                        <div className="_011-hp5">0원</div>
                        <div className="div37-hp5">수입</div>
                        <div className="_012-hp5">0원</div>
                        <div className="div38-hp5">›</div>
                        <div className="_6-13-hp5">6월 13일(목) 일정</div>
                        <div className="div34-hp5">
                            <div className="rectangle-42476-hp5"></div>
                            <div className="div39-hp5">일정 없음</div>
                        </div>
                        <div className="div40-hp5">지출</div>
                        <div className="_013-hp5">0원</div>
                        <div className="div41-hp5">수입</div>
                        <div className="_014-hp5">0원</div>
                        <div className="div42-hp5">›</div>
                        <div className="_6-15-hp5">6월 15일(토) 일정</div>
                        <div className="div34-hp5">
                            <div className="rectangle-42477-hp5"></div>
                            <div className="div43-hp5">일정 없음</div>
                        </div>
                        <div className="div44-hp5">지출</div>
                        <div className="_015-hp5">0원</div>
                        <div className="div45-hp5">수입</div>
                        <div className="_016-hp5">0원</div>
                        <div className="div46-hp5">›</div>
                        <div className="_6-16-hp5">6월 16일(일) 일정</div>
                        <div className="div34-hp5">
                            <div className="rectangle-42478-hp5"></div>
                            <div className="div47-hp5">일정 없음</div>
                        </div>
                        <div className="div48-hp5">지출</div>
                        <div className="_017-hp5">0원</div>
                        <div className="div49-hp5">수입</div>
                        <div className="_018-hp5">0원</div>
                        <div className="div50-hp5">›</div>
                        <div className="div51-hp5">
                            <div className="rectangle-42479-hp5"></div>
                            <div className="_3000-hp5">3000원</div>
                            <div className="div52-hp5">버스</div>
                            <div className="div53-hp5"></div>
                        </div>
                        <div className="div51-hp5">
                            <div className="rectangle-4248-hp5"></div>
                            <div className="_10000-hp5">10000원</div>
                            <div className="div54-hp5">스타벅스</div>
                            <div className="div55-hp5"></div>
                        </div>
                        <div className="line-2314-hp5"></div>
                        <div className="_5-37-hp5">
                            <div className="rectangle-424710-hp5"></div>
                            <div className="_300-000-hp5">300,000원</div>
                            <div className="div56-hp5">용돈</div>
                            <div className="ellipse-1177-hp5"></div>
                            <div className="_019-hp5">0원</div>
                        </div>
                        <div className="_5-38-hp5">
                            <div className="_5-3-rectangle4-hp5"></div>
                            <div className="_12-000-8-000-hp5">
                            <span>
                                <span className="_12-000-8-000-span-hp5">식사</span>
                                <span className="_12-000-8-000-span2-hp5">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;12,000원
                                <br />
                                </span>
                                <span className="_12-000-8-000-span3-hp5">카페</span>
                                <span className="_12-000-8-000-span4-hp5"></span>
                                <span className="_12-000-8-000-span5-hp5">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8,000원</span>
                            </span>
                            </div>
                            <svg
                            className="line-214-hp5"
                            width="319"
                            height="2"
                            viewBox="0 0 319 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M0.160156 0.9999L318.443 1" stroke="#D3D3D7" />
                            </svg>
                            <div className="_2-3320-hp5">예상 지출 2만 3320원</div>
                            <div className="_24-hp5">추천 지출 2만원</div>
                            <div className="_20-000-hp5">20,000원</div>
                            <div className="div57-hp5">재석이랑 맛집 탐방</div>
                            <div className="ellipse-1178-hp5"></div>
                            <div className="_020-hp5">0원</div>
                        </div>
                        <div className="_20-0002-hp5">20,000원</div>
                        <div className="div58-hp5">지출</div>
                        <div className="_300-0002-hp5">300,000원</div>
                        <div className="div59-hp5">수입</div>
                        <div className="div60-hp5">›</div>
                        <div className="_6-7-hp5">6월 7일(금) 일정</div>
                        <div className="div61-hp5">오늘</div>
                        <div className="div62-hp5">
                            <div className="rectangle-424711-hp5"></div>
                            <div className="_1-3200-hp5">예상 지출 1만 3200원</div>
                            <div className="_19-hp5">추천 지출 1만원</div>
                            <div className="div63-hp5">세호랑 카페</div>
                            <div className="ellipse-123-hp5"></div>
                        </div>
                        <div className="div64-hp5">
                            <div className="rectangle-4438-hp5"></div>
                            <div className="div65-hp5">#평소보다 지출이 많을 것으로 예상돼요, 주의하세요!</div>
                        </div>
                        <div className="_25-hp5">
                            <div className="rectangle-443910-hp5"></div>
                            <div className="rectangle-44407-hp5"></div>
                            <div className="div66-hp5">#약속</div>
                            <div className="_26-hp5">2</div>
                        </div>
                        <div className="_31700-hp5">
                            <div className="rectangle-443911-hp5"></div>
                            <div className="_36-000-hp5">#총_예상지출_36,000원</div>
                        </div>
                        <div className="_5-42-hp5">
                            <div className="rectangle-424712-hp5"></div>
                            <div className="_2-2500-hp5">예상 지출 2만 2500원</div>
                            <div className="_27-hp5">추천 지출 2만원</div>
                            <div className="div67-hp5">민경이랑 영화</div>
                            <div className="ellipse-1232-hp5"></div>
                        </div>
                        <div className="_5-42-hp5">
                            <div className="rectangle-42473-j-hp5"></div>
                            <div className="_3-1200-j-hp5">예상 지출 2만 7250원</div>
                            <div className="_22-j-hp5">추천 지출 2만원</div>
                            <div className="div12-j-hp5">진주랑 밥약</div>
                            <div className="ellipse-123-j-hp5"></div>
                        </div>
                        <div className="div68-hp5">지출</div>
                        <div className="_021-hp5">0원</div>
                        <div className="div69-hp5">수입</div>
                        <div className="_022-hp5">0원</div>
                        <div className="_6-8-hp5">6월 8일(토) 일정</div>
                        <div className="div70-hp5">›</div>
                        <div className="_22500-hp5">
                            <div className="rectangle-443912-hp5"></div>
                            <div className="_225002-hp5">#총지출_22500원</div>
                        </div>
                        <div className="div71-hp5">
                            <div className="rectangle-443913-hp5"></div>
                            <div className="div72-hp5">#문화생활</div>
                            <div className="rectangle-44408-hp5"></div>
                            <div className="_110-hp5">1</div>
                        </div>
                        <div className="div73-hp5">✓</div>
                    </div>

                    <ScheduleAddModal />
                    <AccountAddModal />
                </div>
            </div>
        </ScheduleProvider>
    );
}

export default HomePage7;