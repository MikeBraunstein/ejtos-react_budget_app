import React, { useContext } from 'react';
import ExpenseItem from './AllocationForm';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <table className='table'>
            <thread className="thread-light">
          <tr>
              <th scope="col">Department</th>
              <th scope="col">Allocated Budget</th>
              <th scope="col">Increased by 10</th>
              <th scope="col">Delete</th>
          </tr>
        </thread>
          <tbody>
          {expenses.map((expenses) => (
              <ExpenseItem id={expenses.id} key={expenses.id} name={expenses.name} cost={expenses.cost} />
          ))}
          </tbody>
        </table>
    );
};

export default ExpenseList;