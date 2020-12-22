import React from "react";
import ChipInput from "material-ui-chip-input";
import { Typography } from "@material-ui/core";

const PostJobTags = (props) => {
	return (
		<div>
			<Typography component="subtitle1" variant="subtitle1">
				Tags
			</Typography>
			<br />
			<ChipInput fullWidth multiline />
		</div>
	);
};

export default PostJobTags;
