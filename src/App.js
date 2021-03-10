import React,{Component} from 'react';
import  ScrollToTop from  './Components/ScrollToTop/ScrollToTop';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import 'tachyons';
import About from './Components/About/About';
    import Services from './Components/About/Services/Services';
    import OurPeople from './Components/About/OurPeople/OurPeople';
    import Awards from './Components/About/Awards/Awards';
    import Hseq from  './Components/About/Hseq/Hseq';
    import OurValues from  './Components/About/OurValues/OurValues';
    import Csr from  './Components/About/Csr/Csr';
import Careers from './Components/Careers/Careers';
import Completed from './Components/Completed/Completed';
    
    import Completedone from './Components/Completed/Completedone/Completedone';
    import Completedtwo from './Components/Completed/Completedtwo/Completedtwo';
    import Completedthree from './Components/Completed/Completedthree/Completedthree';
    import Completedfour from './Components/Completed/Completedfour/Completedfour';
    import Completedfive from './Components/Completed/Completedfive/Completedfive';
    import Completedsix from './Components/Completed/Completedsix/Completedsix';
    import Completedseven from './Components/Completed/Completedseven/Completedseven';
    import Completedeight from './Components/Completed/Completedeight/Completedeight';
    import Completednine from './Components/Completed/Completednine/Completednine';
    import Completedten from './Components/Completed/Completedten/Completedten';
import Contact from './Components/Contact/Contact';
import Current from './Components/Current/Current';
    import Currentone from './Components/Current/Currentone/Currentone';
    import Currenttwo from './Components/Current/Currenttwo/Currenttwo';
    import Currentthree from './Components/Current/Currentthree/Currentthree';
    import Currentfour from './Components/Current/Currentfour/Currentfour'
import Home from './Components/Home/Home';
import Tenders from './Components/Tenders/Tenders';
import Navigation from './Components/Navigation/Navigation';
import SideNavbar from  './Components/SideNavbar/SideNavbar';
import BackDrop from './Components/BackDrop/BackDrop';



class App extends Component  {
   constructor(){
    super()
    this.state={
        sideBarOpen: false,
        route:'home'
    }
  }


    handleSidebarOpen = () =>{    
      this.setState({sideBarOpen:true})
    }

    handleSidebarClose = () =>{
      this.setState({sideBarOpen:false})
    }

    
  render(){

         return (
           <BrowserRouter>
              <ScrollToTop/>
                <Navigation open ={this.handleSidebarOpen}/>
                   {this.state.sideBarOpen 
                          ? (
                              <div>
                                <BackDrop close={this.handleSidebarClose}/>
                              </div>
                            )
                          : null

                      }
                <SideNavbar close={this.handleSidebarClose} sideBarOpen ={this.state.sideBarOpen} />
                <Switch>
                    <Route path="/about">
                      <About/>
                    </Route>
                        <Route path="/services">
                          <Services/>
                        </Route>  
                        <Route path="/ourpeople">
                          <OurPeople/>
                        </Route> 
                        <Route path="/awards">
                          <Awards/>
                        </Route> 
                         <Route path="/hseq">
                          <Hseq/>
                        </Route> 
                         <Route path="/ourvalues">
                          <OurValues/>
                        </Route> 
                         <Route path="/csr">
                          <Csr/>
                        </Route> 

                    <Route path="/careers">
                      <Careers/>
                    </Route>
                    <Route path="/completed">
                      <Completed/>
                    </Route>
                        
                        <Route  path="/completedone">
                          <Completedone/>
                        </Route>
                        <Route path="/completedtwo">
                          <Completedtwo/>
                        </Route>
                        <Route path="/completedthree">
                          <Completedthree/>
                        </Route>
                        <Route path="/completedfour">
                          <Completedfour/>
                        </Route>
                        <Route path="/completedfive">
                          <Completedfive/>
                        </Route>
                        <Route path="/completedsix">
                          <Completedsix/>
                        </Route>
                        <Route path="/completedseven">
                          <Completedseven/>
                        </Route>
                        <Route path="/completedeight">
                          <Completedeight/>
                        </Route>
                        <Route path="/completednine">
                          <Completednine/>
                        </Route>
                        <Route path="/completedten">
                          <Completedten/>
                        </Route>
                        
                    <Route path="/contact">
                      <Contact/>
                    </Route>
                    <Route path="/current">
                      <Current/>
                    </Route>
                         <Route path="/currentone">
                            <Currentone/>
                         </Route>
                         <Route path="/currenttwo">
                            <Currenttwo/>
                         </Route>
                         <Route path="/currentthree">
                            <Currentthree/>
                         </Route>
                         <Route path="/currentfour">
                            <Currentfour/>
                         </Route>
                    <Route exact path="/">
                      <Home/>
                    </Route>
                    <Route path="/tenders">
                      <Tenders/>
                    </Route>
                </Switch>
           </BrowserRouter>
  );

  }


 
}

export default App;
