import React from 'react'

const Helmet = (props) => {
    document.title="Shop-" +props.title;
  return (
    <div>{props.children}</div>
  )
}

export default Helmet