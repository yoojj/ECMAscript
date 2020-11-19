import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from '@/reportWebVitals';
import DefaultLayout from '@/layout/defaultLayout';
import '@/index.css';



ReactDOM.render(
    <React.StrictMode>
        <DefaultLayout />
    </React.StrictMode>,
    document.getElementById('app')
);

reportWebVitals();
