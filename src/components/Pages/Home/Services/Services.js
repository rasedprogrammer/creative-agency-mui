import { Box, Grid } from "@mui/material";
import React from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard";

const ServicesCardData = [
	{
		image: "https://i.ibb.co/HNhykGp/iphone-1.png",
		title: "Web & Mobile Design",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, vitae?",
	},
	{
		image: "https://i.ibb.co/r0gHkvM/color-palette-1.png",
		title: "Graphic Design",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, vitae?",
	},
	{
		image: "https://i.ibb.co/CvQwzKC/coding-1.png",
		title: "Web Development",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, vitae?",
	},
];

const Services = () => {
	return (
		<Box>
			<SectionTitle title="Provide awesome" colored="services"></SectionTitle>
			<Grid container spacing={3} sx={{ mt: 4 }}>
				{ServicesCardData.map((serviceData, index) => (
					<Grid item xs={12} sm={6} md={4} key={index}>
						<ServiceCard key={index} serviceData={serviceData}></ServiceCard>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Services;
