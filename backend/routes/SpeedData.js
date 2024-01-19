const router = require("express").Router();
const SpeedDataController = require("../controllers/SpeedDataController");

// get method call to retrive user info
router.route("/getSpeedHistoty").get(SpeedDataController.getSpeedHistory);
router.route("/getAvgSpeed").get(SpeedDataController.getAvgSpeed);

router.route("/setSpeedHistory").post(SpeedDataController.setSpeedHistory);
// router.route("/setAvgSpeed").post(SpeedDataController.setAvgSpeed);

module.exports = router;
