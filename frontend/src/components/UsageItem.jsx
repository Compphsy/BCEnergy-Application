import React from 'react'
import { useDispatch } from 'react-redux'

function UsageItem ({ usages }) {
  const timestamp = new Date(usages.timestamp * 1000).toUTCString();
    return (
        <tr>
        <td key="{usages._id}">{timestamp}</td>
        <td >{usages.power}</td>
        </tr>
    )
}

export default UsageItem