import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

function App({ children, routes }) {
  const mainTitle = "#WesAndJamboree2017";
  
  function MenuToggle(){
    let nav = document.getElementById('Navigation');
    nav.className = nav.className === "closed" ? "open" : "closed";
  }

  return (
    <div className="wrapper">
      <header id="Header">
        <h1>{mainTitle}</h1>
        <button onClick={MenuToggle}>Menu</button>
        <nav id="Navigation" className="closed">
          <ul>
            <li><a href="/">Deets</a></li>
            <li><a href="/dress">Dress</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/registry">Registry</a></li>
            <li><a href="/see-hear-do">See-Hear-Do</a></li>
            <li><a href="/next-day-brunch">Next-Day Brunch</a></li>
          </ul>
        </nav>
      </header>
      <main id="Body">
        {children}
      </main>
    </div>
  );
}

App.propTypes = propTypes;

export default App;
