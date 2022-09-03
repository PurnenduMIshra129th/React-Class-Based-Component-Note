import React from 'react'

function IndexAsKey() {
    const names = ['a','b','c','a']
    const nameList = names.map((name,index)=><h2 key = {index}>{index} {name}</h2>)
  return (
    <div>{nameList}</div>
  )
}

export default IndexAsKey

//some limitation for index as key