import React from 'react'
import TableRow from '../TableRow'
import "./style.css"
export default function Table({columns, data}) {
  return (
    <table className='table'>
        <thead>
            <tr>
            {columns.map((column, index) => <th key={index}>{column.title}</th>)}
            </tr>
        </thead>
        <tbody>
            {data.map((row) => <TableRow key={row.id} content={row} columns={columns} />)}
        </tbody>
    </table>
  )
}
