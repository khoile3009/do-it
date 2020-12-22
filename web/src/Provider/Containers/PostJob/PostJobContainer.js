import React, { Component } from "react";
import PostJob from "../../Components/PostJob/PostJob.js";
import { Modal } from "@material-ui/core";

class PostJobContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tags: [],
		};
	}

	render() {
		return (
			<>
				{/* <PostJobTitle></PostJobTitle> */}
				<PostJob></PostJob>
				{/* <PostJob></PostJob>
				<PostJob></PostJob>
				<PostJob></PostJob> */}
			</>
		);
	}
}

export default PostJobContainer;
