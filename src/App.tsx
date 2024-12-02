import { Switch, Route } from "wouter";
import Index from "./pages/Index";
import type { RouteProps } from "wouter";
import Autos from "./pages/Autos";

const routes: RouteProps[] = [
    {
        path: "/",
        component: Index
    },
    {
        path: "/autos-nuevos",
        component: Autos
    },
    {
        path: "/autos-usados",
        component: Autos
    }
];

function App() {
    return (
        <Switch>
            {routes.map((r, key) => <Route {...r} key={key}></Route>)}
        </Switch>
    )
}

export default App
