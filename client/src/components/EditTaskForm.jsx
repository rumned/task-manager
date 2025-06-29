import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { updateTask } from "../api/tasks";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
function EditTaskForm({ fetchData, task, setEditing }) {
	const [newTask, setNewTask] = useState(task);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!newTask.description.trim()) return;

		await updateTask(newTask);

		// let { data } = await updateTask(newTask);
		// console.log(data);
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
				label="Update Description"
				variant="outlined"
				fullWidth
				value={newTask.description}
				onChange={(e) =>
					setNewTask({ ...newTask, description: e.target.value })
				}
			/>
			<Button variant="contained" color="success" type="submit">
				<CheckIcon />
			</Button>
			<Button
				type="button"
				variant="contained"
				color="secondary"
				onClick={() => setEditing(false)}>
				<CloseIcon />
			</Button>
		</Box>
	);
}

export default EditTaskForm;
