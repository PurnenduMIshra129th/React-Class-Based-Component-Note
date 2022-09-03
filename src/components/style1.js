import React from 'react'
import './style2.css'


function Style1(props) {
    let a = props.primary?'primary':''
  return (
    <div>
        <h1 className={'${a} font' }>Hello Purnendu Mishra</h1>
    </div>
  )
}

export default Style1