import React from "react";
import { TextField } from "@material-ui/core";

const PostJobDescription = (props) => {
	return (
		<div>
			<TextField
				id="job-description-field"
				label="Job Description"
				multiline
				fullWidth
			></TextField>
		</div>
	);
};

export default PostJobDescription;
