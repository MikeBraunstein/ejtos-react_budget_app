import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext'

const Currency = () => {
    const {currency, dispatch} = useContext(AppContext)

    const changeCurrency = (select) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: select,
        })
    }
    return (
        <div className='alert alert-secondary'>
            <select className='bg-success' name="Currency" value={currency} onChange={(event) => changeCurrency(event.target.value)}>
                <option name="Dollar" id='Dollar' value="$">$ Dollar</option>
                <option name="Pound" id='Pound' value="£">£ Pound</option>
                <option name="Euro" id='Euro' value="€">€ Euro</option> 
                <option name="Ruppee" id='Ruppee' value="₹">₹ Ruppee</option>
            </select>
        </div>
    )

};

export default Currency;