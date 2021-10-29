import "./App.css";
import Home from "./pages/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./pages/Shared/Header/Header";
import Footer from "./pages/Shared/Footer/Footer";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
