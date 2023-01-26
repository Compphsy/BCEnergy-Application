import React from 'react'
import { useDispatch } from 'react-redux'

function UsageItem ({ usages }) {
  const timestamp = new Date(usages.time).toUTCString();
  const date = new Date((usages.time * 1000)).toDateString();
  const time = new Date((usages.time * 1000)).toLocaleTimeString();
  console.log('usages.timestamp')
  console.log(usages.time)
    return (
        <tr>
        <td key="{usages._id}">{date}</td>
        <td>{time}</td>
        <td >{usages.power}</td>
        </tr>
    )
}

export default UsageItem