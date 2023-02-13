import React from 'react';
import  {createRoot}  from 'react-dom/client';
import './index.css';
import GifApp from './gifApp';

const container = document.querySelector('#root');

const root = createRoot(container)

root.render(<GifApp />)
