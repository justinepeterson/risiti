import React, { useState } from "react";
import FleetDataService from "../../services/FleetDataService";
import { Link } from "react-router-dom";

import "./AddFleet.css";

function AddFleets({ handleAddNewRecipt }) {
	const initialFleetState = {
		trip_creation_date: "",
		trip_creation_time: "",
		contact_person: "",
		source: "",
		fleet_number: "",
		driver_id: "",
		first_fuel_allowed: "",
		second_fuel_allowed: "",
		third_fuel_allowed: "",
		fourth_fuel_allowed: "",
		delivery_address: "",
		ship_to_party: "",
		sold_to_party: "",
		contact_no: "",
		actual_destination: "",
		fleet_section: "",
		driver_name: "",
		initial_km: "",
		additional_km: "",
		atc_number: "",
		trip_number: "",
	};

	const [fleet, setFleet] = useState(initialFleetState);
	const [submitted, setSubmitted] = useState(false);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFleet({ ...fleet, [name]: value });
	};

	const saveFleet = () => {
		var data = {
			trip_creation_date: fleet.trip_creation_date,
			contact_person: fleet.contact_person,
			source: fleet.source,
			fleet_number: fleet.fleet_number,
			driver_id: fleet.driver_id,
			first_fuel_allowed: fleet.first_fuel_allowed,
			second_fuel_allowed: fleet.second_fuel_allowed,
			third_fuel_allowed: fleet.third_fuel_allowed,
			fourth_fuel_allowed: fleet.fourth_fuel_allowed,
			delivery_address: fleet.delivery_address,
			ship_to_party: fleet.ship_to_party,
			sold_to_party: fleet.sold_to_party,
			contact_no: fleet.contact_no,
			actual_destination: fleet.actual_destination,
			fleet_section: fleet.fleet_section,
			driver_name: fleet.driver_name,
			initial_km: fleet.initial_km,
			additional_km: fleet.additional_km,
			atc_number: fleet.atc_number,
			trip_number: fleet.trip_number,
		};

		FleetDataService.create(data)
			.then((response) => {
				setFleet({
					trip_creation_date: response.data.trip_creation_date,
					contact_person: response.data.contact_person,
					source: response.data.source,
					fleet_number: response.data.fleet_number,
					driver_id: response.data.driver_id,
					first_fuel_allowed: response.data.first_fuel_allowed,
					second_fuel_allowed: response.data.second_fuel_allowed,
					third_fuel_allowed: response.data.third_fuel_allowed,
					fourth_fuel_allowed: response.data.fourth_fuel_allowed,
					delivery_address: response.data.delivery_address,
					ship_to_party: response.data.ship_to_party,
					sold_to_party: response.data.sold_to_party,
					contact_no: response.data.contact_no,
					actual_destination: response.data.actual_destination,
					fleet_section: response.data.fleet_section,
					driver_name: response.data.driver_name,
					initial_km: response.data.initial_km,
					additional_km: response.data.additional_km,
					atc_number: response.data.atc_number,
					trip_number: response.data.trip_number,
				});
				setSubmitted(true);
				console.log(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	const newFleet = () => {
		setFleet(initialFleetState);
		setSubmitted(false);
	};

	return (
		<div className="fleet-form">
			<form class="form-horizontal" onSubmit={saveFleet}>
				<div class="row ">
					<div class="header">
						<div class="col-8 offset-4">
							<h2>Add Fleet</h2>
						</div>
						<div className="close">
							<button
								onClick={handleAddNewRecipt}
								type="button"
								class="close"
								aria-label="Close"
							>
								close
							</button>
						</div>
					</div>
				</div>
				<div>
					<div>
						<div>
							<label htmlFor="title">Fleet Number</label>
							<input
								type="text"
								id="fleet_number"
								required
								value={fleet.fleet_number}
								onChange={handleInputChange}
								name="fleet_number"
							/>
						</div>

						<div>
							<label htmlFor="title">Trip Creationg Date</label>
							<input
								type="text"
								id="trip_creation_date"
								required
								value={fleet.trip_creation_date}
								onChange={handleInputChange}
								name="trip_creation_date"
							/>
						</div>

						<div>
							<label htmlFor="title">Contact Person</label>
							<input
								type="text"
								id="contact_person"
								required
								value={fleet.contact_person}
								onChange={handleInputChange}
								name="contact_person"
							/>
						</div>

						<div>
							<label htmlFor="title">Soure</label>
							<input
								type="text"
								id="source"
								required
								value={fleet.source}
								onChange={handleInputChange}
								name="source"
							/>
						</div>

						<div>
							<label htmlFor="title">Driver ID</label>
							<input
								type="text"
								id="driver_id"
								required
								value={fleet.driver_id}
								onChange={handleInputChange}
								name="driver_id"
							/>
						</div>

						<div>
							<label htmlFor="title">First Fuel Allowed</label>
							<input
								type="text"
								id="first_fuel_allowed"
								required
								value={fleet.first_fuel_allowed}
								onChange={handleInputChange}
								name="first_fuel_allowed"
							/>
						</div>

						<div>
							<label htmlFor="title">Second Fuel Allowed</label>
							<input
								type="text"
								id="second_fuel_allowed"
								required
								value={fleet.second_fuel_allowed}
								onChange={handleInputChange}
								name="second_fuel_allowed"
							/>
						</div>

						<div>
							<label htmlFor="title">Third Fuel Allowed</label>
							<input
								type="text"
								id="third_fuel_allowed"
								required
								value={fleet.third_fuel_allowed}
								onChange={handleInputChange}
								name="third_fuel_allowed"
							/>
						</div>

						<div>
							<label htmlFor="title">Fourth Fuel Allowed</label>
							<input
								type="text"
								id="fourth_fuel_allowed"
								required
								value={fleet.fourth_fuel_allowed}
								onChange={handleInputChange}
								name="fourth_fuel_allowed"
							/>
						</div>

						<div>
							<label htmlFor="title">Delivery Address</label>
							<input
								type="text"
								id="delivery_address"
								required
								value={fleet.delivery_address}
								onChange={handleInputChange}
								name="delivery_address"
							/>
						</div>

						<div>
							<label htmlFor="title">Ship To Party</label>
							<input
								type="text"
								id="ship_to_party"
								required
								value={fleet.ship_to_party}
								onChange={handleInputChange}
								name="ship_to_party"
							/>
						</div>

						<div>
							<label htmlFor="title">Sold To Party</label>
							<input
								type="text"
								id="sold_to_party"
								required
								value={fleet.sold_to_party}
								onChange={handleInputChange}
								name="sold_to_party"
							/>
						</div>

						<div>
							<label htmlFor="title">Contact No</label>
							<input
								type="text"
								id="contact_no"
								required
								value={fleet.contact_no}
								onChange={handleInputChange}
								name="contact_no"
							/>
						</div>

						<div>
							<label htmlFor="title">Actual Destination</label>
							<input
								type="text"
								id="actual_destination"
								required
								value={fleet.actual_destination}
								onChange={handleInputChange}
								name="actual_destination"
							/>
						</div>

						<div>
							<label htmlFor="title">Fleet Section</label>
							<input
								type="text"
								id="fleet_section"
								required
								value={fleet.fleet_section}
								onChange={handleInputChange}
								name="fleet_section"
							/>
						</div>

						<div>
							<label htmlFor="title">Driver Name</label>
							<input
								type="text"
								id="driver_name"
								required
								value={fleet.driver_name}
								onChange={handleInputChange}
								name="driver_name"
							/>
						</div>

						<div>
							<label htmlFor="title">Initial Km</label>
							<input
								type="text"
								id="initial_km"
								required
								value={fleet.initial_km}
								onChange={handleInputChange}
								name="initial_km"
							/>
						</div>

						<div>
							<label htmlFor="title">Additional Km</label>
							<input
								type="text"
								id="additional_km"
								required
								value={fleet.additional_km}
								onChange={handleInputChange}
								name="additional_km"
							/>
						</div>

						<div>
							<label htmlFor="title">ATC Number</label>
							<input
								type="text"
								id="atc_number"
								required
								value={fleet.atc_number}
								onChange={handleInputChange}
								name="atc_number"
							/>
						</div>
						<button type="submit" class="btn btn-primary btn-lg">
							Submit
						</button>
					</div>
				</div>

				<div class="text-center">
					<Link to="/">View Fleets</Link>
				</div>
			</form>
		</div>
	);
}

export default AddFleets;
