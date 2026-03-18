const express = require("express");
const peRoutes = require("./routes/pe");

const app = express();
app.use(express.json());

app.use("/api/pe", peRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
