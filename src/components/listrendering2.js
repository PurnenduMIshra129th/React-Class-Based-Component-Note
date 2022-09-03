import React from 'react'

function Listrendering2({b}) {
  return (
    <div>
        <h2>
            Iam {b.name}. I am {b.age}years old. I know {b.skill}
        </h2>
    </div>
  )
}

export default Listrendering2

//here b as function arugument which acts as props in listrendering

//key props is not accesable in child listrendering2