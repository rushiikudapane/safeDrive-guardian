const router = require("express").Router();
const DrivingDataController = require("../controllers/DrivingDataController");

router.route("/getDrivingData").get(DrivingDataController.getDrivingData);
router.route("/setDrivingData").post(DrivingDataController.updateDrivingData);

module.exports = router;
