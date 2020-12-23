import React, { useState } from "react";
import Calendar from "react-calendar";

const PostJobDate = (props) => {
	const [valueDate, onChangeDate] = useState(new Date());
	return (
		<div>
			{/* <Typography component="subtitle1" variant="subtitle1">
				Date
			</Typography> */}
			<Calendar selectRange={true} onChange={onChangeDate} value={valueDate}></Calendar>
		</div>
	);
};

export default PostJobDate;
