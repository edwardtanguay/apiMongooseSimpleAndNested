import express from 'express';
import * as SimpleUsersController from './controllers/simpleUsersController.js';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/test');

const app = express();
const port = 3033;

app.use(express.json());

app.get('/simpleUsers', async (req, res) => {
	res.json({
		simpleUsers: await SimpleUsersController.getAllSimpleUsers()
	});
});

app.post('/simpleUsers/create', async (req, res) => {
	console.log(req.body);
	const result = await SimpleUsersController.createSimpleUser(req.body);
	res.json({
		result
	});
});

app.listen(port, () => {
	console.log(`API is now listening on port ${port}`);
})