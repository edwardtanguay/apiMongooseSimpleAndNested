import express from 'express';
// import * as SpeakersController from './controllers/speakers.js';
// import * as PresentationsController from './controllers/presentations.js';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/mongoConference');

const app = express();
const port = 3033;

app.get('/', (req, res) => {
	res.json({
		message: "test"
	});
});

app.listen(port, () => {
	console.log(`API is now listening on port ${port}`);
})