from flask import Flask, send_file, request, jsonify
import os
import easyocr
import re
app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    # 이미지 저장
    image_path = '/' + file.filename
    file.save(image_path)

    # OCR 실행
    amounts = perform_ocr(image_path)

    # 추출된 금액을 파일에 저장 (예: amounts.txt)
    with open('amounts.txt', 'w') as file:
        for amount in amounts:
            file.write(amount + '\n')


    with open('numbers.txt', 'r') as file:
        numbers = file.readlines()

    # 각 줄의 개행 문자 제거 및 숫자만 추출하여 리스트에 저장
    numbers = [int(number.strip()) for number in numbers]

    # 숫자 리스트 출력
    print(numbers)
    
    return amounts

def perform_ocr(image_path):
    # EasyOCR 객체 생성
    reader = easyocr.Reader(['ko'])

    # 이미지 파일에서 텍스트 추출
    result = reader.readtext(image_path)

    # 추출된 텍스트에서 금액 추출하기 위한 정규 표현식
    amount_pattern = r'(?:[^\d,-]|^)([\d,]+)(?:원|\(KRW\))'  # $ 다음에 숫자가 하나 이상 있고, 소수점 이하 숫자가 있을 수 있음

    # 이미지에서 추출한 텍스트 중에서 금액을 찾아내기
    amounts = []
    for detection in result:
        text = detection[1]  # 텍스트 부분만 추출
        # 정규 표현식을 사용하여 금액 추출
        matches = re.findall(amount_pattern, text)
        if matches:
            for match in matches:
                amounts.append(match)

    return amounts




#if __name__ == '__main__':
#    app.run('0.0.0.0',port=5000,debug=True)

if __name__ == '__main__':
    app.run(debug=True)