import AppHeader from './components/header/header';
import React, {useState, useEffect} from 'react';
import {Link, Outlet} from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import SerialsList from './components/serialsList/serialsList';
import SerialSearch from './components/serialSearch/serialSearch';
import DetailSerial from './components/serialDetail/detailSerial';
import './App.css';

function App() {

  const [serialsItems, setserialsItems] = useState([]);
  

  useEffect( () => {
    const fetchData = async () => {
        await fetch('http://localhost:3002/serials')
            .then(res => res.json())
            .then(res => setserialsItems(res))
    }
    fetchData()
    console.log(serialsItems)
// eslint-disable-next-line react-hooks/exhaustive-deps  
}, []);

  return (
    <>
      <AppHeader/>
      <nav style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          paddingLeft: "1rem",

        }}>
        <Link to='/list'>Полный список сериалов</Link> |{" "}
        <Link to='/detail'>Детали</Link> |{" "}
        <Link to='/search'>Поиск</Link> |{" "}

      </nav>
      <Outlet/>
      <Routes>
                    <Route path="/" element={
                                                  <main style={{ padding: '1rem' }}>
                                                  <p>Welcome!</p>
                                                  </main>
                    } />
                    <Route path="list" element={<SerialsList serialsItems={serialsItems}/>} />
                        {/* <Route path="detail" element={<SerialDetail />} /> */}
                    <Route path="search" element={<SerialSearch serialsItems={serialsItems}/>}> 
                            <Route index element={
                                            <main style={{ padding: '1rem' }}>
                                                <p>Выберите сериал</p>
                                            </main>
                                            }/>
                            <Route path="search/:searchId" element={<DetailSerial serialsItems={serialsItems}/>} />
                    </Route>
                    
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: '1rem' }}>
                            <p>There's nothing here!</p>
                            </main>
                        }
                        />
                    
        </Routes>
   
    </>

  );
}

export default App;
