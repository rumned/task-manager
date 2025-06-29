const API_URL = import.meta.env.VITE_API_URL;

export const getTasks = async () => {
	try {
		const res = await fetch(`http://localhost:8888/tasks`, {
			headers: {
				"x-auth-token": localStorage.getItem("token"),
			},
		});

		const data = await res.json();
		return { success: true, data };
	} catch (e) {
		return { success: false, msg: e.msg };
	}
};

export const addTask = async (task) => {
	try {
		const res = await fetch(`http://localhost:8888/tasks`, {
			method: "POST",
			headers: {
				"x-auth-token": localStorage.getItem("token"),
				"Content-Type": "application/json",
			},
			body: JSON.stringify(task),
		});

		const data = await res.json();
		return { success: true, data };
	} catch (e) {
		return { success: false, msg: e.msg };
	}
};

export const onComplete = async (taskId) => {
	try {
		const res = await fetch(`http://localhost:8888/tasks/${taskId}`, {
			method: "PATCH",
			headers: {
				"x-auth-token": localStorage.getItem("token"),
			},
		});

		const data = await res.json();
		return { success: true, data };
	} catch (e) {
		return { success: false, msg: e.msg };
	}
};

export const deleteTask = async (taskId) => {
	try {
		const res = await fetch(`http://localhost:8888/tasks/${taskId}`, {
			method: "DELETE",
			headers: {
				"x-auth-token": localStorage.getItem("token"),
			},
		});

		const data = await res.json();
		return { success: true, msg: data.msg };
	} catch (e) {
		return { success: false, msg: e.msg };
	}
};

export const updateTask = async (task) => {
	try {
		const res = await fetch(`http://localhost:8888/tasks/${task._id}`, {
			method: "PUT",
			headers: {
				"x-auth-token": localStorage.getItem("token"),
				"Content-Type": "application/json",
			},
			body: JSON.stringify(task),
		});

		const data = await res.json();
		console.log(data);
		return { success: true, msg: data.msg };
	} catch (e) {
		return { success: false, msg: e.msg };
	}
};
