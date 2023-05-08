import React from 'react'

 const ProtectedRoute = ({props}) => {
  return (
    <>
    <div>ProtectedRoutes</div>
    {props.children}
    </>
  )
}
export default ProtectedRoute
