/*import  React  from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/user.context'
import PropTypes from "prop-types";

const Protected = ({children}) => {


    const {user} = UserAuth()

    if(!user) {
        return <Navigate to='/' />;
    }
  return children;
};

  Protected.propTypes = {
    children: PropTypes.node.isRequired,
  
};



export default Protected;*/