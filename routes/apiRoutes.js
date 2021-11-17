const router = require('express').Router();
const db = require("../models")

router.get("/workouts", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration'
        }
      }
    }
  ])
    .then((dataWorkouts) => {
      res.json(dataWorkouts)
    })
    .catch((err) => {
      res.json(err)
    })
})

router.put("/workouts/:id", ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((dataWorkout) => {
      res.json(dataWorkout)
    })
    .catch((err) => {
      res.json(err)
    })
})

router.post("/workouts", ({ body }, res) => {
  db.Workout.insertMany(body)
    .then(insertDb => {
      res.json(insertDb)
    })
    .catch(err => {
      res.json(err)
    })

})

router.get("/workouts/range", (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration'
        }
      }
    }
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((dataWorkouts) => {
      res.json(dataWorkouts)
    })
    .catch((err) => {
      res.json(err)
    })
})

module.exports = router