from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.linear_model import Ridge
from sklearn.preprocessing import StandardScaler

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
def predict_budget():
    # 데이터셋 로드
    df = pd.read_csv('파일경로/가계부1.csv')
    df = df.fillna(0)
    # 열 삭제 
    df.drop(['id', 'parent', '자산', '내용', '수입/지출', '소분류', '메모'], axis=1, inplace=True)

    # 데이터셋 로드2
    df2 = pd.read_csv('파일경로/가계부2.csv')
    df2 = df2.drop(df2.columns[3: 256], axis=1)

    #데이터셋 합
    df = pd.concat([df, df2])

    # 년, 월, 일, 시간 분류하기
    df['년'] = pd.to_datetime(df['날짜']).dt.year
    df['월'] = pd.to_datetime(df['날짜']).dt.month
    df['일'] = pd.to_datetime(df['날짜']).dt.day
    # 범주형 데이터 수치화 하기
    df['분류'] = df['분류'].astype('category').cat.codes
    df['날짜'] = df['날짜'].astype('category').cat.codes

    # 데이터를 특성과 결과로 분할
    X = df.drop(columns= ['금액', '날짜'])
    y = df['금액']

    # 데이터 표준화
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)

    # 모델 학습
    ridge_model = Ridge(alpha=0.1)
    ridge_model.fit(X_scaled, y)

    # 프론트에서 전송한 일정의 속성 입력하여 예산 예측
    # 분류, 년, 월, 일을 전달 받음
    schedule_data = request.json
    category = schedule_data['category']
    year = schedule_data['year']
    month = schedule_data['month']
    day = schedule_data['day']

    # 카테고리를 번호로 매핑
    category_mapping = {
    '건강': 0,
    '경조사/회비': 1,
    '교육': 2,
    '교통/차량': 3,
    '기타': 4,
    '문화생활': 5,
    '부수입': 6,
    '생활용품': 8,
    '선물': 9,
    '식비': 10,
    '약속': 11,
    '여행': 12,
    '용돈': 13,
    '월급': 14,
    '일정': 15,
    '패션/미용': 16
    }
    category_number = category_mapping.get(category, -1)

    if category_number == -1:
        return jsonify({'error': 'Invalid category'})

    # 입력 데이터를 배열 형태로 변환
    input_data = [[category_number, year, month, day]]
    input_data_scaled = scaler.transform(input_data)

    # 예산 예측
    budget_prediction = ridge_model.predict(input_data_scaled)
    # 리스트로 변환하여 전달
    prediction_result_list = budget_prediction.tolist()
    return jsonify({'prediction_result': prediction_result_list})

if __name__ == '__main__':
    app.run(debug=True)

    
