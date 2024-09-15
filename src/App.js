import "./App.css"
import HomePage from "./home/HomePage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/watch/SinglePage"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import HomeCard from "./components/homes/HomeCard"
import Homes from "./components/homes/Homes"
import Home from "./components/homes/Home"
import { trending } from "./dummyData"
import Trending from "./components/trending/Trending"
import Ucard from "./components/upcoming/Ucard"
import Upcomming from "./components/upcoming/Upcomming"
    
    function App() {
      return (
        <>
          <Router>
            <Header />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/series' component={Trending} />

              {/* <Route  path='/singlepage/:id' component={SinglePage} exact/> */}
              </Switch>
            <Footer />
          </Router>
        </>
      )
    }
    

export default App

