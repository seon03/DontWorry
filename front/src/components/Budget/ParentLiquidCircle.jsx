import React, { useState } from 'react';
import BudgetLiquidCircle from './BudgetLiquidCircle';
import ModifyLiquidCircle from './ModifyLiquidCircle';

function ParentLiquidCircle() {
    const [categoryPositions, setCategoryPositions] = useState([]);
    const [showModify, setShowModify] = useState(false);

    const handleModifyClick = () => {
        setShowModify(true);
    };

    const handleCategoriesUpdated = (updatedCategories) => {
        setCategoryPositions(updatedCategories);
        setShowModify(false); // Hide modify mode after updating categories
    };

    return (
        <div>
            {!showModify ? (
                <BudgetLiquidCircle setCategoryPositions={setCategoryPositions} />
            ) : (
                <ModifyLiquidCircle categoryPositions={categoryPositions} onCategoriesUpdated={handleCategoriesUpdated} />
            )}
        </div>
    );
}

export default ParentLiquidCircle;
