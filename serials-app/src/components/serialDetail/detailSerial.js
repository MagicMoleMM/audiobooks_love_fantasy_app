import { useParams, useNavigate } from 'react-router-dom'

export default function DetailSerial({ serialsItems }) {
    const params = useParams()
    const navigate = useNavigate()

    let item = serialsItems.find(
        (serialItem) => serialItem.index === +params.searchId
    )
    // console.log(serialsItems)
    // console.log(item)

    const {
        item_title,
        item_title_eng,
        item_year,
        item_country,
        item_translate,
        item_producer,
        item_genre,
        item_actors,
        item_text,
        item_rating_kp,
        item_rating_imdb,
        item_img,
    } = item

    return (
        <div style={{ padding: '1rem' }}>
            <div className="clearfix">
                <img
                    src={window.location.origin + `/img/${item_img}`}
                    className="col-md-6 float-md-end mb-3 ms-md-3"
                    alt={item_img}
                />
                <h2>{item_title}</h2>
                <h4 className="text-muted">{item_title_eng}</h4>
                <br></br>
                <p>
                    <button
                        type="button"
                        className="btn-outline-danger btn-lg"
                        onClick={() => navigate(`video/`)}
                    >
                        Смотреть сейчас!
                    </button>
                </p>
                <p>
                    <b>Кинопоиск</b> - {item_rating_kp} / <b>IMDB</b> -{' '}
                    {item_rating_imdb}
                </p>
                <p>
                    <b>Год выпуска:</b> {item_year}
                </p>
                <p>
                    <b>Страна:</b> {item_country.join(', ')}
                </p>
                <p>
                    <b>Перевод:</b> {item_translate.join(', ')}
                </p>
                <p>
                    <b>Режиссер:</b> {item_producer.join(', ')}
                </p>
                <p>
                    <b>Жанр:</b> {item_genre.join(', ')}
                </p>
                <p>
                    <b>Актеры:</b> {item_actors.join(', ')}
                </p>
                <p>
                    <b>Описание:</b> {item_text}
                </p>
            </div>
        </div>
    )
}
