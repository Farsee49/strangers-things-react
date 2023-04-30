import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {App} from './components'
import './components/index.css';

const root = createRoot(document.querySelector('#root'));

root.render(<BrowserRouter>
              <App />
            </BrowserRouter>);