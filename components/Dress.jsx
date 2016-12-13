import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element,
};

function Dress({ children }) {
  return (
    <section id="Dress" className="fullscreen page">
      <h1 className="h1">Dress Code</h1>
      <h2 className="h2">What to Wear</h2>
      <p>
        The theme of the wedding is "Date Night" in NYC. It’s cocktail attire that makes you feel sexy and that you would wear on a date in New York City. Keep in mind, it is a wedding. White dresses are prohibited.
      </p>
      <h2 className="h2">Pinterest</h2>
      <p> If you are unsure what might be appropriate, please check out our <a href="https://www.pinterest.com/jamelazarha/dress-code/" target="_blank" rel="noopener noreferrer">pinterest</a> board with inspiration for what to wear on our special night out.</p>
    </section>
  );
}

Dress.propTypes = propTypes;

export default Dress;
