/**
 * Here, what we are doing is:

    creating a data schema which contains the fields we want for each Thing, their type, and whether or not they are a required field

    exporting that schema as a Mongoose model, making it available for our Express app

This model will not only allow us to enforce our data structure — it also makes read and write operations to the database far simpler, as you will see in the next chapters.
 */
const mongoose = require("mongoose");

const fleetSchema = mongoose.Schema({
	trip_creation_date: { type: String, required: true },
	contact_person: { type: String, required: true },
	source: { type: String, required: true },
	fleet_number: { type: String, required: true },
	driver_id: { type: String, required: true },
	first_fuel_allowed: { type: String, required: true },
	second_fuel_allowed: { type: String, required: true },
	third_fuel_allowed: { type: String, required: true },
	fourth_fuel_allowed: { type: String, required: true },
	delivery_address: { type: String, required: true },
	ship_to_party: { type: String, required: true },
	sold_to_party: { type: String, required: true },
	contact_no: { type: String, required: true },
	actual_destination: { type: String, required: true },
	fleet_section: { type: String, required: true },
	driver_name: { type: String, required: true },
	initial_km: { type: String, required: true },
	additional_km: { type: String, required: true },
	atc_number: { type: String, required: true },
	trip_number: { type: String, required: true },
});

module.exports = mongoose.model("Fleets", fleetSchema);
