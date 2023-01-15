const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/usage', require('./routes/usageRoutes'));
app.use('/api/users', require('./routes/userRoutes'));



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

