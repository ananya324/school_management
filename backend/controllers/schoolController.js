const db = require("../config/db");
const calculateDistance = require("../utils/distance");

exports.addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || latitude == null || longitude == null) {
        return res.status(400).json({
            message: "All fields are required",
        });
    }

    const query =
        "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";

    db.query(query, [name, address, latitude, longitude], (err, result) => {
        if (err) {
            console.log("DB ERROR:", err);
            return res.status(500).json({
                message: "Database error",
                error: err.sqlMessage || err.message,
            });
        }

        res.status(201).json({
            message: "School added successfully",
        });
    });
};

exports.listSchools = (req, res) => {
    const { longitude, latitude } = req.query;

    if (!longitude || !latitude) {
        return res.status(400).json({
            message: "Latitude and Longitude required",
        });
    }

    db.query("SELECT * FROM schools", (err, results) => {
        if (err) {
            console.log("DB ERROR:", err);
            return res.status(500).json({
                message: "Database error",
                error: err.sqlMessage || err.message,
            });
        }

        const schools = results.map((school) => {
            const distance = calculateDistance(
                parseFloat(latitude),
                parseFloat(longitude),
                school.latitude,
                school.longitude
            );

            return {
                ...school,
                distance: distance.toFixed(2),
            };
        });

        schools.sort((a, b) => a.distance - b.distance);

        res.status(200).json(schools);
    });
};