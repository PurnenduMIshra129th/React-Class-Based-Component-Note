import React from 'react'

function FragmentCoulmn() {
    const items =[]
  return (
    
      <> 

      <td>
            name
        </td>
        <td>
            email
        </td>
        
        </>
       
    
  )
}

export default FragmentCoulmn

//here fragment is used instead of div tag
//only key attributes pass to the fragments
// its shorthand <> </>

// {
//     items.map(item =>(
//         <React.Fragment key={item.id}>
//             <h1>title</h1>
//             <p>{item.title}</p>
//             </React.Fragment>
//     ))
// }