import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    
    const changeBudget = (val) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return(total+=item.cost);
        }, 0);

        if (val <= 20000) {
            if (val < totalExpenses) {
                alert("You cannot have a budget less than your current expenses.");
                dispatch({
                    type: 'SET_BUDGET',
                    payload: totalExpenses,
                })
            } else {
                dispatch({
                    type: 'SET_BUDGET',
                    payload: val,
                })
            }
        } else {
            alert("Value is above the maximum.");
            dispatch({
                type: 'SET_BUDGET',
                payload: 20000,
            })
        }
    }
    
    
    return (
        <div className='alert alert-secondary'>Budget:
            <label htmlFor="budget" id="inputGroupSelect02">{currency}
            <input
                id="budget"
                type="number"
                value={budget}
                onInput={(event) => changeBudget(event.target.value)}
                step="10">
            </input></label>
            {/*<span>Budget: £{budget}</span>*/}
        </div>
    );
};
export default Budget;