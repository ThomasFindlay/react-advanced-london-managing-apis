import { useState, useEffect } from 'react'
import { listUsers } from '@/api/usersApi'

const DisplayUsers = () => {
  const [users, setUsers] = useState([])

  const initFetchUsers = async () => {
    const usersData = await listUsers()
    setUsers(usersData)
  }

  useEffect(() => {
    initFetchUsers()
  }, [])

  return (
    <div>
      <h2>List Users</h2>
      {users.map(user => {
        return (
          <div key={user.id}>
            {user.id} - {user.name}
          </div>
        )
      })}
    </div>
  )
}

export default DisplayUsers