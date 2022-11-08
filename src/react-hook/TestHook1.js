import React from 'react'

const Pengguna = ({user}) => {
  return user.map(userd => (
    <div>
      <h1>{userd.userName}</h1>
    </div>
  )
  )
}

export default Pengguna;