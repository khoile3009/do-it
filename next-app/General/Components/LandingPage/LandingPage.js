import React from "react";
import { Button, FormHelperText, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	landingPage: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "100vh",
	},
	landingPageContent: {
		display: "flex",
		height: "90%",
		width: "90%",
		background: "#F1FFF7",
		position: "absolute",
		color: "#00C77B",
		alignItems: "center",
		justifyContent: "center",
	},
	registerBox: {
		display: "grid",
		gridTemplateAreas: `
            'landing-tle'
            'landing-hdl'
            'landing-btn'
		`,
	},
	landingTitle: {
		display: "flex",
		justifyContent: "center",
		gridArea: "landing-tle",
		fontSize: "24pt",
	},
	landingHeadline: {
		display: "flex",
		justifyContent: "center",
		gridArea: "landing-hdl",
	},
	landingButtons: {
		display: "flex",
		justifyContent: "center",
		gridArea: "landing-btn",
	},
	landingRegisterBtn: {
		margin: "0 2rem",
		border: "solid 1px #0089FF",
		color: "#0089FF",
	},
	landingSignInBtn: {
		margin: "0 2rem",
		color: "#0089FF",
	},
	landingIntro: {
		position: "absolute",
		bottom: "10%",
		display: "flex",
		"& p": {
			width: "300px",
		},
	},
});

const LandingPage = () => {
	const classes = useStyles();
	return (
		<div className={classes.landingPage}>
			<div className={classes.landingPageContent}>
				<div className={classes.registerBox}>
					<div className={classes.landingTitle}>
						<h1>Do It</h1>
					</div>
					<div className={classes.landingHeadline}>
						<p>Job and Service Exchange Platform</p>
					</div>
					<div className={classes.landingButtons}>
						<Button className={classes.landingRegisterBtn}>Register</Button>
						<Button className={classes.landingSignInBtn}>Sign in</Button>
					</div>
				</div>
				<div className={classes.landingIntro}>
					<p>
						My chingchongs found them jobs here. My chingchongs found them jobs here. My
						chingchongs found them jobs here. My chingchongs found them jobs here. My
						chingchongs found them jobs here.
					</p>
					<p>
						My chingchongs found them jobs here. My chingchongs found them jobs here. My
						chingchongs found them jobs here. My chingchongs found them jobs here. My
						chingchongs found them jobs here.
					</p>
					<p>
						My chingchongs found them jobs here. My chingchongs found them jobs here. My
						chingchongs found them jobs here. My chingchongs found them jobs here. My
						chingchongs found them jobs here.
					</p>
					<p>
						My chingchongs found them jobs here. My chingchongs found them jobs here. My
						chingchongs found them jobs here. My chingchongs found them jobs here. My
						chingchongs found them jobs here.
					</p>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
