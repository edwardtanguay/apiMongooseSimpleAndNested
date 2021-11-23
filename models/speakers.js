import mongoose from 'mongoose';

const speakerSchema = mongoose.Schema({
	name: String
});
const SpeakerModel = mongoose.model("Speaker", speakerSchema);

export default SpeakerModel;
