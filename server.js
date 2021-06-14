//in this server.js file I set up the Node server using Express library

//Express is a Node.js library that allows us to build an API server easily
const express = require("express"); //importing experss library
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
console.log("process.env.STRIPE_SECRET_KEY = ", process.env.STRIPE_SECRET_KEY);

app.use(compression()); //when we deploy a website, this makes sure that chuncks of files are compressed, for optimization purposes
const app = express(); //instantiate a new express application
const port = process.env.PORT || 5000; //if there is a PORT value in process.env set by Heroku, use that port, otherwise use localhost:5000

app.use(bodyParser.json()); //process body requests and convert it to JSON
app.use(bodyParser.urlencoded({ extended: true })); //urlencoded makes sure string are in url format

//serve the client application
//if we are in production:
if (process.env.NODE_ENV === "production") {
  app.use(enforce.HTTPS({ trustProtoHeader: true })); //makes sure our code doesn't require us to use https in development.
  app.use(express.static(path.join(__dirname, "client/build")));

  //send the static files
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

// app.get("/service-worker.js", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
// });

//building payment route
app.post("/payment", (req, res) => {
  //req object will provide the token that we get from the stripe button, token is an identifier of who making a request and where from

  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
