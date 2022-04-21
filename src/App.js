import React, { Fragment } from 'react'
import './App.css';
import Navbar from './components/layouts/Navbar';
import Showcase from './components/showcase/Showcase';
import Utilities from './components/showcase/Utilities';
import FindYourCar from './components/showcase/FindYourCar';

const App = () => {
  return (
    <Fragment>
      <Navbar/>
      <Showcase />
      <div className='container'>
        <Utilities />
      </div>
        <FindYourCar />
    </Fragment>
  );
}

export default App;