import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import Home from './Pages/Home';
import Play from './Pages/Play';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Products from './Pages/Products';
import ProductDetail from './Pages/ProductDetail';
import BlogDetail from './Pages/BlogDetail';
import FourOhFour from './Pages/FourOhFour';
import Nav from './Nav';
import Footer from './Footer';
import { PageWrapper, theme, MobileLogo, ContentWrapper } from './Styles';
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
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/words" component={Blog}></Route>
                    <Route exact path="/words/:slug" component={BlogDetail}></Route>
                    <Route exact path="/discover/category/:categorySlug" component={Products}></Route>
                    <Route exact path="/discover/:slug" component={ProductDetail}></Route>
                    <Route path="/discover" component={Products}></Route>
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
