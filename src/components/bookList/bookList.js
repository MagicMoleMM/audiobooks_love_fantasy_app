import React, {useState, useEffect} from 'react';
import useSound from 'use-sound';
import './bookList.css';

const BookList = () => {

    const [bookItems, setbookItems] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            await fetch('http://localhost:3000/books')
                .then(res => res.json())
                .then(res => setbookItems(res))
        }
        fetchData()
        // console.log(bookItems)
    // eslint-disable-next-line react-hooks/exhaustive-deps  
    }, []);
    
    return (
        
        <ul className="d-flex flex-wrap">
            {
                bookItems.map(bookItem => {
                    return <BookListItem 
                        key={bookItem.id} 
                        bookItem={bookItem}
                        />
                })
            }
        </ul>
    );
}
    
const BookListItem = ({bookItem}) => {
    
    const {id, book_name, books_mp3, books_img} = bookItem;
    console.log(books_mp3[0])
    const [play, { stop, isPlaying }] = useSound(books_mp3[0]);

    return (

            <li key={id} className="card book-item">
                <h5 className="card-title">{book_name}</h5>
                <img className="card-img-top" src={books_img} alt={book_name}></img>
                <button onClick={play}>
                    <i className="play-icon bi bi-play-fill"></i>
                </button>
                
            </li>
    )
}

export default BookList;