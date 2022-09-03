// import React from 'react'

// function Listrendering() {
//     const name =['likun','purnendu','diana']
//     const x = name.map(names=><h2>{name}</h2>)
//   return (
//     <div>{x}</div>
//   )
// }

// export default Listrendering


//or
import React from 'react'
import Listrendering2 from './listrendering2'

 function Listrendering() {
 
  const  persons = [
    {
      id:1,
      name:'bruce',
      age:30,
      skill:'react'
    },
    {
      id:2,
      name:'clear',
      age:40,
      skill:'css'
    },
    {
      id:3,
      name:'diana',
      age:60,
      skill:'html'
    }
  ]
  // const personlist = persons.map(a =>(<h2>Iam {a.name}. I am {a.age}years old. I know {a.skill}</h2>))

  //or this code is render from listrendering2
  // const personlist = persons.map(a =><Listrendering2  b ={a}/>)

  //or to remove the console warning for uniqe key props key is anything from the person object which is unique
  const personlist = persons.map(a =><Listrendering2 key={a.name} b ={a}/>)
  return <div>
    {personlist}
  </div>
}

export default Listrendering

