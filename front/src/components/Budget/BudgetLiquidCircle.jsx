import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import '../../styles = css/BudgetLiquidCircle.css';
import { useNavigate } from 'react-router-dom';

function BudgetLiquidCircle({ setCategoryPositions }) {
    const [categories, setCategories] = useState([
        { id: 1, name: '식비', color: '#57B2BE', budget: 120 },
        { id: 2, name: '문화생활', color: '#3733FF', budget: 150 },
        { id: 4, name: '주거', color: '#2532FF', budget: 50 },
        { id: 5, name: '교육', color: '#39AFD4', budget: 80 },
        //{ id: 3, name: '교통/차량', color: '#723AE3', budget: 5},
        //{ id: 6, name: '건강', color: '#57FF33' },
        //{ id: 7, name: '통신', color: '#A832FF' },
        //{ id: 8, name: '생필품', color: '#A832FF' },
        //{ id: 8, name: '패션/미용', color: '#4768DE' , budget:20},
        //{ id: 8, name: '선물', color: '#A832FF' },
        //{ id: 8, name: '여행', color: '#4832FF' , budget: 10},
        //{ id: 8, name: '부모님', color: '#A832FF' },
        //{ id: 8, name: '기타', color: '#A832FF' }
    ]);
    
    const [monthlyBudget, setMonthlyBudget] = useState('?원');
    const [currentMonth, setCurrentMonth] = useState('');
    const [isModifying, setIsModifying] = useState(false);
    const [totalSaved, setTotalSaved] = useState(0);
    const [initialTotalBudget, setInitialTotalBudget] = useState(0);

    const navigate = useNavigate();

    const navigateToPastLiquid = () => {
        navigate('/liquidCircle2')
    }

    const svgRef = useRef();

    useEffect(() => {
        const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
        const today = new Date();
        const currentMonthName = monthNames[today.getMonth()];
        setCurrentMonth(currentMonthName);
    }, []);


    useEffect(() => {
        const savedCategories = JSON.parse(localStorage.getItem('categories'));
        if (savedCategories) {
            const initialTotal = savedCategories.reduce((sum, category) => sum + category.budget, 0);
            setInitialTotalBudget(initialTotal);
            setMonthlyBudget(`${initialTotal}원`);
            setCategories(savedCategories.map(category => ({
                ...category,
                ratio: (category.budget / initialTotal) * 100
            })));
        } else {
            const initialTotal = categories.reduce((sum, category) => sum + category.budget, 0);
            setInitialTotalBudget(initialTotal);
            setMonthlyBudget(`${initialTotal}원`);
            setCategories(categories.map(category => ({
                ...category,
                ratio: (category.budget / initialTotal) * 100
            })));
        }
    }, []);    
    

    useEffect(() => {
        if (!isModifying) {
            localStorage.setItem('categories', JSON.stringify(categories));
        }
    }, [categories, isModifying]);

    const formatBudget = (budget) => {
        return `${(budget / 10).toFixed(1)}만원`;
    };

    const handleModifyButtonClick = () => {
        setIsModifying(true);
    
        // 가장 큰 예산을 가진 카테고리를 찾습니다.
        const largestBudgetCategory = categories.reduce((prev, current) => (prev.budget > current.budget) ? prev : current);
    
        // 해당 카테고리의 원의 색상을 어둡게 만듭니다.
        d3.select(svgRef.current)
            .selectAll('circle')
            .filter(d => d.id === largestBudgetCategory.id)
            .transition()
            .duration(500)
            .attr('fill', d => d3.color(d.color).brighter(5.3));
    };
    
    

    const handleBubbleClick = (id) => {
        if (!initialTotalBudget) {
            alert('초기 총 예산이 설정되지 않았습니다. 페이지를 새로고침하거나 나중에 다시 시도하세요.');
            return;
        }

        const categoryToUpdate = categories.find(category => category.id === id);
        if (!categoryToUpdate) {
            alert('선택한 카테고리를 찾을 수 없습니다.');
            return;
        }

        const newRatio = parseFloat(prompt(`${categoryToUpdate.name}의 비율을 입력하세요 (%)\n\n현재 ${categoryToUpdate.ratio.toFixed(2)}%`));

        if (!isNaN(newRatio) && newRatio >= 0 && newRatio <= 100) {
            const newBudget = (initialTotalBudget * (newRatio / 100)).toFixed(1);
            const newTotalSaved = totalSaved + (categoryToUpdate.budget - parseFloat(newBudget));

            if (newTotalSaved >= 0) {
                const newCategories = categories.map(category => {
                    if (category.id === id) {
                        return {
                            ...category,
                            budget: parseFloat(newBudget),
                            ratio: newRatio
                        };
                    }
                    return category;
                });

                setCategories(newCategories);
                setTotalSaved(newTotalSaved);

                d3.select(svgRef.current)
                    .selectAll('circle')
                    .filter(d => d.id === id)
                    .transition()
                    .duration(500)
                    .attr('fill', d => d3.color(d.color).opacity(0.7));
            } else {
                alert('총 예산을 초과하여 비율을 조정할 수 없습니다.');
            }
        } else {
            if (newRatio !== null) {
                alert('올바른 비율을 입력하세요.');
            }
        }
    };

    

    const drawChart = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const svg = d3.select(svgRef.current)
            .attr('width', width)
            .attr('height', height);

        const bubble = d3.pack()
            .size([width, height])
            .padding(10);

        const root = d3.hierarchy({ children: categories })
            .sum(d => d.budget);

        const nodes = bubble(root).leaves();

        setCategoryPositions(nodes.map(d => ({
            id: d.data.id,
            name: d.data.name,
            color: d3.color(d.data.color).brighter(1.5),
            budget: d.data.budget,
            x: d.x,
            y: d.y - 50,
            r: d.r
        })));

        svg.selectAll('g').remove();

        const nodeGroup = svg.selectAll('g')
            .data(nodes)
            .enter()
            .append('g')
            .attr('transform', d => `translate(${d.x}, ${d.y - 50})`)
            .on('click', (event, d) => handleBubbleClick(d.data.id));

        nodeGroup.each(function (d) {
            const g = d3.select(this);

            const pie = d3.pie()
                .value(d => d.value)
                .sort(null);

            const arc = d3.arc()
                .innerRadius(0)
                .outerRadius(d.r);

            const pieData = pie([
                { value: d.data.budget * 0.0, type: 'actual' },
                { value: d.data.budget * 1.0, type: 'remaining' }
            ]);

            const paths = g.selectAll('path')
                .data(pieData)
                .enter()
                .append('path')
                .attr('fill', pieSlice => pieSlice.data.type === 'actual' ? d.data.color : d3.color(d.data.color).brighter(1.5))
                .attr('opacity', pieSlice => pieSlice.data.type === 'actual' ? 0.8 : 0.5)
                .attr('d', arc);

            paths.transition()
                .duration(1000)
                .attrTween('d', function(d) {
                    const i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
                    return function(t) {
                        d.endAngle = i(t);
                        return arc(d);
                    };
                });

            const text = g.append('text')
                .attr('text-anchor', 'middle')
                .attr('dy', '-0.2em')
                .text(d.data.name)
                .attr('fill', 'black')
                .style('font-size', '16px')
                .style('font-weight', 'bold')
                .style('opacity', 0);

            const budgetText = g.append('text')
                .attr('text-anchor', 'middle')
                .attr('dy', '1.6em')
                .text(formatBudget(d.data.budget))
                .attr('fill', 'black')
                .style('font-size', '16px')
                .style('opacity', 0);

            const angle = Math.atan2(d.y, d.x);
            const distance = d.r + 20;
            const xPosition = d.x + Math.cos(angle) * distance + 1000;
            const yPosition = d.y + Math.sin(angle) * distance + 1000;

            const ratioText = g.append('text')
                .attr('class', 'ratio-text')
                .attr('text-anchor', 'middle')
                .attr('x', xPosition)
                .attr('y', yPosition)
                .text(`${(d.data.budget / initialTotalBudget * 100).toFixed(2)}%`)
                .attr('fill', 'black')
                .style('font-size', '16px')
                .style('opacity', 0);

            text.transition()
                .delay(1000)
                .duration(500)
                .style('opacity', 1);

            budgetText.transition()
                .delay(1000)
                .duration(500)
                .style('opacity', 1);

            ratioText.transition()
                .delay(1000)
                .duration(500)
                .style('opacity', 1);
        });
    };

    useEffect(() => {
        const handleResize = () => {
            drawChart();
        };

        drawChart();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [categories]);

    const handleModificationComplete = async () => {
        try {
            await fetch('/api/update-categories-budget', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(categories.map(category => ({
                    id: category.id,
                    name: category.name,
                    ratio: category.ratio // 수정된 비율 정보를 저장
                })))
            });
            alert('예산 비율이 성공적으로 업데이트되었습니다.');
        } catch (error) {
            console.error('Error updating categories:', error);
            alert('예산 비율 업데이트 중 오류가 발생했습니다.');
        }
    
        setIsModifying(false);
    
        // 로컬 스토리지에 카테고리 비율 저장
        localStorage.setItem('categories', JSON.stringify(categories));
    };
    

    // 총 예산
    const totalBudget = categories.reduce((total, category) => total + category.budget, 0);

    // 절약한 금액
    const savedAmount = initialTotalBudget - totalSaved;

    return (
        <div className="fluid-account-bubble-lq-c">
            <div className="_6-lq-c" style={{ top: '90px' }}>{currentMonth} 변동지출</div>
            <div className="total-budget-lq-c">총 {formatBudget(totalBudget)}</div>
            <div className="_38-lq-c">{monthlyBudget}</div>
            <div className="saving-lq-c">총 {formatBudget(totalSaved)} 절약</div>
            <div className="line-3-lq-c"></div>
            {isModifying ? (
                <button 
                    onClick={handleModificationComplete}
                    className="complete-button"
                >수정 완료</button>
            ) : (
                <button 
                    onClick={() => setIsModifying(true) && handleModifyButtonClick} 
                    className="modify-button"
                >수정</button>
            )}
            <div className="ellipse-117-lq-c"></div>
            <svg ref={svgRef} className="vector-lq-c" onClick={navigateToPastLiquid} width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 11.3124L0 6.08489L6 0.857422" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}

export default BudgetLiquidCircle;
