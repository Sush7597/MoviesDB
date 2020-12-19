import './App.css'
import store from "./store";
import {Provider} from 'react-redux'
import Navbar from './Components/layout/Navbar'
import Footer from './Components/layout/Footer'
import Landing from './Components/home/Landing'
import Movie from './Components/home/Movie'
import {HashRouter as Router, Route} from 'react-router-dom'
function App() {
  return (
    <Provider store = {store} >
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path = "/" component = {Landing} />
          <Route exact path = "/movie/:id" component = {Movie} />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;