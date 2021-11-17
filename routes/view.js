const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const db = require("../models")
const path = require('path');

router.get("/", (req, res) => {
  res.send(index.html)
})

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

router.get("/exercise/:id", (req, res) => {
  db.Workout.findOne({ _id: mongojs.ObjectId(req.params.id) })
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json(err)
    })
})


router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"))
})

module.exports = router