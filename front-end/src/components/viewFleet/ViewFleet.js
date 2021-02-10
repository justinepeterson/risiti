import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import "./ViewFleet.css";

function ViewFleet(fleet) {
	console.log(fleet)
	return (
		<div className="container">
			<div className="data-list">
				<ul>
					<li>
						<div className="heading">
							<h5>DANGOTE CEMENT TRANSPORT</h5>
							<p>Trip Number: {fleet.trip_number}{}</p>
						</div>
						<div className="table-top">
							<div className="logo">
								<img src={logo} alt="Dangote Logo" />
							</div>
							<div className="content">
								<div className="address">
									<span>
										<strong>Delivery Address: </strong>
										{fleet.delivery_address}
									</span>
								</div>
								<div className="atc">
									<div className="number">
										<span>
											<strong>ATC Number : {fleet.atc_number}</strong>
										</span>
									</div>
									<div className="empty"></div>
								</div>
							</div>
						</div>
						<div className="table-body">
							<table>
								<tr>
									<td className="table-left1">Trip Creation Date</td>
									<td className="table-left2">{fleet.trip_creation_date}</td>
									<td className="emptytd"></td>
									<td>Ship-to-Party</td>
									<td>{fleet.ship_to_party}</td>
								</tr>
								<tr>
									<td>Trip Creation Time</td>
									<td>18:16:41</td>
									<td className="emptytd"></td>
									<td>Sold-to-Party</td>
									<td>{fleet.sold_to_party}</td>
								</tr>
								<tr>
									<td>Contact Person</td>
									<td>Augustino</td>
									<td className="emptytd"></td>
									<td>Contact No</td>
									<td>{fleet.contact_no}</td>
								</tr>
								<tr>
									<td>Source</td>
									<td>{fleet.source}</td>
									<td className="emptytd"></td>
									<td>Destination/Actual Dest</td>
									<td>{fleet.actual_destination}</td>
								</tr>
								<tr>
									<td>Fleet Number</td>
									<td>{fleet.fleet_number}</td>
									<td className="emptytd"></td>
									<td>Fleet Section</td>
									<td>{fleet.fleet_section}</td>
								</tr>
								<tr>
									<td>Driver Id</td>
									<td>{fleet.driver_id}</td>
									<td className="emptytd"></td>
									<td>Driver Name</td>
									<td>HENRY STEPHEN MPONJI</td>
								</tr>
								<tr>
									<td>Total Fuel Allowed</td>
									<td>{fleet.fourth_fuel_allowed}</td>
									<td className="emptytd"></td>
									<td>Initial KM + Additional</td>
									<td>
										{fleet.initial_km} + {fleet.additional_km} = 1,990.000 KMs
									</td>
								</tr>
							</table>
						</div>
						<div className="table-bottom">
							<table>
								<tr>
									<td>
										<strong>
											1st Fuel Allowed: {fleet.first_fuel_allowed}
										</strong>
									</td>
									<td className="emptytd-top">
										<strong>
											2nd Fuel Allowed: {fleet.second_fuel_allowed}
										</strong>
									</td>
									<td>
										<strong>
											3rd Fuel Allowed: {fleet.third_fuel_allowed}
										</strong>
									</td>
									<td>
										<strong>4th Fuel Allowed: 0.000</strong>
									</td>
								</tr>
								<tr>
									<td>
										<strong>INITIAL FUEL FOR TRIP</strong>
									</td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</table>
						</div>
						<div className="footer">
							<div>
								<strong>(Fuel Officer</strong>
							</div>
							<div>
								..............................................................................................................................................................
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default ViewFleet;
