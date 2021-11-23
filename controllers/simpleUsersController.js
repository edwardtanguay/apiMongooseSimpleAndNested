import SimpleUsersModel from '../models/simpleUsersModel.js';

export const getAll = async () => {
	return await SimpleUsersModel.find({});
}