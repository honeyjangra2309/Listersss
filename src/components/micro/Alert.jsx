import React from 'react'

const Alert = ({message}) => {
    const style = {
      position:"absolute",
      top:"30px",
      right: "20px",
      background: "#00A8B5",
      padding: "10px 20px",
      color: "#D8D8D8"
    }
  return (
    <div style={style}>
        <h3>{message}</h3>
    </div>
  )
}

export default Alert