import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element,
};

function Dress({ children }) {
  return (
    <div>
      <p>
        This is an example page. Refresh the page or copy/paste the url to
        test out the redirect functionality (this same page should load
        after the redirect).
      </p>
      {children ||
        <div><Link to="/example/two-deep?field1=foo&field2=bar#boom!">
          Example two deep with query and hash
        </Link></div>}
    </div>
  );
}

Dress.propTypes = propTypes;

export default Dress;
