import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

const drawerWidth = 240;
const navItems = ["Home", "Our Portfolio", "Our Team", "Contact Us"];

export default function Header(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				MUI
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				component="nav"
				sx={{
					backgroundColor: "transparent",
					boxShadow: "none",
					mt: 2,
					position: "static",
				}}
			>
				<Container>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{
								mr: 2,
								display: { md: "none" },
								backgroundColor: "primary.main",
								"&:hover": { backgroundColor: "primary.main" },
							}}
						>
							<MenuIcon />
						</IconButton>
						{/* <Typography
							variant="h6"
							component="div"
							sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
						>
							MUI
						</Typography> */}
						<Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
							<img
								src="https://i.ibb.co/wQndCzv/png-transparent-logo-graphic-design-brand-x-pty-ltd-creative-agency-text-photography-computer.png"
								alt=""
								style={{ width: "80px" }}
							/>
						</Box>
						<Box sx={{ display: { xs: "none", sm: "block" } }}>
							{navItems.map((item) => (
								<Button
									key={item}
									sx={{
										color: "primary.main",
										fontSize: "0.8rem",
										p: 1,
										mr: 4,
									}}
									variant="text"
								>
									{item}
								</Button>
							))}
							<Button sx={{ bgcolor: "primary.green" }}>Login</Button>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Box component="nav">
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
			</Box>
			<Box component="main">
				<Toolbar />
			</Box>
		</Box>
	);
}
