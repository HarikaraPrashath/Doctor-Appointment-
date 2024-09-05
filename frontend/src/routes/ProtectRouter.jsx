import React from 'react'
import {useContext} from "react"
import { Navigate, replace } from 'react-router-dom'
import { authContext } from '../context/authContext'

//this will help to cant navigate directly using API address (need to login must)
const ProtectRouter = ({children,allowRoles}) => {
  const {token,role} = useContext(authContext);
  console.log('Token:', token);
  console.log('Role:', role);
  console.log('Allowed Roles:', allowRoles);
  const isAllowed = allowRoles.includes(role);
  const accessibleRoute = token && isAllowed?children :<Navigate to="/login" replace={true}/>;
    return accessibleRoute;
}

export default ProtectRouter
