const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req,res)=>{
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '훌랄라',
            'birthday': '961222',
            'gender': '여자',
            'job': '대학생'
        }, 
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '하이하이',
            'birthday': '971102',
            'gender': '여자',
            'job': '의사'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '헬로우',
            'birthday': '920312',
            'gender': '남자',
            'job': '승무원'
        }


    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));