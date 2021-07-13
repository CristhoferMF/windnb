import { Route,Switch } from "wouter";
import Search from "./Pages/Search";

function App() {
  return (
    <Switch>
      <Route path="/" component={Search}/>
    </Switch>
  );
}

export default App;
