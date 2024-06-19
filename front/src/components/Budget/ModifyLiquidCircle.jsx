import React, { useState, useRef, useEffect } from 'react';
import '../../styles = css/BudgetLiquidCircle.css';

function ModifyLiquidCircle({ categoryPositions = [], onCategoriesUpdated}) {
    const [modifiedPositions, setModifiedPositions] = useState(categoryPositions);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        setModifiedPositions(categoryPositions);
    }, [categoryPositions]);

    const handleTouchStart = (e, id) => {
        setActiveCategory(id);
    };

    const handleTouchMove = (e) => {
        if (activeCategory !== null) {
            const touch = e.touches[0];
            setModifiedPositions((prev) => prev.map((cat) =>
                cat.id === activeCategory ? { ...cat, r: touch.radiusX } : cat
            ));
        }
    };

    const handleTouchEnd = () => {
        setActiveCategory(null);
    };


    const handleSubmit = () => {
        fetch('/api/update-categories', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(modifiedPositions)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Successfully updated categories:', data);
        })
        .catch(error => {
            console.error('Error updating categories:', error);
        });
    };

    return (
        <div className="fluid-account-bubble">
            {modifiedPositions.map((category) => (
                <div
                    key={category.id}
                    className="category-circle"
                    style={{
                        width: `${category.r * 2}px`,
                        height: `${category.r * 2}px`,
                        backgroundColor: category.color,
                        borderRadius: '50%',
                        position: 'absolute',
                        left: `${category.x - category.r}px`,
                        top: `${category.y - category.r}px`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'black',
                        fontSize: '16px',
                        textAlign: 'center',
                    }}
                    onTouchStart={(e) => handleTouchStart(e, category.id)}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div>
                        <div>{category.name}</div>
                        <div style={{ fontSize: '12px' }}>{(category.budget / 10).toFixed(1)}만원</div>
                    </div>
                </div>
            ))}
            <button className="modification-button" onClick={handleSubmit}>수정 완료</button>
        </div>
    );
}

export default ModifyLiquidCircle;

