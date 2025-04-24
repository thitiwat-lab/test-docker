const express = require('express');
const app = express();
const PORT = 8000;

app.get('/hello-world', (req, res) => {
	res.send('hello world test deploy V1');
});

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});
