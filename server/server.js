const express = require('express');
const app = express();
const PORT = 5555;

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send('success!');
})

app.listen(PORT, () => console.log(`SCV Ready on port ${PORT}`));