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

## 3) Nginx + React app 배포

1. Nginx 폴더에서 html 폴더에 build 폴더 내용을 복사 붙여넣기 한다
2. nginx.conf 파일을 수정한다
3. nginx 설정 테스트 및 재시작
   ```
   $ sudo nginx -t
   $ sudo systemctl restart nginx
   ```
   

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


