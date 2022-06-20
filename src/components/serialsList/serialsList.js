import React from 'react';
import './serialsList.css';

const SerialsList = ({serialsItems}) => {

    return (
        
        <ul className="d-flex flex-wrap">
            {
                serialsItems.map(serialsItem => {
                    return <SerialsListItem 
                        key={serialsItem.id} 
                        serialsItem={serialsItem}                      
                        />
                })
            }
        </ul>
    );
}
    
const SerialsListItem = ({serialsItem}) => {
    
    const {id, item_title, item_title_eng, item_img} = serialsItem;

    return (

            <li key={id} 
                className="card serials-item">
                <h5 className="card-title">{item_title} / {item_title_eng}</h5>
                <img className="card-img-top" src={`https://zetseriali.online${item_img}`} alt={item_img}></img>
            </li>
                
            
    )
}

export default SerialsList;