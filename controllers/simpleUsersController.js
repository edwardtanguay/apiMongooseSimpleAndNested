import SimpleUsersModel from '../models/simpleUsersModel.js';

export const getAllSimpleUsers = async () => {
	return await SimpleUsersModel.find({});
}

export const createSimpleUser = async (simpleUserJson) => {
	const simpleUser = new SimpleUsersModel(simpleUserJson);
	return simpleUser.save();
}

export const deleteSimpleUser = async (id) => {
	return await SimpleUsersModel.findByIdAndRemove(id);
}