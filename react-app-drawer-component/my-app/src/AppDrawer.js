import {FaBars} from 'react-icons/fa'
import './AppDrawer.css'
import { useState } from 'react'

export default function AppDrawer({menuName}) {
  const [viewState, setViewState] = useState('hiding')
  // const [isClicked, setIsClicked] = useState(false);
  let shadowBg = '';

  function handleViewState() {
    viewState === 'viewing' ? setViewState('hiding') : setViewState('viewing');
  }

  // function handleClicked() {
  //   setIsClicked(true)
  // }

  function MenuItems({ menuItemNames, changeView }) {
    return (
      <h2 onClick={changeView}>{menuItemNames}</h2>
    )
  }

  // if (isClicked === true) {
  //   setViewState('hiding')
  // }

  if (viewState === 'hiding') {
    shadowBg = 'hidden'
  }

  return (
    <div>
      <FaBars onClick={handleViewState} className='menu-bars'/>
      <div onClick={handleViewState} className={`${shadowBg} shadow`}></div>
      <div className={`${viewState} drawer`}>
        <h1>{menuName}</h1>
        <MenuItems changeView={handleViewState} menuItemNames="About"/>
        <MenuItems changeView={handleViewState} menuItemNames="Get Started" />
        <MenuItems changeView={handleViewState} menuItemNames="Sign In" />
        <MenuItems changeView={handleViewState} menuItemNames="Contact Us" />
      </div>
    </div>
  )
}
