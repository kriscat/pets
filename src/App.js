import React, { useEffect, useState } from 'react';
import './App.less';
import Preloader from './components/Preloader/Preloader';
import Layout from "./components/Layout/Layout";
function App() {

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(false);
  }, []);
  
  if (loader) return <Preloader />;

  return (
    <div className="App">
    <Layout/>
    </div>
  );
}

export default App;
