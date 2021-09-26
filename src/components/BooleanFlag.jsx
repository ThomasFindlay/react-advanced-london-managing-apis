import { getUser } from "@/api/usersApi"
import { useState } from "react"

const BooleanFlag = () => {
  const [user, setUser] = useState(null)
  const [isInitialised, setIsInitialised] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const initFetchUser = async () => {
    try {
      if (!isInitialised) setIsInitialised(true)
      setIsLoading(true)
      setIsError(false)
      const userData = await getUser('unique-id')
      setUser(userData)
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div>
      <h2>Boolean flag</h2>
      {!isInitialised ? (<button onClick={initFetchUser}>Fetch user details</button>) : null}
      {isLoading ? <p>Loading data</p> : null}
      {isError ? <p>There was a problem</p> : null}
      {!isLoading && !isError && user ? <p>{user.name}</p> : null}
    </div>
  )
}

export default BooleanFlag