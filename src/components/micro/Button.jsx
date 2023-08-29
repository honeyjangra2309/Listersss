import React from 'react'

const Button = ({name}) => {
  let style={
    background: "linear-gradient(to right,#00A8B5, #007D8D)",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    color: "#D8D8D8",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    fontFamily: `"Montserrat","sans-serif"`
  }
  return (
    <div>
      <button style={style}>{name}</button>
    </div>
  )
}

export default Button