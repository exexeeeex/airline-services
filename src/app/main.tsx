import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./providers/store.provider";
import { ServicesPage } from "../pages/services";
import "./styles/index.css";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<ServicesPage />
		</Provider>
	</StrictMode>,
);
