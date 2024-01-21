import { useContext } from "react";

import React from 'react'

const StateContext = () => {
  const contest=useContext();
  return (
    <div>stateContext</div>
  )
}

export default StateContext