const express = require('express'),
  cors = require('cors');
  bodyParser = require('body-parser'),
  webserver = express(),
  port = 3200,
  bmiCalculatorHistory = [];

webserver.use(cors());
webserver.use(bodyParser.json({ limit: '50mb' }));
webserver.use(bodyParser.urlencoded({extended: false}));
webserver.listen(port, serverCallback);

function serverCallback() {
  console.log("Server is started and listening at port:"+port);
}

webserver.get("/bmi/history", function(req, res) {
  console.log("Server api history: ", bmiCalculatorHistory);
  res.status(200).send(bmiCalculatorHistory);
});

webserver.post("/bmi/calculate", function(req, res) {
  let data = req.body;
  console.log("Server api weight: ", data.weight, "height: ", data.height);
  let bmi = (data.weight / (data.height * data.height));
  bmiCalculatorHistory.push({ "weight": data.weight, "height": data.height, "bmi": bmi});
  res.status(200).send({"result": bmi});
});