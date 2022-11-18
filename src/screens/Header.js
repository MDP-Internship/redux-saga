import React from 'react'
import { useDispatch } from 'react-redux'
import { getDataRequest } from '../store/data/dataAction'
import '../styles/Main.css'

/**
 * Bu sayfa screen içinde ama aslında bir component sayfa değil
 */

const Header = () => {

  const dispatch = useDispatch()

  return (
    <div class="header">
      <p>Welcome to Store </p>
      <button
        type="button"
        onClick={() => {
          dispatch(getDataRequest());
        }}
      >
        Show all products
      </button>
    </div>
  )
}
export default Header