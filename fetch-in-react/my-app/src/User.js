/* eslint-disable no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import UserCard from './UserCard';

export default function User({ userId, onCancel }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [user, setUser] = useState();

  /* your code here (hint: useEffect) */

  useEffect(() => {
    async function fetchUserRequest(userId) {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { method: "GET" })
        const fetchData = await res.json()
        setUser(fetchData)
      }
      catch (err) {
        setError(err)
      }
      setIsLoading(false)
    }

    fetchUserRequest(userId)

  }, [userId])

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <p>Error! {error.message}</p>;
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
