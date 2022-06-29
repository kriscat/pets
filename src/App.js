import React, { useEffect, useState } from 'react';
import { Rings } from 'react-loader-spinner';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cats from './components/Cats/Cats';
import Dogs from './components/Dogs/Dogs';
import Hospital from './components/Hospitals/Hospital';
import HowToCare from './components/HowToCare/HowToCare';
import Layout from './components/Layout/Layout';
import MainPage from './components/MainPage/MainPage';
import Preloader from './components/Preloader/Preloader';
import Registration from './components/Registration/Registration';



function App() {

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(false);
  }, []);
  
  if (loader) return <Preloader />;

  return (
    <div className="App">
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='' element={<MainPage />} />
            <Route path="cats" element={<Cats />} />
            <Route path="dogs" element={<Dogs />} />
            {/* <Route path="registration" element={<Registration/>} /> */}
            <Route path='how-to-care' element={<HowToCare />} />
            <Route path='hospitals' element={<Hospital />} />  
         
          </Route>
              </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
