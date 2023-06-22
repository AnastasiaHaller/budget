import React, { useState } from 'react';
import './CostForm.css';

const CostForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        };

    props.onSaveCostData(costData);

    setInputName('');
    setInputAmount('');
    setInputDate('');
    };

    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
            <div className="new-cost__control">
                <label>Name</label>
                <input type="text" value={inputName} onChange={nameChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Price</label>
                <input 
                    type="number" 
                    min='0.01' 
                    step='0.01' 
                    value={inputAmount}
                    onChange={amountChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Date</label>
                <input 
                    type="date" 
                    min='2019-01-01' 
                    step='2024-12-31' 
                    value={inputDate}
                    onChange={dateChangeHandler}/>
            </div>
            <div className="new-cost__actions">
                <button type="submit">Add Cost</button>
            </div>
        </div>
    </form>
}

export default CostForm;