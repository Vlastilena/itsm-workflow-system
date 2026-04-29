const express = require("express");
const app = express();

const ticketController = require("./controllers/ticketController");

app.use(express.json());

app.post("/tickets", (req, res) => ticketController.create(req, res));
app.get("/tickets", (req, res) => ticketController.getAll(req, res));
app.patch("/tickets", (req, res) => ticketController.update(req, res));

app.listen(3000, () => {
  console.log("ITSM system running on port 3000");
});
