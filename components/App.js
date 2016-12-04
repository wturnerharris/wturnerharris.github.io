import React, { PropTypes } from 'react';
import Nav from './Nav';

export default class App extends React.Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    routes: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      mainTitle: "#WesAndJamboree2017",
      menuState: "open"
    };
  }

  MenuToggle(){
    let nav = document.getElementById('Navigation');
    let nextMenuState = this.state.menuState === 'closed' ? 'open' : 'closed';
    this.setState({menuState: nextMenuState});
    nav.className = this.state.menuState;
  }

  render() {
    let navState = (this.props.location.pathname !== '/') ? "black" : "white";
    return (
      <div className="wrapper">
        <header id="Header" className={navState}>
          <h1>{this.state.mainTitle}</h1>
          <button onClick={this.MenuToggle.bind(this)}>Menu</button>
          <nav id="Navigation" onClick={this.MenuToggle.bind(this)}>
            <ul>
              <li><Nav to="/">Deets</Nav></li>
              <li><Nav to="/dress">Dress</Nav></li>
              <li><Nav to="/resources">Resources</Nav></li>
              <li><Nav to="/registry">Registry</Nav></li>
              <li><Nav to="/see-hear-do">See-Hear-Do</Nav></li>
              <li><Nav to="/next-day-brunch">Next-Day Brunch</Nav></li>
            </ul>
          </nav>
        </header>
        <main id="Body">
          {this.props.children}
        </main>
      </div>
    );
  }
}
