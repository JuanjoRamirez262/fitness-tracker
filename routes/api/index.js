const router = require('express').Router();
const workoutsRoutes = require("./workoutRoutes")

router.use("/workouts", workoutsRoutes)

module.exports = router