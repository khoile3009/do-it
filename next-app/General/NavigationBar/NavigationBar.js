import { React, useState } from "react";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import customTheme from "../../theme/theme";

// AppBar dependencies
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";

// AppDrawer Dependencies
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";

// Style props
const drawerWidth = 480;

// auth
import RegisterModal from "../Auth/RegisterModal";
import LoginModal from "../Auth/LoginModal";
import CustomerProfileModal from "../../User/Customer/ProfileModal";

const useStyles = makeStyles((theme) => ({
	// Navigation bar main styling
	root: {
		background: customTheme.palette.primary.main,
		position: "sticky",
		top: "0",
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
			"&:hover": {
				cursor: "pointer",
			},
		},
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "auto",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	// AppDrawer styles
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	hide: {
		display: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		"& > *": {
			color: "#ffffff",
		},
	},
	drawerPaper: {
		width: drawerWidth,
		background: "#39A77D",
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	},
	drawerIcons: {
		color: "#ffffff",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		paddingBottom: "0",
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
	option: {
		fontSize: 15,
		"& > span": {
			marginRight: 10,
			fontSize: 18,
		},
	},
	// Mail and Notification styles
}));

export default function PrimaryAppBar(props) {
	const classes = useStyles();
	const theme = useTheme();
	const [anchorEl, setAnchorEl] = useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

	const state = useState(0);
	const auth = useSelector((state) => state.auth);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const [showRegister, setRegister] = useState(false);
	const [showLogin, setLogin] = useState(false);
	const [showProfile, setProfile] = useState(false);

	const [openDrawer, setOpenDrawer] = useState(false);

	const handleRegister = () => {
		setRegister(!showRegister);
		setProfile(!showProfile);
	};
	const handleLogin = () => {
		setRegister(!showLogin);
	};
	const handleProfile = () => {
		setProfile(!showProfile);
	};

	const handleDrawerOpen = () => {
		setOpenDrawer(true);
	};

	const handleDrawerClose = () => {
		setOpenDrawer(false);
	};

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuSignIn = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
		handleLogin();
	};
	const handleMenuRegister = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
		handleRegister();
	};
	const handleMenuProfile = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
		handleProfile();
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const handleLogoClick = (event) => {
		event.preventDefault();
		props.history.push("/");
	};

	const handleMailOpen = (event) => {
		event.preventDefault();
	};

	const handleNotificationOpen = (event) => {
		event.preventDefault();
	};
	const handleMailClose = (event) => {};

	const handleNotificationClose = (event) => {};

	const menuId = "primary-search-account-menu";

	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "center" }}
			open={isMenuOpen}
			onClose={handleMenuClose}
			getContentAnchorEl={null}
		>
			{!auth.userId && !showLogin && <MenuItem onClick={handleMenuSignIn}>Sign In</MenuItem>}
			{!auth.userId && !showRegister && (
				<MenuItem onClick={handleMenuRegister}>Register</MenuItem>
			)}
			{!auth.userId && !showProfile && (
				<MenuItem onClick={handleMenuProfile}>Profile</MenuItem>
			)}
		</Menu>
	);

	const mobileMenuId = "primary-search-account-menu-mobile";

	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton aria-label="show 4 new mails" color="inherit">
					<Badge badgeContent={4} color="secondary">
						<MailIcon />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem>
				<IconButton aria-label="show 11 new notifications" color="inherit">
					<Badge badgeContent={11} color="secondary">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);

	const renderNotificationDropdown = <></>;

	const renderMailDropdown = <></>;

	return (
		<div className={classes.grow}>
			<CssBaseline />
			{/*
				This is the main app bar at the top
			*/}
			<AppBar
				className={clsx(classes.root, { [classes.appBarShift]: openDrawer })}
				position="static"
			>
				{/* Calling the auth modals here */}
				<RegisterModal open={showRegister} handleClose={handleRegister}></RegisterModal>
				<LoginModal open={showLogin} handleClose={handleLogin}></LoginModal>
				<CustomerProfileModal
					open={showProfile}
					handleClose={handleProfile}
				></CustomerProfileModal>

				{/* Calling the auth modals here */}
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
					>
						<MenuIcon />
					</IconButton>

					<Typography
						className={classes.title}
						variant="h6"
						noWrap
						onClick={handleLogoClick}
					>
						Do It
					</Typography>

					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ "aria-label": "search" }}
						/>
					</div>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<IconButton
							onClick={handleMailOpen}
							aria-label="show 4 new mails"
							color="inherit"
						>
							<Badge badgeContent={0} color="secondary">
								<MailIcon />
							</Badge>
						</IconButton>
						<IconButton
							onClick={handleNotificationOpen}
							aria-label="show 17 new notifications"
							color="inherit"
						>
							<Badge badgeContent={0} color="secondary">
								<NotificationsIcon />
							</Badge>
						</IconButton>
						<IconButton
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<MoreIcon />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}

			{/*
				This part belongs to left-side app drawer
			*/}

			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={openDrawer}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<Divider />
				<List>
					{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon className={classes.drawerIcons}>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{["All mail", "Trash", "Spam"].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon className={classes.drawerIcons}>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: openDrawer,
				})}
			></main>
		</div>
	);
}
