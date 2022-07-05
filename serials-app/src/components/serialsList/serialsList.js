import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import './serialsList.css'

const SerialsList = ({ serialsItems }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [value, setValue] = useState('')
    return (
        <div>
            <div
                className="d-flex justify-content-around"
                style={{
                    borderBottom: 'solid 1px',
                    paddingBottom: '1rem',
                    paddingTop: '1rem',
                    paddingLeft: '1rem',
                }}
            >
                <label>Поиск по названию</label>

                <input
                    value={searchParams.get('filter') || ''}
                    onChange={(event) => {
                        const filter = event.target.value
                        if (filter) {
                            setSearchParams({ filter })
                        } else {
                            setSearchParams({})
                        }
                    }}
                ></input>
                <div>Сортировка</div>
                <select onChange={(event) => setValue(event.target.value)}>
                    <option defaultValue>
                        Выберите соритировку
                    </option>
                    <option value="new">Сначала новые</option>
                    <option value="name">От А до Я</option>
                    <option value="IMDB">По рейтингу IMDB</option>
                    <option value="KP">По рейтингу Кинопоиск</option>
                </select>
            </div>

            <ul className="d-flex flex-wrap">
                {serialsItems
                    .filter((serialsItem) => {
                        let filter = searchParams.get('filter')
                        if (!filter) return true
                        let name = serialsItem.item_title.toLowerCase()
                        return name.includes(filter.toLowerCase())
                    })
                    .sort((a, b) => {
                        if (value === 'new') {
                            return +b.item_year - +a.item_year
                        } else if (value === 'IMDB') {
                            return (
                                +b.item_rating_2.substring(6) -
                                +a.item_rating_2.substring(6)
                            )
                        } else if (value === 'KP') {
                            return (
                                +b.item_rating_1.substring(11) -
                                +a.item_rating_1.substring(11)
                            )
                        } else if (value === 'name') {
                            var x = a.item_title.toLowerCase()
                            var y = b.item_title.toLowerCase()
                            if (x < y) {
                                return -1
                            }
                            return 0
                        }
                        return true
                    })
                    .map((serialsItem) => {
                        return (
                            <Link
                                to={`list/${serialsItem.index}`}
                                key={serialsItem.index}
                            >
                                <SerialsListItem
                                    key={serialsItem.index}
                                    serialsItem={serialsItem}
                                />
                            </Link>
                        )
                    })}
            </ul>
        </div>
    )
}

const SerialsListItem = ({ serialsItem }) => {
    const { index, item_title, item_title_eng, item_img } = serialsItem

    return (
        <li key={index} className="card serials-item">
            <h5 className="card-title">
                {item_title} / {item_title_eng}
            </h5>
            <img
                className="card-img-top"
                src={window.location.origin +`/img/${item_img}`}
                alt={item_img}
            ></img>
        </li>
    )
}

export default SerialsList
