import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './store/auth-context';
import { NavigationContextProvider } from './store/navigation-context';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<NavigationContextProvider><AuthContextProvider><App /></AuthContextProvider>
    </NavigationContextProvider>);