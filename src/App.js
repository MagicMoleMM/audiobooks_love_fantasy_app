import AppHeader from './components/header/header'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import SerialsList from './components/serialsList/serialsList'
import SerialSearch from './components/serialSearch/serialSearch'
import DetailSerial from './components/serialDetail/detailSerial'
import './App.css'
import { serialsData } from './serialsData'

function App() {
    return (
        <>
            <AppHeader />
            <nav
                style={{
                    borderBottom: 'solid 1px',
                    paddingBottom: '1rem',
                    paddingLeft: '1rem',
                }}
            >
                <Link to="/list">Полный список сериалов</Link> |{' '}
                {/* <Link to='/list/list/:searchId'>Детали</Link> |{" "} */}
                <Link to="/search">Поиск</Link> |{' '}
            </nav>
            <Outlet />
            <Routes>
                <Route
                    path="/"
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>Welcome!</p>
                        </main>
                    }
                />
                <Route
                    path="list"
                    element={<SerialsList serialsItems={serialsData} />}
                />
                <Route
                    path="list/list/:searchId"
                    element={<DetailSerial serialsItems={serialsData} />}
                />

                <Route
                    path="search"
                    element={<SerialSearch serialsItems={serialsData} />}
                >
                    <Route
                        index
                        element={
                            <main style={{ padding: '1rem' }}>
                                <p>Выберите сериал</p>
                            </main>
                        }
                    />
                    <Route
                        path="search/:searchId"
                        element={<DetailSerial serialsItems={serialsData} />}
                    />
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
    )
}

export default App
