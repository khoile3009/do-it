import React from "react";
import { TextField } from "@material-ui/core";

const PostJobLocation = (props) => {
	return (
		<div>
			<TextField id="job-location-field" label="Job Location" fullWidth></TextField>
		</div>
	);
};

export default PostJobLocation;
