import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import Home from './Pages/Home';
import Play from './Pages/Play';
import Blog from './Pages/Blog';
import Products from './Pages/Products';
import ProductDetail from './Pages/ProductDetail';
import FourOhFour from './Pages/FourOhFour';
import Nav from './Nav';
import { PageWrapper, Footer, theme, MobileLogo, ContentWrapper } from './Styles';
import { AppProvider } from './Services/AppProvider';
import ScrollToTop from './Components/ScrollToTop';
import EnfootLogo from './Icons/enfoot';

class App extends Component {
  render() {
    return (
      <AppProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <ScrollToTop>
              <PageWrapper>
                <MobileLogo> <EnfootLogo /> </MobileLogo>
                <Nav />
                <ContentWrapper>
                  <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/play" component={Play}></Route>
                    <Route exact path="/play" component={Products}></Route>
                    <Route exact path="/words" component={Blog}></Route>
                    <Route exact path="/products/:slug" component={ProductDetail}></Route>
                    <Route path="/products" component={Products}></Route>
                    <Route path="/" component={FourOhFour}></Route>
                  </Switch>
                </ContentWrapper>
                <Footer />
              </PageWrapper>
            </ScrollToTop>
          </Router>
        </ThemeProvider>
      </AppProvider>
    );
  }
}

export default App;