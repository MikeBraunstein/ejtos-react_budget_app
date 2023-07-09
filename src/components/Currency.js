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
                <option name="Dollar" id='Dollar' value="$" selected={changeCurrency(option.value)}>$ Dollar</option>
                <option name="Pound" id='Pound' value="£" selected={changeCurrency(option.value)}>£ Pound</option>
                <option name="Euro" id='Euro' value="€" selected={changeCurrency(option.value)}>€ Euro</option> 
                <option name="Ruppee" id='Ruppee' value="₹" selected={changeCurrency(option.value)}>₹ Ruppee</option>
            </select>
        </div>
    )

}