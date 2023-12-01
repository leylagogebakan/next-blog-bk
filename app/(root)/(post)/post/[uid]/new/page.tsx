import React from 'react'

const page = ({ params }: { params: { uid: string } }) => {
  return (
    <div>User ID: {params.uid}</div>
  )
}

export default page