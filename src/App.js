import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./componets/Home/Home/Home";
import AddReview from "./componets/OrderPage/AddReview/AddReview";
import OrderList from "./componets/OrderPage/OrderList/OrderList";
import OrderPage from "./componets/OrderPage/Orderpage/OrderPage";
import Login from './componets/Login/Login'
import Admin from "./componets/Admin/Admin/Admin";
import AddService from "./componets/Admin/AddService/AddService";
import MakeAdmin from "./componets/Admin/MakeAdmin/MakeAdmin";
import PrivateRoute from "./componets/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <div>
      <Router>
         <Switch>
           <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/order">
              <OrderPage></OrderPage>
            </PrivateRoute>
            <PrivateRoute path="/OrderList">
              <OrderList></OrderList>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <AddReview></AddReview>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <Route path="/serviceList">
              <Admin></Admin>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
         </Switch>
      </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
