import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import About from "./screens/About";
import Services from "./screens/Services";
import Blog from "./screens/Blog";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import AddSlider from "./screens/admin/AddSlider";
import AddFeature from "./screens/admin/AddFeature";
import Footer from "./components/Footer";
import AllSliders from "./screens/admin/AllSliders";
import EditSlider from "./screens/admin/EditSlider";
import AllFeatures from "./screens/admin/AllFeatures";
import EditFeature from "./screens/admin/EditFeature";

function App() {
  const location = useLocation();
  const path = location.pathname;
  const [display] = useState(path.startsWith("/admin/") ? true : false);

  return (
    <div>
      {!display && <Header />}
      <Switch>
        <Route path="/admin/addSlider" component={AddSlider} />
        <Route path="/admin/allSliders" component={AllSliders} />
        <Route path="/admin/editSlider/:id" component={EditSlider} />

        <Route path="/admin/addFeature" component={AddFeature} />
        <Route path="/admin/allFeatures" component={AllFeatures} />
        <Route path="/admin/editFeature/:id" component={EditFeature} />

        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Home} />
      </Switch>
      {!display && <Footer />}
    </div>
  );
}

export default App;
