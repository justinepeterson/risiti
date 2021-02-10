const express = require("express");
const router = express.Router();
const fleetController = require("../controllers/fleet");


router.post("/", fleetController.createFleet);
router.get("/:id", fleetController.getAFleet);
router.put("/:id", fleetController.editAFleet);
router.delete("/:id", fleetController.deleteAFleet);
router.get("/", fleetController.getAllFleets);

module.exports = router;
