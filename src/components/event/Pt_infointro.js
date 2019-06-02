import React from 'react'

const Pt_infointro = props => {
  return (
    <>
      <div
        className="Pt_infointro"
        dangerouslySetInnerHTML={{
          __html: props.intro,
        }}
      />
    </>
  )
}

export default Pt_infointro
