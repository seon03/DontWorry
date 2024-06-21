import React, { useEffect, useState } from 'react';
import "../styles = css/FixedCategoryPage.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;



function FixedCategoryPage() {
    //const [categories, setCategories] = useState([]); //원래 백엔드로부터 받아오거나 전송할 때 썼던 state들
    const [categories] = useState([ //바꾼 state
        { name: '식비', value: 'FOOD' },
        { name: '문화생활', value: 'ENTERTAINMENT' },
        { name: '교통/차량', value: 'TRANSPORTATION' },
        { name: '주거', value: 'HOUSING' },
        { name: '교육', value: 'EDUCATION' },
        { name: '건강', value: 'HEALTH' },
        { name: '통신', value: 'COMMUNICATION' },
        { name: '생필품', value: 'NECESSITY' },
        { name: '여행', value: 'TRAVEL' },
        { name: '부모님', value: 'PARENTS' },
        { name: '기타', value: 'OTHER' },
        { name: '급여', value: 'SALARY' },
        { name: '사이드', value: 'SIDE' },
        { name: '수당', value: 'ALLOWANCE' },
        { name: '보너스', value: 'BONUS' }
    ]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const navigate = useNavigate();

    /* //백엔드로부터 전체 가계부카테고리 데이터 받아 오는 코드
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/accountbook`, {
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                const availableCategories = response.data.availableCategories;
                const mappedCategories = availableCategories.map(category => ({
                    name: getCategoryName(category),
                    value: category
                }));
                
                setCategories(mappedCategories);
            } catch (error) {
                console.error('카테고리 데이터를 불러오는 중 에러가 발생했습니다:', error);
                const defaultCategories = [
                    { name: '식비', value: 'FOOD' },
                    { name: '문화생활', value: 'ENTERTAINMENT' },
                    { name: '교통/차량', value: 'TRANSPORTATION' },
                    { name: '주거', value: 'HOUSING' },
                    { name: '교육', value: 'EDUCATION' },
                    { name: '건강', value: 'HEALTH' },
                    { name: '통신', value: 'COMMUNICATION' },
                    { name: '생필품', value: 'NECESSITY' },
                    { name: '여행', value: 'TRAVEL' },
                    { name: '부모님', value: 'PARENTS' },
                    { name: '기타', value: 'OTHER' },
                    { name: '급여', value: 'SALARY' },
                    { name: '사이드', value: 'SIDE' },
                    { name: '수당', value: 'ALLOWANCE' },
                    { name: '보너스', value: 'BONUS' }
                ];
                setCategories(defaultCategories);
            }
        };

        fetchCategories();
    }, []);

    

    const getCategoryName = (categoryValue) => {
        switch (categoryValue) {
            case 'FOOD':
                return '식비';
            case 'ENTERTAINMENT':
                return '문화생활';
            case 'TRANSPORTATION':
                return '교통/차량';
            case 'HOUSING':
                return '주거';
            case 'EDUCATION':
                return '교육';
            case 'HEALTH':
                return '건강';
            case 'COMMUNICATION':
                return '통신';
            case 'NECESSITY':
                return '생필품';
            case 'TRAVEL':
                return '여행';
            case 'PARENTS':
                return '부모님';
            case 'OTHER':
                return '기타';
            case 'SALARY':
                return '급여';
            case 'SIDE':
                return '사이드';
            case 'ALLOWANCE':
                return '수당';
            case 'BONUS':
                return '보너스';
            default:
                return categoryValue;
        }
    };

    */

    const handleCategoryClick = (categoryValue) => {
        const index = selectedCategories.indexOf(categoryValue);
        if (index === -1) {
            setSelectedCategories([...selectedCategories, categoryValue]);
        } else {
            const newSelectedCategories = [...selectedCategories];
            newSelectedCategories.splice(index, 1);
            setSelectedCategories(newSelectedCategories);
        }
    };

    /*백엔드로 고정지출 카테고리 전송하는 코드
    const handleInputClick = () => {
        axios.post('http://example.com/submit-categories', { categories: selectedCategories })
        .then(response => {
            console.log('Categories submitted successfully:', response.data);
            navigate("/goalInput");
        })
        .catch(error => {
            console.error('Error submitting categories:', error);
            navigate("/goalInput");
        });
    };
    */

    /*->콘솔창에 선택한 고정지출 출력되는 거 확인하는 코드+단순화면이동*/
    const handleInputClick = () => {
        console.log('Selected categories:', selectedCategories);
        navigate("/goalInput");
    };


    const renderCategories = () => {
        const rows = [];
        for (let i = 0; i < categories.length; i += 3) {
            const row = [];
            for (let j = i; j < i + 3 && j < categories.length; j++) {
                const category = categories[j];
                const isSelected = selectedCategories.includes(category.value); // category의 value로 선택 여부 확인
                row.push(
                    <div
                        key={category.value}
                        className={`category-box ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick(category.value)} // category의 value를 전달
                    >
                        {category.name} {/* 실제 카테고리 이름을 출력 */}
                    </div>
                );
            }
            rows.push(
                <div key={i} className="category-row">
                    {row}
                </div>
            );
        }
        return rows;
    };
    

    return (
        <div className='choose-fixed-expenses'>
            <div className="div18-fixed">&lt;</div>
            <div className="div-fixed">
                고정지출인 것을 선택하세요
            </div>
            <div className='category-container'>{renderCategories()}</div>
            <div className="rectangle-4293-fixed" onClick={handleInputClick}></div>
            <div className="div2-fixed" onClick={handleInputClick}>완료</div>
        </div>
    );
}

export default FixedCategoryPage;
