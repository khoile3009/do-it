import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, Typography, withStyles, Button, Dialog } from "@material-ui/core";
import "./PostJob.scss";

import PostJobTitle from "../../Components/PostJob/PostJobTitle";
import PostJobDescription from "../../Components/PostJob/PostJobDescription";
import PostJobLocation from "../../Components/PostJob/PostJobLocation";
import PostJobPayAmount from "../../Components/PostJob/PostJobPayAmount";
import PostJobDate from "../../Components/PostJob/PostJobDate";
import PostJobTime from "../../Components/PostJob/PostJobTime";
import PostJobTags from "../../Components/PostJob/PostJobTags";
import PostJobConfirmation from "../../Components/PostJob/PostJobConfirmation";

const useStyles = (theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1, 1, 1, 1),
		},
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		":active": {
			outline: "none",
			border: "none",
		},
	},
	paper: {
		position: "absolute",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
});

class PostJobContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tags: [],
		};
	}

	render() {
		const { classes } = this.props;

		return (
			<>
				<Modal scroll="body" className={classes.modal} open="true">
					<div className={classes.paper}>
						<form className={classes.root}>
							<Typography component="h5" variant="h5">
								Create a new job posting
							</Typography>
							<hr />
							<PostJobTitle></PostJobTitle>
							<PostJobDescription></PostJobDescription>
							<PostJobLocation></PostJobLocation>
							<PostJobPayAmount></PostJobPayAmount>
							<br />
							<PostJobDate></PostJobDate>
							<PostJobTime></PostJobTime>
							<PostJobTags></PostJobTags>
						</form>
						<div style={{ textAlign: "right" }}>
							<Button onClick="" variant="contained" color="secondary">
								Cancel
							</Button>
							{"\t"}
							<Button onClick="" variant="contained" color="primary">
								Post
							</Button>
						</div>
					</div>
				</Modal>
				<PostJobConfirmation></PostJobConfirmation>
			</>
		);
	}
}

PostJobContainer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(PostJobContainer);
