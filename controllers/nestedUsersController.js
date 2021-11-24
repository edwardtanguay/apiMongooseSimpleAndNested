import NestedUsersModel from '../models/nestedUsersModel.js';

export const getAllNestedUsers = async () => {
	return await NestedUsersModel.find({});
}

export const createNestedUser = async (nestedUserObj) => {
	const nestedUser = new NestedUsersModel(nestedUserObj);
	return nestedUser.save();
}

export const deleteNestedUser = async (id) => {
	return await NestedUsersModel.findByIdAndRemove(id);
}

export const updateNestedUser = async (id, updateFields) => {
	return await NestedUsersModel.findByIdAndUpdate(id, updateFields, {new: true});
}