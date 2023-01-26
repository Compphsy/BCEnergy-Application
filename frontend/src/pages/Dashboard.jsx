import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import UsageItem from '../components/UsageItem'
import Spinner from '../components/Spinner'
import { getUsages, reset } from '../features/usages/usageSlice'
import TotalCost from '../components/TotalCost';
function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { usages, isLoading, isError, message } = useSelector(
    (state) => state.usages
  )
  if (!user) {
    return null;
}
  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (!user) {
        navigate('/login')
    }
    dispatch(getUsages())
    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user.email}</h1>
        <p>Energy Dashboard</p>
      </section>

      <section className='content'>
        {usages.length > 0 ? (
          <div className='usages'>
            <TotalCost key={usages._id} usages={usages}/>
            <table className="usagetable">
              <thead>
                <td>Date</td>
                <td>Time</td>
                <td>Power</td>
              </thead>
              <tbody>
            {usages.map((usages) => (
              <UsageItem key={usages._id} usages={usages} />
            ))}
            </tbody>
            </table>
          </div>
        ) : (
          <>
          <h3>We have not connected your smart meter yet</h3>
          <h2>Please review your smart meter number </h2>
          </>
        )}

      </section>
    </>
  )
}

export default Dashboard