import "../Theme/__global-theme.scss";
import "../Theme/App.scss";
import "../Theme/index.scss";

import { Provider } from 'react-redux'
import { useStore } from '../store/store'

export default function App({ Component, pageProps }) {
	const store = useStore(pageProps.initialReduxState)

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}