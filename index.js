// index.js
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

const validKeys = ['SPK-7B9F-4A2D-8E1C-5F3G-2025'];

app.get('/check_licenses', (req, res) => {
    const key = req.query.key;
    if (validKeys.includes(key)) {
        res.send('valid');
    } else {
        res.send('invalid');
    }
});

app.listen(port, () => {
    console.log(License server running on port ${port});
