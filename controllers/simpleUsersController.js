import SimpleUsersModel from '../models/simpleUsersModel.js';

export const getAll = async () => {
	return await SimpleUsersModel.find({});
}

export const create = async (simpleUserJson) => {
	const simpleUser = new SimpleUsersModel(simpleUserJson);
	return simpleUser.save();
}