import React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ServiceCard = ({ serviceData }) => {
	const { image, title, description } = serviceData;
	return (
		<Card
			sx={{
				maxWidth: 345,
				textAlign: "center",
				boxShadow: "none",
				mx: "auto",
				pt: 2,
				"&:hover": {
					boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
				},
			}}
		>
			<CardMedia
				component="img"
				height="140"
				sx={{ width: "auto", mx: "auto" }}
				image={image}
				title="green iguana"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default ServiceCard;
