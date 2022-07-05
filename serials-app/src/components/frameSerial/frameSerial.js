import { useParams } from 'react-router-dom'
import Iframe from 'react-iframe'

export default function FrameSerial({ serialsItems }) {
    let params = useParams()

    let item = serialsItems.find(
        (serialItem) => serialItem.id === +params.searchId
    )
    // console.log(serialsItems)
    // console.log(item)

    const { item_title, item_title_eng, item_video_link, item_id } = item

    return (
        <div style={{ padding: '1rem' }}>
            <h2>
                Cериал: {item_title} / {item_title_eng}
            </h2>
            <div>
                <Iframe
                    url={`https:${item_video_link}`}
                    name={item_title_eng}
                    width="100%"
                    height="600px"
                    id={item_id}
                    display="initial"
                    sandbox=""
                    referrerPolicy="no-referrer"
                    allowFullScreen
                    position="relative"
                />

            </div>
        </div>
    )
}
