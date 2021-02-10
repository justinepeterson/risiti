import Home from "./components/home/Home";
import EditFleet from "./components/Edit/Editfleet";
import AddFleets from "./components/add/AddFleets";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					{/* <Route path="/edit" component={EditFleet} /> */}
					<Route path="/add" component={AddFleets} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
