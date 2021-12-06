import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Detail from "./components/Detail"
import CreateRecipe from "./components/CreateRecipe.jsx"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/detail/:id" component ={Detail}/>
          <Route exact path="/recipe" component ={CreateRecipe}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
