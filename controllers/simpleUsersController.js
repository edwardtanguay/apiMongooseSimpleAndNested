import SimpleUsersModel from '../models/simpleUsersModel.js';

export const getAll = async () => {
	const simpleUsers = await SimpleUsersModel.find({});
	return simpleUsers;
}