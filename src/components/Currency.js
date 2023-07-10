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
        <div className="alert alert-secondary" style={{backgroundColor:'#94DC99'}}>
            <label style={{marginLeft: '.5rem' , backgroundColor:'#94DC99' , color:'white'}} >Currency
            <select defaultValue={currency} name="hover_color" id="currency" onChange={(event) => changeCurrency(event.target.value)} style={{marginLeft:'1rem' , backgroundColor:'#94DC99' , color:'white'}}>(
                <option style={{color:'black'}} name="Dollar" id='Dollar' value="$">($ Dollar)</option>
                <option style={{color:'black'}} name="Pound" id='Pound' value="£">(£ Pound)</option>
                <option style={{color:'black'}} name="Euro" id='Euro' value="€">(€ Euro)</option> 
                <option style={{color:'black'}} name="Ruppee" id='Ruppee' value="₹">(₹ Ruppee)</option>
            )</select>
            </label>
        </div>
    )

};

export default Currency;