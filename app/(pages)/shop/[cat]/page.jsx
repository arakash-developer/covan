import React from 'react'

const page = async ({params}) => {
    let {cat} = await params
  return (
    <div>page -{cat}</div>
  )
}

export default page