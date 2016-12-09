import React from 'react';
import { Link } from 'react-router';

function Home() {
  const data = {
    "bride" : ['Jamela','Williams'],
    "groom" : ['Wesley','Turner-Harris'],
    "invite" : [
      'invite you to',
      'celebrate their marriage',
      'saturday, june 10, 2017',
      'at seven in the evening'
    ],
    "location" : [
      'new york, ny'
    ]
  };

  return (
    <section id="SaveTheDate" className="fullscreen">
      <p>
        <span className="bride first">{data.bride[0]}</span><br/>
        <span className="bride second">{data.bride[1]}</span><br/>
        <span className="amp">&</span><br/>
        <span className="groom first">{data.groom[0]}</span><br/>
        <span className="groom second">{data.groom[1]}</span><br/>
        <br/>
        <span className="invite">{data.invite[0]}</span><br/>
        <span className="invite">{data.invite[1]}</span><br/>
        <span className="invite">{data.invite[2]}</span><br/>
        <span className="invite">{data.invite[3]}</span><br/>
        <br/>
        <br/>
        <span className="location">{data.location[0]}</span><br/>
      </p>
    </section>
  );
}

export default Home;
