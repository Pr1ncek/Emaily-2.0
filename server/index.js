const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ Msg: 'Hello World, I am Ava!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server is live!'));
