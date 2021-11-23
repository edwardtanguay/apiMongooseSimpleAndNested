import mongoose from 'mongoose';

const presentationSchema = mongoose.Schema({
	title: String,
	room: String
});
const PresentationModel = mongoose.model("Presentation", presentationSchema);

export default PresentationModel;
