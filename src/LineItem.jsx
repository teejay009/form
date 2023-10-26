import React from 'react'
import { BsTrash3 } from 'react-icons/bs'

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className='item' key={item}>
                        <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)}/>

                        <label style={(item.checked) ? {textDecoration: "line-through"} : null} onDoubleClick={() => handleCheck(item.id)}>
                            {item.item}
                        </label>
                        <BsTrash3
                        onClick={() =>handleDelete(item.id)} 
                        role='button' tabIndex='0' />
                    </li>
  )
}

export default LineItem
