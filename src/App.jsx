import React from "react";
import { Provider } from "react-redux";

import { store } from "./store";
import Section from "./components/Section";
import SliderSection from "./containers/SliderSection";
import TermsSection from "./containers/TermsSection";
import PaymentPlansSection from "./containers/PaymentPlansSection";

import "./styles/styles.css";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Section bgColor={"#fcfcfc"}>
          <SliderSection />
          <TermsSection />
        </Section>
        <Section>
          <PaymentPlansSection />
        </Section>
      </Provider>
    );
  }
}

export default App;
