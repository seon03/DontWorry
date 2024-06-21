# 돈워리(Be Happy) Frontend

## 1) AWS EC2 + Nginx (+ React)

1. EC2 인스턴스 생성 후 서버 접속
   
   <img alt="ec2 server" src="https://github.com/keke5149/2023_DontWorry/assets/108112575/3a28d0db-3697-4044-9848-ce937b970bc6" width=500/>
2. Nginx 설치 & 실행
   git bash에서 다음 명령어를 입력한다
   ```
   $ sudo apt update
   $ sudo apt install nginx //nginx 설치
   $ sudo service nginx start //nginx 실행 시작
   $ sudo service nginx status //nginx 실행 상태 확인
   ```
   <img alt="nginx active" src="https://github.com/keke5149/2023_DontWorry/assets/108112575/e177e624-e27b-414f-80e2-e867fb07c452" width=500/>
3. EC2 인스턴스 페이지에서 인바운드 규칙을 설정하여 Nginx의 포트를 개방한다
 
   인바운드 규칙 편집
4. 공개 IP로 접속한다
5. 성공 화면

   <img alt="ec2-nginx" src="https://github.com/keke5149/2023_DontWorry/assets/108112575/66fd01d1-1431-48ec-a78e-ab8076fd0231" width=400/>


## 2) React application 생성

(github front 폴더)

1. node.js 설치(구글에서 사이트 검색)
2. react 설치하고자 하는 폴더열고
3. Terminal에서
   
    npx create-react-app dont-worry
   
4. dont-worry 폴더에 깃헙 파일 업로드
5. 실행하려면 Terminal에서
   ```
    cd dont-worry
    npm start
   ```
6. 웹브라우저에서 localhost:3000 자동으로 열려서 실행되는 것을 확인할 수 있다
7. build 정적 파일 생성
   ```
   npm run build
   ```
   react app 폴더에 build 파일이 생성된 것을 확인할 수 있다

## 디렉토리 구조

```
dont-worry
│  .env
│  .gitignore
│  package-lock.json
│  package.json
│  README.md
│  가계부1.csv
│  가계부2.csv
│  
├─public
│      dontworrylogo.png
│      dontworrylogo2.png
│      favicon.ico
│      index.html
│      logo192.png
│      logo512.png
│      manifest.json
│      robots.txt
│      
└─src
    │  App.css
    │  App.js
    │  App.test.js
    │  bootstrap.min.css
    │  data.json
    │  index.css
    │  index.js
    │  logo.svg
    │  reportWebVitals.js
    │  setupTests.js
    │  
    ├─assets
    │      bgimg.png
    │      bgimg2.png
    │      Dony_목표.png
    │      Dony_챌린지_설정.png
    │      Dony_친구랑.png
    │      happy1.png
    │      Happy_친구랑.png
    │      profileimg.png
    │      문자내역.png
    │      문자내역_한글.png
    │      뱃지_coin.png
    │      뱃지_gift.png
    │      뱃지_key.png
    │      뱃지_pig.png
    │      영수증_샐러드.png
    │      주머니_친구랑.png
    │      추천_1.png
    │      추천_2.png
    │      추천_3.png
    │      추천_4.png
    │      현금_친구랑.png
    │      
    ├─components
    │  ├─Account
    │  │      Accordion.jsx
    │  │      AccordionHeader.jsx
    │  │      AccordionItem.jsx
    │  │      AccordionItems.jsx
    │  │      AccountList.jsx
    │  │      data.js
    │  │      ScheduleAccount.jsx
    │  │      UnexpectedItem.jsx
    │  │      
    │  ├─Budget
    │  │      BudgetBar.jsx
    │  │      BudgetCircle.jsx
    │  │      BudgetCircleTotal.jsx
    │  │      BudgetInput.jsx
    │  │      BudgetLiquidCircle.jsx
    │  │      BudgetLiquidCircle2.jsx
    │  │      BudgetScheduleCircle.jsx
    │  │      BudgetScheduleCircle2.jsx
    │  │      BudgetStatus.jsx
    │  │      ModifyLiquidCircle.jsx
    │  │      ParentLiquidCircle.jsx
    │  │      sourceData.json
    │  │      
    │  ├─Header
    │  │      Header.jsx
    │  │      ProfileStatus.jsx
    │  │      
    │  ├─modals
    │  │      AccountAddModal.jsx
    │  │      DayFilterModal.jsx
    │  │      MonthFilterModal.jsx
    │  │      ScheduleAddModal.jsx
    │  │      
    │  └─ui
    │          AlertButton.jsx
    │          BottomNav.jsx
    │          CustomDate.jsx
    │          MenuButton.jsx
    │          MonthFilterButton.jsx
    │          NewItemButton.jsx
    │          TextInput.jsx
    │          UploadButton.jsx
    │          
    ├─config
    ├─constants
    ├─contexts
    │      ScheduleContext.jsx
    │      
    ├─hooks = hoc
    ├─pages
    │      BudgetBubblePage.jsx
    │      ChallengePage.jsx
    │      DontWorryOnboarding.jsx
    │      FixedCategoryPage.jsx
    │      GoalDescribePage.jsx
    │      GoalInputPage.jsx
    │      GoogleLoginPage.jsx
    │      HomePage.jsx
    │      HomePage4.jsx
    │      HomePage5.jsx
    │      HomePage6.jsx
    │      HomePage7.jsx
    │      HomeThrd.jsx
    │      HomeTwo.jsx
    │      LoginPage.jsx
    │      LowExpChallengePage.jsx
    │      OCRPage.jsx
    │      SortBudgetPage.jsx
    │      StatisticPage.jsx
    │      
    ├─styles = css
    │      AccordionHeader.css
    │      AccordionItems.css
    │      AccountAddModal.css
    │      AccountList.css
    │      AddModal.css
    │      BottomNav.css
    │      BudgetBar.css
    │      BudgetCircle.css
    │      BudgetCircleTotal.css
    │      BudgetInput.css
    │      BudgetLiquidCircle.css
    │      BudgetStatus.css
    │      ChallengePage.css
    │      DontWorryOnboarding.css
    │      FixedCategoryPage.css
    │      GoalDescribePage.css
    │      GoalInputPage.css
    │      GoogleLoginPage.css
    │      Header.css
    │      HomePage.css
    │      HomePage4.css
    │      HomePage5.css
    │      LoginPage.css
    │      LowExpChallengePage.css
    │      ModifyLiquidCircle.css
    │      MonthFilterButton.css
    │      OCRPage.css
    │      ProfileStatus.css
    │      SortBudget.css
    │      StatisticPage.css
    │      UnexpectedItem.css
    │      UploadButton.css
    │      
    └─utils
            addComma.jsx
            
```

<br>
   

## 3) Nginx + React app 배포

1. github에 있는 [react 코드](https://github.com/keke5149/2023_DontWorry/tree/main/front)를 가져온다. (repository 전체를 git cloning 하는 것이 아니라 repository의 front 폴더만 가져오는 방법)
   ```
   $ git intit //git 초기화
   $ git config core.sparseCheckout true //Sparse Checkout 기능 활성화
   $ git remote add -f origin https://github.com/seon03/2023_DontWorry.git //clone하기 원하는 remote 저장소의 주소 선언
   $ echo front/ >> .git/info/sparse-checkout //front 폴더 path 선언
   $ git pull origin main //pull
   $ cat .git/info/sparse-checkout //front 폴더가 가져와졌는지 확인
   $ ls -l front //front의 react 코드가 다 들어왔는지 확인
   ```
   <img src="https://github.com/keke5149/2023_DontWorry/assets/108112575/4bbe3c49-63c4-4574-8004-a691c66f81ef" width=500/>

2. node.js 및 npm 설치
   ```
   $ sudo apt update
   $ sudo apt install npm
   $ node -v //버전 출력
   $ npm -v //버전 출력
   ```

3. npm run build 실행
4. build 파일 옮기기
5. nginx 설치 및 실행
6. EC2 인스턴스 퍼블릭 ip 주소 이동
7. 도메인 구매
8. cloudflare에 등록(DNS)
   
   퍼블릭 IP 주소로 수정하기
   
9. 배포 완료 페이지
   
   <img src="https://github.com/keke5149/2023_DontWorry/assets/108112575/7ef062c1-1286-4339-a312-bd46054ec3ab" width=200/>

10. 보안

    웹사이트를 안전하게 보호하기 위해 SSL 인증서를 발급한다
    
    ```
    $ sudo apt-get install certbot python3-certbot-nginx //certbot 설치 - 인증서 생성할 수 있음
    $ sudo certbot --nginx -d <domain-name> //dontworry.o-r.kr -> 이메일 입력
    $ sudo systemctl reload nginx //nginx 재시작
    ```
   
   인증서 발급 성공
   
   <img src="https://github.com/keke5149/2023_DontWorry/assets/108112575/e56cbb36-1521-465e-8b27-d1e2646368e3" width=500/>

   http에서 https로 입력해도 접속 가능해진다
   모바일에서 접속하기 -> https://dontworry.o-r.kr

