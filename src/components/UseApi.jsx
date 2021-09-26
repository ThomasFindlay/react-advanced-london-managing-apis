import { useApi } from "@/api/hooks/useApi"
import { getUser } from "@/api/usersApi"

const UseApi = () => {
  const {
    data: user,
    exec: initFetchUser,
    isPending,
    isIdle,
    isError,
    isSuccess,
  } = useApi(() => getUser('unique-id'))

  return (
    <div>
      <h2>useApi</h2>
      {isIdle ? (<button onClick={initFetchUser}>Fetch user details</button>) : null}
      {isPending ? <p>Loading data</p> : null}
      {isError ? <p>There was a problem</p> : null}
      {isSuccess ? <p>{user.name}</p> : null}
    </div>
  )
}

export default UseApi