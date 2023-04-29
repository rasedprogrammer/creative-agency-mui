import "./App.css";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/Routes/Routes";
import { theme } from "./components/theme/theme";
import { ThemeProvider } from "@emotion/react";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router}></RouterProvider>
			<CssBaseline></CssBaseline>
		</ThemeProvider>
	);
}

export default App;
