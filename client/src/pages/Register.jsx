import { useState, useEffect } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { createUser } from "../api/users";
import { useNavigate } from "react-router";
import { isAuthenticated } from "../utils/auth";

const Register = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (isAuthenticated()) {
			navigate("/home");
		}
	}, []);
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		confirmPassword: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let data = await createUser(formData);

		if (data.success) {
			alert(data.msg);
			setFormData({
				username: "",
				password: "",
				confirmPassword: "",
			}); //clears the form
		} else {
			alert(data.error);
		}
	};

	return (
		<Box
			sx={{
				height: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				bgcolor: "#f5f5f5",
			}}>
			<Paper elevation={3} sx={{ p: 4, width: 300 }}>
				<Typography variant="h5" align="center" gutterBottom>
					Register
				</Typography>
				<form onSubmit={handleSubmit}>
					<TextField
						label="Username"
						name="username"
						fullWidth
						margin="normal"
						onChange={handleChange}
						value={formData.username}
					/>
					<TextField
						label="Password"
						name="password"
						type="password"
						fullWidth
						margin="normal"
						onChange={handleChange}
						value={formData.password}
					/>
					<TextField
						label="Confirm Password"
						name="confirmPassword"
						type="password"
						fullWidth
						margin="normal"
						onChange={handleChange}
						value={formData.confirmPassword}
					/>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						fullWidth
						sx={{ mt: 2 }}>
						Register
					</Button>
				</form>
			</Paper>
		</Box>
	);
};

export default Register;
