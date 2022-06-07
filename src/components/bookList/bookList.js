import React, {useState, useEffect} from 'react';
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
// import MultiPlayer from '../player/multiPlayer';
import Player from '../player/Player';
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
    
    const [visible, setVisible] = useState(false);
    const {id, book_name, books_mp3, books_img} = bookItem;

    return (

            <li key={id} className="card book-item">
                <h5 className="card-title">{book_name}</h5>
                <Button
                    className='btn'
                    color="primary"
                    onClick={() => setVisible(!visible)}
                >Слушать
                </Button>
                 <Offcanvas direction='end'
                           backdrop={true} 
                           fade={true} 
                           autoFocus={true}
                           isOpen={visible}
                        //    onClick={() => setVisible(!visible)}
                        >
                    <OffcanvasHeader className='canvas-header'>
                        <i className="close-icon bi bi-x-square"
                        onClick={() => setVisible(!visible)}>
                        </i>
                    </OffcanvasHeader>
                    <OffcanvasBody>
                    <strong>
                        {book_name}
                    </strong>
                    <Player urls={books_mp3}/>
                    </OffcanvasBody>
                </Offcanvas>  
                <img className="card-img-top" src={books_img} alt={book_name}></img>
            </li>
    )
}

export default BookList;