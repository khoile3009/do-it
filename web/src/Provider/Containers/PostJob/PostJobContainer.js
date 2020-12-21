import React, { Component } from "react";
import PostJob from "../../Components/PostJob/PostJob.js";

class PostJobContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tags: [],
		};

		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	handleKeyDown(e) {
		if (e.key == "Enter") {
			this.handleAdd();
		}
	}

	handleAdd(tag) {
		this.setState({
			tags: [...this.state.tags, tag],
		});
	}

	handleDelete(deletedTag) {
		this.setState({
			tags: this.state.tags.filter((c) => c !== deletedTag),
		});
	}

	render() {
		return (
			<div>
				<PostJob></PostJob>
			</div>
		);
	}
}

export default PostJobContainer;
