import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { LoginPage, RegistrationPage } from './pages/index';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route path="/registration">
					<RegistrationPage />
				</Route>
				<Route path="/">
					<LoginPage />
				</Route>
			</Switch>
		</Router>
	);
}
