import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <h1 className="text-8xl font-bold text-purple-700 uppercase"> Hats Page</h1>
);

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/shop/hats" component={HatsPage}></Route>
    </Router>
  );
}

export default App;
