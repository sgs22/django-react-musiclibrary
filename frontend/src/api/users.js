import axios from 'axios';

const baseURL = 'http://localhost:3001/users';

// @route    GET "/"
// @desc.    Get all users
// @access   Private
export const getUsers = async () => {
  try {
    const res = await axios.get(baseURL);
    return res.data;
  } catch (error) {
    console.log(error.response);
  }
};
