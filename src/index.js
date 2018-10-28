import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

import auth from './routes/auth';

const app = express();
mongoose.connect('mongodb://localhost/gifter', { useMongoClient: true });

app.use('/api/auth', auth);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(8000, () => console.log('Running on localhost:8000'));


