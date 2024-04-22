import React from 'react';
import { Link } from 'react-router-dom'

interface Props {
  name: string;
  className?: string;
  children: React.ReactNode;
}

const OAuth2Button = ({ name, className, children }: Props) => {
  return (
    <Link to={`${import.meta.env.VITE_REACT_APP_BASE_URL}/auth/${name}/login`}
    className={`w-full mt-3 flex items-center justify-center shadow-lg rounded py-2 gap-2 ${className} `}>
      {children}
      <p className='uppercase'>Login with {name}</p>
    </Link>
  )
}

export default OAuth2Button