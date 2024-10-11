const express = require("express");
const dotenv = require("dotenv");
const db = require("./src/config/db");
const routes = require("./src/routes");
const cloudinaryConfig = require("./src/config/cloudinary");
const cors = require('cors')
// const Transactions = require("./src/models/Transactions");
// const Products = require("./src/models/Products");
// const Promos = require("./src/models/Promos");
// const Users = require("./src/models/Users");

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(cors({
  origin : ["http://localhost:3000", "*"]
}))

db.authenticate()
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(`Error ${err}`);
  });

  // Promos.sync().then(()=>console.log(`Success synchrone Promos`)).catch((err)=>console.log(err))
  // Products.sync().then(()=>console.log(`Success synchrone Products`)).catch((err)=>console.log(err))
  // Users.sync().then(()=>console.log(`Success synchrone User`)).catch((err)=>console.log(err))
  // Transactions.sync().then(()=>console.log(`Success synchrone Transaction`)).catch((err)=>console.log(err))

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cloudinaryConfig)
app.use(routes);

app.use(express.static(__dirname));

// Transactions.sync().then(() => {
//     console.log(`Transactions is synchorize`);
// }).catch(err => {
//     console.log(err);
// })

// Products.sync()
// Promos.sync()
// Users.sync()


app.get("/", (req, res) => {
  res.status(200).send("Welcome to my simple API");
});

app.listen(port, () => {
  console.log(`APP is running on PORT ${port}`);
});

const data = () => {
  data;
};
