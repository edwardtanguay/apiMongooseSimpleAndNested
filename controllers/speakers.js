import SpeakerModel from '../models/speakers.js';

export const getAllSpeakers = async () => {
	const speakers = await SpeakerModel.find({});
	return speakers;
}