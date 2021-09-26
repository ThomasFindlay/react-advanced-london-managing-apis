import { ERROR, IDLE, PENDING, SUCCESS } from "@/api/constants/apiStatus"
import { useApiStatus } from "@/api/hooks/useApiStatus"
import { getUser } from "@/api/usersApi"
import { useState } from "react"

const UseApiStatus = () => {
  const [user, setUser] = useState(null)
  const {isIdle, isPending, isSuccess, isError, setApiStatus} = useApiStatus(IDLE)

  const initFetchUser = async () => {
    try {
      setApiStatus(PENDING)
      const userData = await getUser('unique-id')
      setUser(userData)
      setApiStatus(SUCCESS)

    } catch (error) {
      setApiStatus(ERROR)
    }
  }

  return (
    <div>
      <h2>useApiStatus</h2>
      {isIdle ? (<button onClick={initFetchUser}>Fetch user details</button>) : null}
      {isPending ? <p>Loading data</p> : null}
      {isError ? <p>There was a problem</p> : null}
      {isSuccess ? <p>{user.name}</p> : null}
    </div>
  )
}

export default UseApiStatus