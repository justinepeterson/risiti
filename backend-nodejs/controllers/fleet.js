const Fleet = require("../models/fleet");
const fs = require("fs");

exports.createFleet = (req, res, next) => {
	const fleet = new Fleet({
		trip_creation_date: req.body.trip_creation_date,
		contact_person: req.body.contact_person,
		source: req.body.source,
		fleet_number: req.body.fleet_number,
		driver_id: req.body.driver_id,
		first_fuel_allowed: req.body.first_fuel_allowed,
		second_fuel_allowed: req.body.second_fuel_allowed,
		third_fuel_allowed: req.body.third_fuel_allowed,
		fourth_fuel_allowed: req.body.fourth_fuel_allowed,
		delivery_address: req.body.delivery_address,
		ship_to_party: req.body.ship_to_party,
		sold_to_party: req.body.sold_to_party,
		contact_no: req.body.contact_no,
		actual_destination: req.body.actual_destination,
		fleet_section: req.body.fleet_section,
		driver_name: req.body.driver_name,
		initial_km: req.body.initial_km,
		additional_km: req.body.additional_km,
		atc_number: req.body.atc_number,
		trip_number: req.body.trip_number,
	});
	fleet
		.save()
		.then(() => {
			res.json({
				message: "Fleet saved successfully!",
			});
		})
		.catch((error) => {
			res.json({
				error: error,
			});
		});
};

exports.getAFleet = (req, res, next) => {
	Fleet.findOne({
		_id: req.params.id,
	})
		.then((fleet) => {
			res.status(200).json(fleet);
		})
		.catch((error) => {
			res.status(404).json({
				error: error,
			});
		});
};

exports.editAFleet = (req, res, next) => {
	const fleet = new Fleet({
		_id: req.params.id,
		trip_creation_date: req.body.trip_creation_date,
		contact_person: req.body.contact_person,
		source: req.body.source,
		fleet_number: req.body.fleet_number,
		driver_id: req.body.driver_id,
		first_fuel_allowed: req.body.first_fuel_allowed,
		second_fuel_allowed: req.body.second_fuel_allowed,
		third_fuel_allowed: req.body.third_fuel_allowed,
		fourth_fuel_allowed: req.body.fourth_fuel_allowed,
		delivery_address: req.body.delivery_address,
		ship_to_party: req.body.ship_to_party,
		sold_to_party: req.body.sold_to_party,
		contact_no: req.body.contact_no,
		actual_destination: req.body.actual_destination,
		fleet_section: req.body.fleet_section,
		driver_name: req.body.driver_name,
		initial_km: req.body.initial_km,
		additional_km: req.body.additional_km,
		atc_number: req.body.atc_number,
		trip_number: req.body.trip_number,
	});
	Fleet.updateOne({ _id: req.params.id }, fleet)
		.then(() => {
			res.status(201).json({
				message: "Fleet updated successfully!",
			});
		})
		.catch((error) => {
			res.status(400).json({
				error: error,
			});
		});
};

exports.deleteAFleet = (req, res, next) => {
	Fleet.deleteOne({ _id: req.params.id })
		.then(() => {
			res.status(200).json({
				message: "Deleted!",
			});
		})
		.catch((error) => {
			res.status(400).json({
				error: error,
			});
		});
};

exports.getAllFleets = (req, res, next) => {
	Fleet.find()
		.then((fleets) => {
			res.status(200).json(fleets);
		})
		.catch((error) => {
			res.status(400).json({
				error: error,
			});
		});
};
