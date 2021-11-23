import express from 'express';
import * as SimpleUsersController from './controllers/simpleUsersController.js';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/test');

const app = express();
const port = 3033;

app.get('/', async (req, res) => {
	res.json({
		simpleUsers: await SimpleUsersController.getAll()
	});
});

app.listen(port, () => {
	console.log(`API is now listening on port ${port}`);
})