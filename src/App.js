import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav.js";
import Home from "./Components/Home/Home.js";
import Dashboard from "./Components/Dashboard/Dashboard.js";
import Exercises from "./Components/Exercises/Exercises.js";
import RepCounter from "./Components/RepCounter/RepCounter.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Components/theme.js";
import Footer from './Components/Footer/Footer.js';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Nav />
          <div className="Container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Exercises" component={Exercises} />
              <Route path="/RepCounter" component={RepCounter} />
              <Route path="/Dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}




// const Home = () => {
//   return (
//     <div className="Home">
//       <h1>Welcome to the Home Page</h1>
//       <div className="MainBody">
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum
//         </p>
//       </div>
//       <CardDeck>
//         <Card>
//           <Card.Img variant="top" src="https://via.placeholder.com/350x150" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>This is the main body of the card</Card.Text>
//             <Button variant="primary">Go somewhere</Button>{" "}
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>

//         <Card>
//           <Card.Img variant="top" src="https://via.placeholder.com/350x150" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>This is the main body of the card</Card.Text>
//             <Button variant="primary">Go somewhere</Button>{" "}
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>

//         <Card>
//           <Card.Img variant="top" src="https://via.placeholder.com/350x150" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>This is the main body of the card</Card.Text>
//             <Button variant="primary">Go somewhere</Button>{" "}
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>

//         <Card>
//           <Card.Img variant="top" src="https://via.placeholder.com/350x150" />
//           <Card.Body>
//             <Card.Title>Card title</Card.Title>
//             <Card.Text>This is the main body of the card</Card.Text>
//             <Button variant="primary">Go somewhere</Button>{" "}
//           </Card.Body>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//       </CardDeck>
//       <Footer />
//     </div>
//   );
// };

export default App;
