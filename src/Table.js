import React from 'react'

const TableHeader=()=>{
    return (
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Remove</th>
          </tr>
        </thead>

    )
}

const TableBody=(props)=>{
    const rows = props.charData.map((row,index) => {
        return (
            <tr key = {index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={()=>props.removeChars(index)}>DELETE</button>
                </td>

            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}


const Table = (props) => {
    const {charData, removeChars} = props
    return (
      <table>
        <TableHeader/>
        <TableBody charData={charData} removeChars={removeChars}/>
      </table>
    )
  
}

export default Table