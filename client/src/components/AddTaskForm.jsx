import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { addTask } from "../api/tasks";
function AddTaskForm({ fetchData }) {
	const [task, setTask] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!task.trim()) return;

		let { data } = await addTask({ description: task });
		alert(data.msg);
		fetchData();
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			sx={{
				display: "flex",
				flexDirection: { xs: "column", sm: "row" },
				alignItems: "center",
				justifyContent: "center",
				gap: 2,
				width: "90%",
				maxWidth: "600px",
				margin: "20px auto",
			}}>
			<TextField
				label="Add new task"
				variant="outlined"
				fullWidth
				value={task}
				onChange={(e) => setTask(e.target.value)}
			/>
			<Button variant="contained" color="primary" type="submit">
				Add
			</Button>
		</Box>
	);
}

export default AddTaskForm;
