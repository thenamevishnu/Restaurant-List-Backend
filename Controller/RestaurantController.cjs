const RestaurantList = require("../Model/RestaurantModel.cjs")

const addRestaurant = async (req, res) => {
    try {
        const object = req.body
        const response = await (await RestaurantList.create(object)).toJSON()
        if (response.id) {
            res.status(200).send({status: "OK", message: "Restaurant created", newRecord: response})
        } else {
            res.status(500).send({message: "Error while creating Restaurant"})
        }
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}

const getRestaurant = async (req, res) => {
    try {
        const response = (await RestaurantList.findAll()).map(item => item.dataValues)
        res.status(200).send({status: "OK", result: response})
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}

const deleteRestaurant = async (req, res) => {
    try {
        const { id } = req.params
        const response = await RestaurantList.destroy({ where: { id: id } })
        if (response) {
            res.status(200).send({status: "OK", message: "Deleted"})
        } else {
            res.status(404).send({message: "Record not found"})
        }
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}

const updateRestaurant = async (req, res) => {
    try {
        const body = req.body
        const response = await RestaurantList.update(
            {
                RESTAURANT_NAME: body.RESTAURANT_NAME,
                RESTAURANT_IMAGE: body.RESTAURANT_IMAGE,
                RESTAURANT_DESCRIPTION: body.RESTAURANT_DESCRIPTION,
                RESTAURANT_ADDRESS: body.RESTAURANT_ADDRESS,
                RESTAURANT_NUMBER: body.RESTAURANT_NUMBER
            }, {
                where: {
                    id: body.id
                }
        })
        if (response[0]) {
            const list = (await RestaurantList.findAll()).map(item => item.dataValues)
            res.status(200).send({status: "OK", message: "Updated", newList: list})
        } else {
            res.status(404).send({message: "Record not found"})
        }
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}

module.exports = {
    addRestaurant, getRestaurant, deleteRestaurant, updateRestaurant
}