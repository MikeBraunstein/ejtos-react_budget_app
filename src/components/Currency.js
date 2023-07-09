import React, {useContext} from 'react';
import { AppContext } from './context/AppContext.js'

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
            <select name="CurrencyDropdown" value={currency}>
                <option name="Dollar" id='Dollar' value="$">$ Dollar</option>
                <option name="Pound" id='Pound' value="£">£ Pound</option>
                <option name="Euro" id='Euro' value="€">€ Euro</option> 
                <option name="Ruppee" id='Ruppee' value="₹">₹ Ruppee</option>
            </select>
        </div>
    )

}