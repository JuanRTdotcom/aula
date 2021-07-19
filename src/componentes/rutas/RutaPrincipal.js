import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../estaticos/Footer";
import Home from "../estaticos/Home";
import MenuHeader from "../estaticos/MenuHeader";
import Programas from "../estaticos/Programas";

export default function Rutas() {
    return (
        <>
            <Router >
                <MenuHeader />                    
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/Programas" component={Programas}/>
                        {/* <Route exact path="/Programas" component={menuHeader}/> */}
                        
                    </Switch>
                <Footer/>
            </Router>
        </>
    )
}