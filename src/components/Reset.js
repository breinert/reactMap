import React from 'react'

const Reset = (props) => {
  const tooltip = {
    display: props.hover ? 'block' : 'none'
  }
  return (
    <div className="reset">
      <button
      aria-label="reset"
      z-index="100"
      tabIndex="1"
      onMouseOver={() => props.handleMouseOver()}
      onMouseOut={() => props.handleMouseOver()}
      onClick={() => props.handleReset()}
      >&#9776;
    </button>
    <div className={tooltip}
    >Restart</div>
    </div>
  )

}
export default Reset
