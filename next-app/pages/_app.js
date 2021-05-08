import { Provider } from 'react-redux'
import { useStore } from '../store/store'
import Initializer from '../General/Utils/Initializer';
import PrimaryAppBar from "../General/NavigationBar/NavigationBar";

export default function App({ Component, pageProps }) {
	const store = useStore(pageProps.initialReduxState)
	return (
		<Provider store={store}>
			<Initializer />
			<PrimaryAppBar />
			<Component {...pageProps} />

		</Provider>
	)
}