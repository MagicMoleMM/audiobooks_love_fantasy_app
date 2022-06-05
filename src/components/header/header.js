// import React, { useState } from 'react';
// import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
import './header.css';


const AppHeader = () => {
    // const [visible, setVisible] = useState(false);
    
    return (
        <header className="header">
            <div className="d-flex justify-content-around">
                <div>Аудиокниги FantasyLove</div>
                {/* <div>
                <Button
                    className='btn'
                    color="primary"
                    onClick={() => setVisible(!visible)}
                >
                    Найти aудиокнигу

                </Button>
                 <Offcanvas direction='start'
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
                        This is the Offcanvas body.
                    </strong>
                    </OffcanvasBody>
                </Offcanvas>
                </div> */}
            </div>
        </header>
    )
};



export default AppHeader;