import React from 'react';


const Transactions = (props) => {
const {data} = props
  return (
    <div >
        <table>
            <thead>Table</thead>
            <th>
                <td>
                    Date
                </td>
                <td>
                    Contest
                </td>  
                <td>
                    Income/Expens
                </td>
                <td>
                    Amount
                </td>
            </th>
            {data && data.map(transObject=>{

            })}
        </table>
    </div>
  );
};

export default Transactions;