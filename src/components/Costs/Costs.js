import './Costs.css';

import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from './CostsFilter';

import React, { useState } from 'react';


const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2021');
    
    const changeYearHandler = (year) => {
        setSelectedYear(year);
    }

    return( 
        <Card className="costs">
            <CostsFilter year={selectedYear} onChangeYear={changeYearHandler}/>
            <CostItem 
                date={props.costs[0].date}
                description={props.costs[0].description}
                amount={props.costs[0].amount} />
            <CostItem 
                date={props.costs[1].date}
                description={props.costs[1].description}
                amount={props.costs[1].amount} />
            <CostItem 
                date={props.costs[2].date}
                description={props.costs[2].description}
                amount={props.costs[2].amount} />
        </Card>
    );
}

export default Costs;