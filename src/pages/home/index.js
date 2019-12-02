import React, { memo, Fragment, lazy } from "react";

const Hero = lazy(() => import("components/hero"));
const About = lazy(() => import("components/about"));
const Teams = lazy(() => import("components/teams"));
const Services = lazy(() => import("components/services"));
const Products = lazy(() => import("components/products"));
const Clients = lazy(() => import("components/clients"));
const Showcase = lazy(() => import("components/showcase"));
const ContactForm = lazy(() => import("components/contact-form"));

export default memo(() => (
  <Fragment>
    <Hero />
    <About />
    <Teams />
    <Services />
    <Products />
    <Clients />
    <Showcase />
    <ContactForm />
  </Fragment>
));
