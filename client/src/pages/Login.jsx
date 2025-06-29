import { useState, useEffect } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { loginUser } from "../api/users";
import { useNavigate } from "react-router";
import { isAuthenticated } from "../utils/auth";

const Login = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (isAuthenticated()) {
			navigate("/home");
		}
	}, []);
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		let data = await loginUser(formData);
		console.log(data);
		if (data.success) {
			localStorage.setItem("token", data.token);
			navigate("/");
		} else {
			alert(data.error);
			setFormData({ username: "", password: "" });
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
					Login
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

					<Button
						type="submit"
						variant="contained"
						color="primary"
						fullWidth
						sx={{ mt: 2 }}>
						Login
					</Button>
				</form>
			</Paper>
		</Box>
	);
};

export default Login;
