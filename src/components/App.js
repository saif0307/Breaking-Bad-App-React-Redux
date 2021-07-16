import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from './history'
import Characters from "./routes/Characters";
import Deaths from "./routes/Deaths";
import Quotes from "./routes/Quotes";
import Episodes from "./routes/Episodes";
import CharacterDetails from './routes/CharacterDetails'
import Header from "./Header";
import Modal from './Modal'

const App = () => {
  return (<div className="ui container">
          <Router history={history} >
          <Header/>
          <br/>
      <Switch>
        <Route exact path="/" component={Characters} />
        <Route exact path="/episodes" component={Episodes} />
        <Route exact path="/deaths" component={Deaths} />
        <Route exact path="/quotes" component={Quotes} />
        <Route exact path="/characterdetails/:id" component={CharacterDetails} />
        <Route exact  path="/episodes/modal/:id" component={Modal}/>
      </Switch>
    </Router>
    </div>
  );
  

};

export default App;
