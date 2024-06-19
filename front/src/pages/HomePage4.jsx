import React from "react";
import Header from "../components/Header/Header";
import ScheduleAddModal from "../components/modals/ScheduleAddModal";
import AccountAddModal from "../components/modals/AccountAddModal";
import ScheduleAccount from "../components/Account/ScheduleAccount";
import { ScheduleProvider } from "../contexts/ScheduleContext";
import '../styles = css/HomePage4.css';
import '../styles = css/AddModal.css';



function HomePage4() {
    return (
        <ScheduleProvider>
            <div className="home-bg-hp4">
                <div>
                    <Header />
                    <div className="first-schedule-account-hp4">
                        <div className="line-231-hp4"></div>
                        <div className="rectangle-4247-hp4"></div>
                        <div className="schedule-2-hp4">카페에서 팀플</div>
                        <div className="ellipse-117-hp4"></div>
                        <div className="_3-2520-hp4">예상 지출 3만 2520원</div>
                        <div className="_5-3-rectangle-hp4"></div>
                        <div className="_3-25202-hp4">예상 지출 3만 2520원</div>
                        <div className="schedule-1-hp4">재석이랑 맛집 탐방</div>
                        <div className="ellipse-1172-hp4"></div>
                        <div className="_0-hp4">0원</div>
                        <div className="div-hp4">지출</div>
                        <div className="_02-hp4">0원</div>
                        <div className="div2-hp4">수입</div>
                        <div className="div3-hp4">›</div>
                        <div className="_5-28-hp4">5월 28일(화) 일정</div>
                        <div className="div4-hp4">오늘</div>
                        <div className="line-2312-hp4"></div>
                        <div className="_5-32-hp4">
                            <div className="rectangle-42472-hp4"></div>
                            <div className="div5-hp4">카페에서 팀플</div>
                            <div className="ellipse-1173-hp4"></div>
                            <div className="_3-25203-hp4">예상 지출 3만 2520원</div>
                            <div className="_2-hp4">추천 지출 2만원</div>
                        </div>
                        <div className="_5-33-hp4">
                            <div className="_5-3-rectangle2-hp4"></div>
                            <div className="_03-hp4">예상 지출 0원</div>
                            <div className="_04-hp4">추천 지출 0원</div>
                            <div className="div6-hp4">중간고사</div>
                            <div className="ellipse-1174-hp4"></div>
                        </div>
                        <div className="_05-hp4">0원</div>
                        <div className="div7-hp4">지출</div>
                        <div className="_06-hp4">0원</div>
                        <div className="div8-hp4">수입</div>
                        <div className="div9-hp4">›</div>
                        <div className="_5-31-hp4">5월 31일(금) 일정</div>
                        <div className="line-2313-hp4"></div>
                        <div className="_5-34-hp4">
                            <div className="rectangle-42473-hp4"></div>
                            <div className="div10-hp4">카페에서 팀플</div>
                            <div className="ellipse-1175-hp4"></div>
                            <div className="_3-25204-hp4">예상 지출 3만 2520원</div>
                            <div className="_22-hp4">추천 지출 2만원</div>
                        </div>
                        <div className="_5-35-hp4">
                            <div className="_5-3-rectangle3-hp4"></div>
                            <div className="_1-2520-hp4">예상 지출 1만 2520원</div>
                            <div className="_1-hp4">추천 지출 1만원</div>
                            <div className="div11-hp4">운동 동아리</div>
                            <div className="ellipse-1176-hp4"></div>
                        </div>
                        <div className="_07-hp4">0원</div>
                        <div className="div12-hp4">지출</div>
                        <div className="_08-hp4">0원</div>
                        <div className="div13-hp4">수입</div>
                        <div className="div14-hp4">›</div>
                        <div className="_6-4-hp4">6월 4일(화) 일정</div>
                        <div className="line-2314-hp4"></div>
                        <div className="_5-34-hp4">
                            <div className="rectangle-42474-hp4"></div>
                            <div className="div15-hp4">세호랑 맛집 탐방</div>
                            <div className="ellipse-1177-hp4"></div>
                            <div className="_3-25205-hp4">예상 지출 3만 2520원</div>
                            <div className="_23-hp4">추천 지출 2만원</div>
                        </div>
                        <div className="_5-35-hp4">
                            <div className="_5-3-rectangle4-hp4"></div>
                            <div className="_3-25206-hp4">예상 지출 3만 2520원</div>
                            <div className="_24-hp4">추천 지출 2만원</div>
                            <div className="div16-hp4">카페에서 팀플</div>
                            <div className="ellipse-1178-hp4"></div>
                        </div>
                        <div className="_09-hp4">0원</div>
                        <div className="div17-hp4">지출</div>
                        <div className="_010-hp4">0원</div>
                        <div className="div18-hp4">수입</div>
                        <div className="div19-hp4">›</div>
                        <div className="_6-2-hp4">6월 2일(일) 일정</div>
                        <div className="_5-42-hp4">
                            <div className="rectangle-42475-hp4"></div>
                            <div className="_3-1200-hp4">예상 지출 3만 1200원</div>
                            <div className="div20-hp4">민경이랑 영화</div>
                            <div className="ellipse-123-hp4"></div>
                        </div>
                        <div className="div21-hp4">지출</div>
                        <div className="_011-hp4">0원</div>
                        <div className="div22-hp4">수입</div>
                        <div className="_012-hp4">0원</div>
                        <div className="_5-29-hp4">5월 29일(수) 일정</div>
                        <div className="div23-hp4">›</div>
                        <div className="_5-30-hp4">5월 30일(목) 일정</div>
                        <div className="div24-hp4">
                            <div className="rectangle-42476-hp4"></div>
                            <div className="div25-hp4">일정 없음</div>
                        </div>
                        <div className="div26-hp4">지출</div>
                        <div className="_013-hp4">0원</div>
                        <div className="div27-hp4">수입</div>
                        <div className="_014-hp4">0원</div>
                        <div className="div28-hp4">›</div>
                        <div className="_6-1-hp4">6월 1일(토) 일정</div>
                        <div className="div29-hp4">
                            <div className="rectangle-42477-hp4"></div>
                            <div className="div30-hp4">일정 없음</div>
                        </div>
                        <div className="div31-hp4">지출</div>
                        <div className="_015-hp4">0원</div>
                        <div className="div32-hp4">수입</div>
                        <div className="_016-hp4">0원</div>
                        <div className="div33-hp4">›</div>
                        <div className="_6-3-hp4">6월 3일(월) 일정</div>
                        <div className="div29-hp4">
                            <div className="rectangle-42478-hp4"></div>
                            <div className="div34-hp4">일정 없음</div>
                        </div>
                        <div className="div35-hp4">지출</div>
                        <div className="_017-hp4">0원</div>
                        <div className="div36-hp4">수입</div>
                        <div className="_018-hp4">0원</div>
                        <div className="div37-hp4">›</div>
                        <div className="_6-5-hp4">6월 5일(수) 일정</div>
                        <div className="div29-hp4">
                            <div className="rectangle-42479-hp4"></div>
                            <div className="div38-hp4">일정 없음</div>
                        </div>
                        <div className="div39-hp4">지출</div>
                        <div className="_019-hp4">0원</div>
                        <div className="div40-hp4">수입</div>
                        <div className="_020-hp4">0원</div>
                        <div className="div41-hp4">›</div>
                        <div className="_6-6-hp4">6월 6일(목) 일정</div>
                        <div className="div29-hp4">
                            <div className="rectangle-424710-hp4"></div>
                            <div className="div42-hp4">일정 없음</div>
                        </div>
                        <div className="div43-hp4">지출</div>
                        <div className="_021-hp4">0원</div>
                        <div className="div44-hp4">수입</div>
                        <div className="_022-hp4">0원</div>
                        <div className="div45-hp4">›</div>
                    </div>
                    <ScheduleAddModal />
                    <AccountAddModal />
                </div>
            </div>
        </ScheduleProvider>
    );
}

export default HomePage4;