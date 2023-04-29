import React from "react";
import Card from "@mui/material/Card";
import { Box, IconButton } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@emotion/react";

const CreativeCard = ({ image }) => {
	const theme = useTheme();
	return (
		<Card
			sx={{ maxWidth: 345, p: 2, mt: 5, borderRadius: "10px", minWidth: 345 }}
		>
			<CardMedia
				component="img"
				alt="green iguana"
				height="190"
				image={image}
				style={{ borderRadius: "10px" }}
			/>
			<CardContent
				sx={{
					p: 0,
					pt: 4,
					"&:last-child": {
						pb: 0,
					},
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Box>
					<Typography
						gutterBottom
						component="div"
						variant="body2"
						color="text.secondary"
					>
						Business
					</Typography>
					<Typography
						variant="body"
						color="primary.main"
						fontWeight={600}
						fontSize={20}
					>
						Business Research
					</Typography>
				</Box>
				<IconButton
					sx={{
						border: `1px solid ${theme.palette.primary.main}`,
						"& svg": {
							color: "primary.main",
						},
						width: "30px",
						height: "30px",
					}}
				>
					<AddIcon></AddIcon>
				</IconButton>
			</CardContent>
		</Card>
	);
};

export default CreativeCard;
