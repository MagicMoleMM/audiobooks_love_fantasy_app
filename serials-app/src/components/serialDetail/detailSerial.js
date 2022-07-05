import { useParams, useLocation, useNavigate } from 'react-router-dom'

export default function DetailSerial({ serialsItems }) {
    const params = useParams()
    const location = useLocation()
    const navigate = useNavigate()

    let item = serialsItems.find(
        (serialItem) => serialItem.id === +params.searchId
    )
    // console.log(serialsItems)
    // console.log(item)

    const {
        id,
        item_title,
        item_title_eng,
        item_year,
        item_country,
        item_translate,
        item_producer,
        item_time,
        item_genre,
        item_studio,
        item_actors,
        item_text,
        item_video_link,
        item_rating_1,
        item_rating_2,
        item_img,
    } = item

    return (
        <div style={{ padding: '1rem' }}>
            <h2>
                Cериал: {item_title} / {item_title_eng} / {id}
            </h2>
            <button onClick={() => navigate(`video/`)}>Смотреть сейчас!</button>
            <p>
                Location: {params.searchId} {location.pathname}
            </p>

            <div className="clearfix">
                <img
                    src={`https://zetseriali.online${item.item_img}`}
                    className="col-md-6 float-md-end mb-3 ms-md-3"
                    alt={item_img}
                />
                <p>
                    {item_rating_1} / {item_rating_2}
                </p>
                <p>Год выпуска: {item_year}</p>
                <p>Страна: {item_country}</p>
                <p>Перевод: {item_translate}</p>
                <p>{item_producer}</p>
                <p>{item_time}</p>
                <p>{item_genre}</p>
                <p>{item_studio}</p>
                <p>{item_actors}</p>
                <p>{item_video_link}</p>
                <p>{item_text}</p>
            </div>
        </div>
    )
}
