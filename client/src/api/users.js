const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (userData) => {
	try {
		const res = await fetch(`http://localhost:8888/users/login`, {
			method: "POST",
			body: JSON.stringify(userData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();
		if (!res.ok) {
			throw new Error(data.msg || "Failed to login");
		}

		return { success: true, msg: data.msg, token: data.token };
	} catch (e) {
		return { success: false, error: e.message };
	}
};

export const createUser = async (userData) => {
	try {
		const res = await fetch(`http://localhost:8888/users/register`, {
			method: "POST",
			body: JSON.stringify(userData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();
		if (!res.ok) {
			throw new Error(data.msg || "Failed to create User");
		}

		return { success: true, msg: data.msg };
	} catch (e) {
		return { success: false, error: e.message };
	}
};
