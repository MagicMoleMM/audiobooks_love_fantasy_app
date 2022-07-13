import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import './serialsList.css'

const SerialsList = ({ serialsItems }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [value, setValue] = useState('')
    const [value_1, setValue_1] = useState('')
    const [value_2, setValue_2] = useState('')

    return (
        <div>
            <br></br>
            <div className="row justify-content-center">
                <div className="col-4">
                    <input
                        type="text"
                        className="form-control-sm"
                        id="formGroupExampleInput"
                        placeholder="Поиск по названию"
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
                </div>
                <div className="col-4">
                    <select
                        className="form-select-sm"
                        onChange={(event) => setValue_2(event.target.value)}
                    >
                        <option defaultValue>Выберите год</option>
                        <option value_2="2020">2020 и более новые</option>
                        <option value_2="2015">2015 - 2020</option>
                        <option value_2="2010">2010 - 2015</option>
                        <option value_2="2005">2005 - 2010</option>
                        <option value_2="2000">2000 - 2005</option>
                        <option value_2="1990">1995 - 2000</option>
                    </select>
                </div>
                <div className="col-4">
                    <select
                        className="form-select-sm"
                        onChange={(event) => setValue_1(event.target.value)}
                    >
                        <option defaultValue>Выберите жанр</option>
                        <option value_1="Детектив">Детектив</option>
                        <option value_1="Фэнтези">Фэнтези</option>
                        <option value_1="Триллер">Триллер</option>
                        <option value_1="Ужасы">Ужасы</option>
                        <option value_1="Фантастика">Фантастика</option>
                    </select>
                </div>
                <div className="col-2">
                    <select
                        className="form-select-sm"
                        onChange={(event) => setValue(event.target.value)}
                    >
                        <option defaultValue>Выберите сортировку</option>
                        <option value="new">Сначала новые</option>
                        <option value="name">От А до Я</option>
                        <option value="IMDB">По рейтингу IMDB</option>
                        <option value="KP">По рейтингу Кинопоиск</option>
                    </select>
                </div>
            </div>
            <br></br>
            <ul className="d-flex flex-wrap">
                {serialsItems
                    .filter((serialsItem) => {
                        let filter = searchParams.get('filter')
                        if (!filter) return true
                        let name = serialsItem.item_title.toLowerCase()
                        return name.includes(filter.toLowerCase())
                    })
                    .filter((serialsItem) => {
                        let filter = value_1
                        if (!filter) return true
                        let jenre = serialsItem.item_genre
                        return jenre.includes(filter)
                    })
                    .filter((serialsItem) => {
                        let filter = +(value_2.substring(0,4))
                        if (!filter) return true
                        let year = +serialsItem.item_year
                        return filter < year &&  year < (filter + 5)
                    })
                    .sort((a, b) => {
                        if (value === 'new') {
                            return +b.item_year - +a.item_year
                        } else if (value === 'IMDB') {
                            return (
                                +b.item_rating_imdb -
                                +a.item_rating_imdb
                            )
                        } else if (value === 'KP') {
                            return (
                                +b.item_rating_kp -
                                +a.item_rating_kp
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
                src={window.location.origin + `/img/${item_img}`}
                alt={item_img}
            ></img>
        </li>
    )
}

export default SerialsList
