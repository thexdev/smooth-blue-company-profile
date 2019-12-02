import React, { memo, Fragment, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const NavigationBar = lazy(() => import("components/navbar"));
const ContactForm = lazy(() => import("components/contact-form"));
const Footer = lazy(() => import("components/footer"));

const Home = lazy(() => import("pages/home"));
const About = lazy(() => import("pages/about"));
const Team = lazy(() => import("pages/teams"));
const Services = lazy(() => import("pages/services"));
const Clients = lazy(() => import("pages/clients"));

export default memo(() => (
  <Fragment>
    <Router>
      <Suspense fallback={<div>loading. . .</div>}>
        <NavigationBar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/teams" component={Team}></Route>
            <Route exact path="/services" component={Services}></Route>
            <Route exact path="/clients" component={Clients}></Route>
            <Route exact path="/contact" component={ContactForm}></Route>
          </Switch>
        </main>
        <Footer />
      </Suspense>
    </Router>
  </Fragment>
));
