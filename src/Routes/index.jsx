import { Route, Switch } from "react-router-dom"

import Home from "../Pages/Home"
import Signup from "../Pages/Signup"
import Login from "../Pages/Login"

const Routes = () => {

    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/signup">
                <Signup/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
        </Switch>
    )
}

export default Routes