import React, {useState, useEffect} from 'react';
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
import MultiPlayer from '../player/multiPlayer';
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
    // console.log(books_mp3[0])


    return (

            <li key={id} className="card book-item">
                <h5 className="card-title">{book_name}</h5>
                <img className="card-img-top" src={books_img} alt={book_name}></img>
                <Button
                    className='btn'
                    color="primary"
                    onClick={() => setVisible(!visible)}
                >Слушать
                </Button>
                 <Offcanvas direction='bottom'
                           backdrop={true} 
                           fade={true} 
                           autoFocus={true}
                           isOpen={visible}>
                    <OffcanvasHeader className='canvas-header'>
                        <i className="close-icon bi bi-x-square"
                        onClick={() => setVisible(!visible)}>
                        </i>
                    </OffcanvasHeader>
                    <OffcanvasBody>
                    <strong>
                        Player
                    </strong>
                    {/* <Button>
                        Play
                        <i className="bi bi-play-btn-fill"></i>
                    </Button>
                    <Button>
                        Stop
                        <i className="bi bi-stop-btn-fill"></i>
                    </Button> */}
                    <MultiPlayer urls={books_mp3}/>
                        
                    
                    
                    
                    

                    </OffcanvasBody>
                </Offcanvas>


                
            </li>
    )
}

export default BookList;