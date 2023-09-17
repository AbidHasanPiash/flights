import React from 'react'

export default function ButtonText({ text, isActive, onClick }) {
    const buttonClass = isActive
      ? 'bg-primary text-white'
      : 'bg-primary/5';
  return (
    <button onClick={onClick} className={`${buttonClass} rounded-full px-2`}>{text}</button>
  )
}
