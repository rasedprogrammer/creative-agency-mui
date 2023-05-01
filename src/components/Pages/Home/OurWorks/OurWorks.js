import { Box, Grid, IconButton } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import CreativeCard from "./CreativeCard";
import { cardImages } from "./CardImages";

const OurWorks = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Box sx={{ mt: 5 }}>
			{/* Our Works Header Section Start */}
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<SectionTitle
					title="Here ara some of"
					colored="our works"
					sx={{
						textAlign: "left",
					}}
				/>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						gap: 2,
					}}
				>
					<Tabs
						value={value}
						onChange={handleChange}
						centered
						sx={{
							"& .MuiTabs-indicator": {
								display: "none",
							},
							"& .Mui-selected": {
								fontWeight: "bold",
								color: "primary.green",
							},
							"& .MuiButtonBase-root": {
								textTransform: "capitalize",
								fontSize: "1rem",
							},
						}}
					>
						<Tab label="All" />
						<Tab label="Interior" />
						<Tab label="Exterior" />
						<Tab label="Building" />
					</Tabs>
					<Box>
						<IconButton
							sx={{
								border: (theme) =>
									`1px solid ${
										value === 0 ? "#959EAD" : theme.palette.primary.main
									}`,
								mr: "1rem",
								color: "primary.main",
								fontWeight: "bold",
							}}
							onClick={() => setValue(value - 1)}
							disabled={value === 0}
						>
							<ArrowBackIcon></ArrowBackIcon>
						</IconButton>
						<IconButton
							sx={{
								border: (theme) =>
									`1px solid ${
										value === 3 ? "#959EAD" : theme.palette.primary.main
									}`,
								color: "primary.main",
								fontWeight: "bold",
							}}
							onClick={() => setValue(value + 1)}
							disabled={value === 3}
						>
							<ArrowForwardIcon></ArrowForwardIcon>
						</IconButton>
					</Box>
				</Box>
			</Box>
			{/* Our Works Header Section End */}
			<Grid container spacing={3} justifyContent={"center"} my={5}>
				{cardImages[value].map((image) => (
					<Grid item>
						<CreativeCard image={image}></CreativeCard>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default OurWorks;
