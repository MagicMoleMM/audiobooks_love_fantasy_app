import { useState, useEffect } from 'react'
import './header.css'

const AppHeader = ({ serialsItems }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = serialsItems.length - 1
        } else if (newIndex >= serialsItems.length) {
            newIndex = 0
        }

        setActiveIndex(newIndex)
    }

    const linkImg = () => {
        const key =
            serialsItems[Math.floor(Math.random() * serialsItems.length)].index
        return serialsItems[key].item_img
    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateIndex(activeIndex + 1)
        }, 10000)

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    })

    return (
        <>
            <header className="header">
                <h1>Сериалы - oneClick</h1>
            </header>
            <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
            >
                <div
                    className="carousel-inner"
                    style={{
                        height: '20vw',
                    }}
                >
                    {serialsItems.map((serialItem) => {
                        return (
                            <div
                                key={serialItem.index}
                                className={`carousel-item ${
                                    activeIndex === +serialItem.index
                                        ? 'active'
                                        : ''
                                }`}
                            >
                                <div
                                    style={{ display: 'flex' }}
                                    className="slide-box"
                                >
                                    <img
                                        src={
                                            window.location.origin +
                                            `/img/${linkImg()}`
                                        }
                                        alt={serialItem.index}
                                    ></img>
                                    <img
                                        src={
                                            window.location.origin +
                                            `/img/${linkImg()}`
                                        }
                                        alt={serialItem.index}
                                    ></img>
                                    <img
                                        src={
                                            window.location.origin +
                                            `/img/${linkImg()}`
                                        }
                                        alt={serialItem.index}
                                    ></img>
                                    <img
                                        src={
                                            window.location.origin +
                                            `/img/${linkImg()}`
                                        }
                                        alt={serialItem.index}
                                    ></img>
                                    <img
                                        src={
                                            window.location.origin +
                                            `/img/${linkImg()}`
                                        }
                                        alt={serialItem.index}
                                    ></img>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button
                    className="carousel-control-prev"
                    onClick={() => {
                        updateIndex(activeIndex - 1)
                    }}
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    onClick={() => {
                        updateIndex(activeIndex + 1)
                    }}
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default AppHeader
