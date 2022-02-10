const express = require("express");
const router = express.Router();
const { getGoals, setGoals, updateGoals, deleteGoals } = require("../controller/goalController");

router.route("/").get(getGoals).post(setGoals);
router.route("/:id").delete(updateGoals).put(deleteGoals);

module.exports = router;
