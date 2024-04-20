import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";

// Registering a new User
export const registerUser = async (req, res) => {
  const { username, password, firstName, lastName } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  try {
    const newUser = await UserModel.create({
      username,
      password: hashedPass,
      firstName,
      lastName,
    });
    // await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// login User

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username: username });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      validity
        ? res.status(200).json(user)
        : res.status(400).json("Wrong Password");
    } else {
      res.status(404).json("User does not exists");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
