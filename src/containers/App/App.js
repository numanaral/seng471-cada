import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import ThemeProvider from 'providers/ThemeProvider';
import NavigationBar from 'components/NavigationBar';
import Routes from 'routes';
import configureStore from 'store/redux';
import { getReactReduxFirebaseProps } from 'store/firebase';
import NotificationProvider from 'providers/NotificationProvider';
import DialogProvider from 'providers/DialogProvider';
import Background from './Background';

const initialState = {};
const store = configureStore(initialState);
// Log the store in dev
if (process.env.NODE_ENV !== 'production') window.__redux_store = store;

const App = () => (
	<StoreProvider store={store}>
		<ReactReduxFirebaseProvider {...getReactReduxFirebaseProps(store)}>
			<Router>
				<ThemeProvider>
					<NavigationBar />
					<NotificationProvider />
					<DialogProvider />
					<Background>
						<Routes />
					</Background>
				</ThemeProvider>
			</Router>
		</ReactReduxFirebaseProvider>
	</StoreProvider>
);

export default App;
