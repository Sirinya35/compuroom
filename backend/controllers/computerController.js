const Computer = require("../models/computerModel");

// GET ALL
exports.getAllComputers = async (req, res) => {
    try {
        const computers = await Computer.getAll();
        res.json(computers);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// GET BY ID
exports.getComputerById = async (req, res) => {
    try {
        const computer = await Computer.getById(req.params.id);

        if (!computer) {
            return res.status(404).json({
                message: "Computer not found"
            });
        }

        res.json(computer);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// CREATE
exports.createComputer = async (req, res) => {
    try {
        const computer = await Computer.create(req.body);

        res.status(201).json(computer);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// UPDATE
exports.updateComputer = async (req, res) => {
    try {
        const computer = await Computer.update(
            req.params.id,
            req.body
        );

        res.json(computer);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// DELETE
exports.deleteComputer = async (req, res) => {
    try {
        const result = await Computer.delete(
            req.params.id
        );

        res.json(result);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};