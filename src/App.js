import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomeSell from "./pages/HomeSell/HomeSell";
import HomeBuy from "./pages/HomeBuy/HomeBuy";
import Upload from "./pages/Upload/Upload";
import Results from "./pages/Results/Results";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect from="/" exact to="/home-sell" />
        <Route path="/home-sell" exact component={HomeSell} />
        <Route path="/home-buy" component={HomeBuy} />
        <Route path="/upload" component={Upload} />
        <Route path="/results" component={Results} />
      </Switch>
    </div>
  );
}

export default App;
