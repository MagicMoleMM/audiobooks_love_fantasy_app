import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import ErrorBoundary from './components/errorBoundary/errorBoundary';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ErrorBoundary>
            <Router>
                <App/>
            </Router>
    </ErrorBoundary>
    
            
);


