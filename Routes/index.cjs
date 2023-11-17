const express = require("express")
const RestaurantController = require("../Controller/RestaurantController.cjs")
const Route = express.Router()

Route.post("/add-restaurant", RestaurantController.addRestaurant)
Route.get("/get-restaurant", RestaurantController.getRestaurant)
Route.delete("/delete-restaurant", RestaurantController.deleteRestaurant)
Route.patch("/update-restaurant", RestaurantController.updateRestaurant)

module.exports = Route