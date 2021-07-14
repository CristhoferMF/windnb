import { useEffect } from "react";
import { Route,Router,useLocation } from "wouter";
import Search from "./Pages/Search";

function App() {
  const [location,setLocation] = useLocation();

  useEffect(() => {
    if(location === "/"){
      setLocation('/Finland/g/0/0')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Router>
      <Route path="/:location/g/:adults/:children" component={Search}/>
    </Router>
  );
}

export default App;
