import React, { useState, useEffect } from "react";
import FleetDataService from "../../services/FleetDataService";
import AddFleet from "../add/AddFleets";
import ViewFleet from "../viewFleet/ViewFleet";
// import VisibilityIcon from "@material-ui/icons/Visibility";
// import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
	const [fleets, setFleets] = useState([]);
	const [showPopUp, setShowPopUp] = useState(false);
	const [popUpFleet, setPopUpFleet] = useState(false);

	useEffect(() => {
		retrieveFleets();
	}, [fleets]);

	const retrieveFleets = () => {
		FleetDataService.getAll()
			.then((response) => {
				setFleets(response.data);
				console.log(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	const handleAddNewRecipt = () => {
		setShowPopUp(!showPopUp);
	};

	const handleViewFleet = () => {
		setPopUpFleet(!popUpFleet);
	};

	return (
		<div class="home">
			{showPopUp ? (
				<div className="popup">
					<AddFleet handleAddNewRecipt={handleAddNewRecipt} />
				</div>
			) : (
				<div></div>
			)}
			<div class="container-xl">
				<div class="table-responsive">
					<div class="table-wrapper">
						<div class="table-title">
							<div class="row">
								<div class="col-sm-6">
									<h2>
										Manage <b>Transport Recipts</b>
									</h2>
								</div>
								<div class="col-sm-6">
									<a
										onClick={handleAddNewRecipt}
										className="nav-link"
										class="btn btn-success"
										data-toggle="modal"
									>
										<i class="material-icons">&#xE147;</i>{" "}
										<span>Add New Recipt</span>
									</a>

									<a
										href="#deleteEmployeeModal"
										class="btn btn-danger"
										data-toggle="modal"
									>
										<i class="material-icons">&#xE15C;</i> <span>Delete</span>
									</a>
								</div>
							</div>
						</div>
						<table class="table table-striped table-hover">
							<thead>
								<tr>
									<th>Date</th>
									<th>Contact Person</th>
									<th>Source</th>
									<th>Destination</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{fleets.map((fleet) => {
									return (
										<tr key={fleet._id}>
											{popUpFleet ? (
												<div className="view-fleet">
													<ViewFleet fleet={fleet} />
												</div>
											) : (
												<></>
											)}
											<td>{fleet.trip_creation_date}</td>
											<td>{fleet.contact_person}</td>
											<td>{fleet.source}</td>
											<td>{fleet.actual_destination}</td>
											<td>
												<a class="edit" data-toggle="modal">
													<i data-toggle="tooltip" title="Edit">
														&#xE254;
													</i>
												</a>
												<a class="delete" data-toggle="modal">
													<i
														class="material-icons"
														data-toggle="tooltip"
														title="Delete"
													>
														&#xE872;
													</i>
												</a>
												<button onClick={handleViewFleet} >View</button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
						<div class="clearfix">
							<div class="hint-text">
								Showing <b>5</b> out of <b>25</b> entries
							</div>
							<ul class="pagination">
								<li class="page-item disabled">
									<a href="#">Previous</a>
								</li>
								<li class="page-item active">
									<a href="#" class="page-link">
										1
									</a>
								</li>
								<li class="page-item">
									<a href="#" class="page-link">
										2
									</a>
								</li>
								<li class="page-item">
									<a href="#" class="page-link">
										3
									</a>
								</li>
								<li class="page-item">
									<a href="#" class="page-link">
										4
									</a>
								</li>
								<li class="page-item">
									<a href="#" class="page-link">
										5
									</a>
								</li>
								<li class="page-item">
									<a href="#" class="page-link">
										Next
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
