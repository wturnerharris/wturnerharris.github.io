import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  location: PropTypes.object.isRequired,
};

function Registry({ location }) {
  const theknot = "https://registry.theknot.com/wesley-turner-harris-jamela-williams-june-2017-ny/15318432";
  const target = "http://www.target.com/gift-registry/giftgiver?registryId=9ilRGKmB6Uxfl5AHzzDD9A";
  const bbb = "https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?eventType=Wedding&inventoryCallEnabled=true&registryId=543969976";
  const amazon = "https://www.amazon.com/wedding/wesley-turner-harris-jamela-williams-new-york-june-2017/registry/2CT7N4FH9XX5T";
  const cb1 = "http://www.crateandbarrel.com/gift-registry/jamela-williams-and-wesley-turner-harris/r5616507";

  return (
    <section id="Registry" className="fullscreen page">
      <h1 className="h1">Registry</h1>
      <p>Want to contribute to our wedding registry? We have signed up on some popular sites.</p>
      <h2 className="h2">More Info</h2>
      <p>You can visit any of the below registries, or visit <a href={theknot} target="_blank" rel="noopener noreferrer">theknot.com</a> to see our entire wish-list on one page!</p>
      <p><a href={target} target="_blank" rel="noopener noreferrer">Target</a></p>
      <p><a href={amazon} target="_blank" rel="noopener noreferrer">Amazon</a></p>
      <p><a href={bbb} target="_blank" rel="noopener noreferrer">Bed Bath & Beyond</a></p>
      <p><a href={cb1} target="_blank" rel="noopener noreferrer">Crate & Barrel</a></p>
    </section>
  );
}

Registry.propTypes = propTypes;

export default Registry;
