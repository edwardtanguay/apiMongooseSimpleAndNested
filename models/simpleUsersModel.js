import mongoose from 'mongoose';

const simpleUsersSchema = mongoose.Schema({
    firstName: String,
    lastName: String
});

const SimpleUsersModel = mongoose.model("SimpleUser", simpleUsersSchema);

export default SimpleUsersModel;
