import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home.jsx";
import Contact from './components/Contact';
import About from './components/About';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import AddUser from "./components/Adduser";

function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route  exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/AddUser" component={AddUser}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


