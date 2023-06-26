import './Costs.css';

import React, { useState } from 'react';

import Card from "../UI/Card";
import CostsFilter from './CostsFilter';
import CostList from './CostList';


const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2021');
    
    const changeYearHandler = (year) => {
        setSelectedYear(year);
    };

    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear;
    });

    return( 
        <Card className="costs">
            <CostsFilter year={selectedYear} onChangeYear={changeYearHandler}/>
            <CostList costs={filteredCosts}/>
        </Card>
    );
}

export default Costs;