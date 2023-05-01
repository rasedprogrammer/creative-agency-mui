import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
	return (
		<Box>
			<Container>
				<Header></Header>
				<Outlet></Outlet>
			</Container>
			<Footer></Footer>
		</Box>
	);
};

export default Main;
