// 서버 시작하기
const express = require('express');
const app = express();
const port = 5001;

app.get('/', (req, res) => {
  return res.send('Hello, world!');
})

app.listen(port, () => {
  console.log('Connected...');
});