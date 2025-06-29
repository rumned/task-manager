import { useState } from "react";
import {
	Grid,
	Card,
	CardContent,
	Typography,
	Button,
	Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import { onComplete, deleteTask } from "../api/tasks";

import EditTaskForm from "./EditTaskForm";
function TaskItem({ task, fetchData }) {
	const [editing, setEditing] = useState(false);
	const deleteHandler = async (taskId) => {
		if (window.confirm("Are you sure you want to delete this task?")) {
			let data = await deleteTask(taskId);
			if (data.success) {
				alert(data.msg);
				fetchData();
			}
		} else {
			return;
		}
	};
	return (
		<Grid size={{ lg: 4, md: 6, xs: 12 }}>
			<Card style={{ marginBottom: "5px" }}>
				<CardContent>
					{editing ? (
						<EditTaskForm
							task={task}
							setEditing={setEditing}
							fetchData={fetchData}
						/>
					) : (
						<>
							<Typography
								variant="h6"
								sx={{
									textDecoration: task.completed
										? "line-through"
										: "none",
									color: task.completed ? "gray" : "inherit",
								}}>
								{task.description}
							</Typography>

							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									mt: 2,
								}}>
								<Button
									variant="contained"
									color="success"
									disabled={task.completed}
									onClick={async () => {
										await onComplete(task._id);
										await fetchData();
									}}>
									{task.completed ? (
										"Completed"
									) : (
										<CheckIcon />
									)}
								</Button>

								{!task.completed ? (
									<Button
										color="warning"
										variant="outlined"
										onClick={() => setEditing(true)}>
										<EditIcon />
									</Button>
								) : null}

								<Button
									color="error"
									variant="contained"
									onClick={() => deleteHandler(task._id)}>
									<DeleteIcon />
								</Button>
							</Box>
						</>
					)}
				</CardContent>
			</Card>
		</Grid>
	);
}

export default TaskItem;
