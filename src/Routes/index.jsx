import { Route, Switch } from "react-router-dom"

import Home from "../Pages/Home"

const Routes = () => {

    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
        </Switch>
    )
}

export default Routes