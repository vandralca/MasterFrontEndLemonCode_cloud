import React from "react";
import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AppContextProvider } from "contexts/app.context";
import { PictureInfoVm } from "models/vm";
import { MainPage } from "pages/main";
import { CheckoutPage } from "pages/checkout";
import { switchRouting } from "core/routing";

const App: React.FC = () => {
    const [cartElementsCollection, setCartElementsCollection] = React.useState<PictureInfoVm[]>([]);

    return (
        <AppContextProvider
            cartElements={cartElementsCollection}
            setCartElements={setCartElementsCollection}>
            <Router>
                <Switch>
                    <Route exact={true} path={switchRouting.gallery} component={MainPage} />
                    <Route exact={true} path={switchRouting.checkout} component={CheckoutPage} />
                    <Redirect to={switchRouting.gallery} />
                </Switch>
            </Router>
        </AppContextProvider >
    );
};

export default hot(App);
