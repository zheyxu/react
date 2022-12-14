const express = require("express");
const { setApp } = require("./setup");
const app = express();

setApp(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
