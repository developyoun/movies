import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { Provider } from "react-redux";
import rootReducer, { rootSaga } from "./modules";

import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { StylesProvider } from "@material-ui/core";

const sagaMiddleware = createSagaMiddleware();

const enhance = composeWithDevTools(applyMiddleware(
	sagaMiddleware, 
	logger,
));
const store = createStore(rootReducer, enhance);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
	// <React.StrictMode>
		<Provider store={store}>
			<StylesProvider injectFirst>
				<App />
			</StylesProvider>
		</Provider>,
	// </React.StrictMode>,
	document.getElementById("root")
);
