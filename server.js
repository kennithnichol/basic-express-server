const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

const app = express();
app.use(cors());
app.use(morgan('common'));
app.use('/static', express.static(path.join(__dirname, 'public'), { 'maxage': '2h' }));

app.get('/hi', (req, res) => {
	res.set({
		'Cache-Control': 'public, max-age=86400',
		'Content-Type': 'text/html'
	});
	res.send(new Buffer('<h2>Test String</h2>'));
})

app.listen(3000, () => console.log('Example app listening on port 3000!'));
