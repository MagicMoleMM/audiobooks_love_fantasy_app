import AppHeader from './components/header/header'
import { Link, Outlet, Routes, Route } from 'react-router-dom'
import SerialsList from './components/serialsList/serialsList'
import SerialSearch from './components/serialSearch/serialSearch'
import DetailSerial from './components/serialDetail/detailSerial'
import FrameSerial from './components/frameSerial/frameSerial'
import './App.css'
import { serialsData2 } from './serialData2'

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
                    element={<SerialsList serialsItems={serialsData2} />}
                />
                <Route
                    path="list/list/:searchId"
                    element={<DetailSerial serialsItems={serialsData2} />}
                />
                <Route
                    path="list/list/:searchId/video"
                    element={<FrameSerial serialsItems={serialsData2} />}
                />

                <Route
                    path="search"
                    element={<SerialSearch serialsItems={serialsData2} />}
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
                        element={<DetailSerial serialsItems={serialsData2} />}
                    />
                </Route>
                <Route
                    path="*"
                    element={
                        <main style={{ padding: '1rem' }}>
                            <p>There is nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </>
    )
}

export default App
