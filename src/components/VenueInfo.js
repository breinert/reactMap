import React from 'react'

const VenueInfo = (props) => {
  const venueInfo = props.voi ? 'venueInfo display-none' : 'venueInfo display-block';
    return (
      <div className={venueInfo}>
        {/* <img src={`${props.myVenue.bestPhoto.prefix}200x200${props.myVenue.bestPhoto.suffix}`} */}
        alt="Venue"/>
      </div>
  )
}
export default VenueInfo
