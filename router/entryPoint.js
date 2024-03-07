const express = require("express");
const serviceDetails = require("../service-details");
const router = express.Router();

// non Api

//Home
router.get("/", (req, res) => {
  res.render("index", { title: "home" });
});

// Service
// router.get("/service", (req, res) => {
//   res.render("service", { title: "service" });
// });

// About
router.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});
//service detail page
router.get("/service/:name", (req, res) => {
  const serviceName = req.params.name;
  // Find the service in your data based on the service name
  const service = serviceDetails.find(
    (service) => service.name === serviceName
  );
  // console.log(service, "service");
  if (!service) {
    // Handle the case where the service is not found
    res.status(404).send("Service not found");
    return;
  }
  res.render("service-page", {
    title: service.name,
    serviceDetails: service,
  });
});

router.get("/contact", (req, res) => {
  const url = req.url;
  res.render("contact", { title: "contact us", url });
});

module.exports = router;
