import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './s1-main/App';
import reportWebVitals from './reportWebVitals';
import store from './s2/hw10/bll/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<>
		{/*для дз 10*/}
		<Provider store={store}>
			<App />
		</Provider>
	</>
);

reportWebVitals();
