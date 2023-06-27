import './NewCost.css';

import React, { useState } from 'react';

import CostForm from "./CostForm";

const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const saveCostDateHandler = (inputCostData) => {

        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        };

        props.onAddCost(costData);
        setIsFormVisible(false);
    };

    const inputCostDataHandler = () => {
        setIsFormVisible(true);
    };

    const cancelCostHandler = () => {
        setIsFormVisible(false);
    };

    return (
        <div className="new-cost">
            {!isFormVisible && <button onClick={inputCostDataHandler}>Add New Cost</button>}
            {isFormVisible && <CostForm onSaveCostData={saveCostDateHandler} onCancel={cancelCostHandler}/>}
        </div>
    )
}

export default NewCost;