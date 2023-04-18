import User from "../mongodb/models/user.js";

//GET ALL USERS
const getAllUsers = async (req, res) => {};

//CREATE USER
const createUser = async (req, res) => {
	try {
		const { name, email, avatar } = req.body;

		const userExists = await User.findOne({ email });

		if (userExists) return res.status(200).json(userExists);

		const newUser = await User.create({
			name,
			email,
			avatar,
		});

		res.status(200).json(newUser);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

//GET USER'S INFO BY ID
const getUserInfoByID = async (req, res) => {};

export { getAllUsers, createUser, getUserInfoByID };
