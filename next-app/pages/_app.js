import "../Theme/__global-theme.scss";
import "../Theme/App.scss";
import "../Theme/index.scss";

import React from 'react';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { PersistGate } from 'redux-persist/integration/react';
import { wrapper } from '../store/store';
import { ReactReduxContext } from 'react-redux'

class MyApp extends App {

	static async getInitialProps({ Component, ctx }) {
		const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

		//Anything returned here can be accessed by the client
		return { pageProps: pageProps };
	}

	render() {
		//pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
		const { Component, pageProps, store } = this.props;

		return (
			<ReactReduxContext.Consumer>
				{({ store }) => {
					<PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
						<Component {...pageProps} />
					</PersistGate>
				}}
			</ReactReduxContext.Consumer>
		);
	}
}



//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp);
