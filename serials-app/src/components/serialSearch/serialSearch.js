import { NavLink, Outlet, useSearchParams } from 'react-router-dom'

export default function SerialSearch({ serialsItems }) {
    let [searchParams, setSearchParams] = useSearchParams()

    return (
        <main style={{ padding: '1rem 0' }}>
            <h2>Search</h2>
            <div style={{ display: 'flex' }}>
                <nav style={{ borderRight: 'solid 1px', padding: '1rem' }}>
                    <input
                        value={searchParams.get('filter') || ''}
                        onChange={(event) => {
                            let filter = event.target.value
                            if (filter) {
                                setSearchParams({ filter })
                            } else {
                                setSearchParams({})
                            }
                        }}
                    />

                    {serialsItems
                        .filter((serialsItem) => {
                            let filter = searchParams.get('filter')
                            if (!filter) return true
                            let name = serialsItem.item_country.toLowerCase()
                            return name.includes(filter.toLowerCase())
                        })

                        .map((serialsItem) => (
                            <NavLink
                                style={({ isActive }) => {
                                    return {
                                        display: 'block',
                                        margin: '1rem 0',
                                        color: isActive ? 'red' : '',
                                    }
                                }}
                                to={`search/${serialsItem.id}`}
                                key={serialsItem.id}
                            >
                                {serialsItem.item_country}
                            </NavLink>
                        ))}
                </nav>
                <Outlet />
            </div>
        </main>
    )
}
