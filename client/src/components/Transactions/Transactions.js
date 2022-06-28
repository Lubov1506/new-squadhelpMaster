import React from 'react';


const Transactions = (props) => {
const {data} = props
const tableBody = {data ? data.map(({data, title, status, amount}) =>{
    return (
        
    )
})
    <tr>
                        <td>{data}</td>
                        <td>{title}</td>
                        <td>{status}</td>
                        <td>{amount}</td>
                    </tr>

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
            <tbody>
            {data & data.map(({data, title, status, amount}) =>{
                return (
                    
                )
            }) : "There is no"}                
            </tbody>

        </table>
    </div>
  );
};

export default Transactions;