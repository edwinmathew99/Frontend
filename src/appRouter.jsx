import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ViewInvent from './Components/User/viewInventory';
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
import Header from "./Components/Core/header";
import notFound from "./Components/Core/notFound";
import buyMeds from "./Components/User/buyMeds";


import CartDisplay from "./Components/User/cartDisplay";
import ViewSupplier from "./Components/User/viewsupplier";
import ViewEmpty from "./Components/User/emptystock"
import ViewRemStocks from "./Components/User/viewremstocks";
import AddInvent from './Components/User/addinventory';
import ViewSales from "./Components/User/viewSaleData";

const AppRouter = (
    <>
        <Provider store={store}>

            <Router>
                <Header></Header>
                <Switch>

                    <Route exact path="/displayInventory" component={ViewInvent} />
                    <Route exact path="/displaysupplier" component={ViewSupplier} />
                    <Route exact path="/displayempstocks" component={ViewEmpty} />
                    <Route exact path="/displaysoldmeds" component={ViewSales} />
                    <Route exact path="/displayremstocks" component={ViewRemStocks} />
                    <Route exact path="/addinventory" component={AddInvent} />
                   

                    
                    
                    <Route exact path="/medicineSale" component={buyMeds} />
                    <Route exact path="/cartdisplay" component={CartDisplay} />

                   
                   

                    <Route exact component={notFound} />
                </Switch>

            </Router>
        </Provider>


    </>
)

export default AppRouter;