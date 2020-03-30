const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name' : '한글이름',
        'birthday' : '20200109',
        'gender': 'men',
        'job': 'developer',
        },
        {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name' : '2배열 이름',
        'birthday' : '20200109',
        'gender': 'men',
        'job': 'developer',
        },
        {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name' : '3배열 이름',
        'birthday' : '20200109',
        'gender': 'men',
        'job': '그냥 직업',
        }
    ]);

});

app.listen(port, () => console.log(`Listening on port ${port}`));