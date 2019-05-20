import React from 'react'
import { FaEllipsisH } from 'react-icons/fa'
const NewStory = () => {
  return (
    <>
      <div className="newStory story">
        <div className="header">
          <div className="poster">
            <img
              src={process.env.PUBLIC_URL + '/images/instagram/avatar.png'}
              alt=""
            />
            <span>Jerry</span>
          </div>
          <div className="setting">
            <FaEllipsisH />
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}
export default NewStory
