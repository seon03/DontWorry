import React, { useEffect, useState } from 'react';
import "../styles = css/FixedCategoryPage.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FixedCategoryPage() {
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await axios.get('/api/categories');
          setCategories(response.data);
        } catch (error) {
          console.error('카테고리 데이터를 불러오는 중 에러가 발생했습니다:', error);
          const defaultCategories = ['건강', '교육', '통신', '교통/차량', '생필품', '주거', '병원비', '선물', '여행', '부모님', '식비', '문화생활', '패션/미용', '기타'];
          setCategories(defaultCategories);
        }
      };

      fetchCategories();
    }, []);

    const handleCategoryClick = (category) => {
        const index = selectedCategories.indexOf(category);
        if (index === -1) {
            setSelectedCategories([...selectedCategories, category]);
        } else {
            const newSelectedCategories = [...selectedCategories];
            newSelectedCategories.splice(index, 1);
            setSelectedCategories(newSelectedCategories);
        }
    };

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

    const renderCategories = () => {
        const rows = [];
        for (let i = 0; i < categories.length; i += 3) {
            const row = [];
            for (let j = i; j < i + 3 && j < categories.length; j++) {
                const category = categories[j];
                const isSelected = selectedCategories.includes(category);
                row.push(
                    <div
                        key={category}
                        className={`category-box ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
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
