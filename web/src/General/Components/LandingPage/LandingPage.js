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
		display: "block",
		height: "100vh",
		width: "100vw",
		background: "grey",
	},
	registerBox: {
		display: "grid",
		alignItems: "center",
		justifyContent: "center",
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
	},
	landingSignInBtn: {
		margin: "0 2rem",
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
				<div className="intro-box"></div>
			</div>
		</div>
	);
};

export default LandingPage;
