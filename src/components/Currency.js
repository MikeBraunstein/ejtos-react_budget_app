import React, {useContext} from 'react';
import { AppContext } from './context/AppContext.js'

const Currency = () => {

    return (
        <div className='alert alert-secondary'>
            <select name="CurrencyDropdown">
                <option name="Dollar" id='Dollar' value="$ Dollar">$ Dollar</option>
                <option name="Pound" id='Pound' value="£ Pound">£ Pound</option>
                <option name="Euro" id='Euro' value="€ Euro">€ Euro</option> 
                <option name="Ruppee" id='Ruppee' value="₹ Ruppee">₹ Ruppee</option>
            </select>
        </div>
    )

}