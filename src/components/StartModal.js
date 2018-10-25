import React from 'react'

const StartModal = (props) => {
  const modal = props.show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={modal}>
      <div className="modal-content">
        <h2>Select a marker on the map or name in the list for information. Select again to find coffee shoppes near that biking area</h2>
        <button
        className="begin"
        onClick={props.handleClose}
        >Begin</button>
      </div>
    </div>
  )
}
export default StartModal
