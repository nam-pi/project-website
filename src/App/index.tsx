import { Route, Router, Switch } from "react-router";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { NoMatch } from "./components/NoMatch";
import { Person } from "./components/Person";
import { Persons } from "./components/Persons";
import { HISTORY } from "./constants";

export const App = () => {
  return (
    <Router history={HISTORY}>
      <div className="text-gray-800">
        <Navbar />
        <div className="m-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/persons" component={Persons} />
            <Route exact path="/person/:idLocal" component={Person} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
