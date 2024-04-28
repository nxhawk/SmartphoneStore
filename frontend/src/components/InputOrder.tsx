import React, { ChangeEvent } from 'react'

interface Props {
  children: React.ReactNode,
  name: string;
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: string | ChangeEvent<unknown>) => void; 
  onBlur: (e: string | ChangeEvent<unknown>) => void;
  isError: boolean | undefined;
  error: string | undefined;
}

const InputOrder = ({ children, name, id, type, placeholder, value, onChange, onBlur, isError, error }: Props) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="text-gray-600 font-semibold px-1 flex gap-2 items-center">
        {children}
        <span>{name}</span>
      </label>
      <input 
        id={id} 
        type={type} 
        className="shadow-lg rounded px-2 py-1 outline-none w-full" placeholder={placeholder}
        value={value} 
        onChange={onChange}
        onBlur={onBlur}
        />
        <div className='px-3 font-semibold text-red-500 text-sm'>
          {isError && error}
        </div>
    </div>
  )
}

export default InputOrder