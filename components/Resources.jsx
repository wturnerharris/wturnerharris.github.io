import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  location: PropTypes.object.isRequired,
};

function Resources({ location }) {
  const airbnb = "https://www.airbnb.com/s/New-York--NY--United-States?guests=1&checkin=06%2F08%2F2017&checkout=06%2F12%2F2017&source=bb&page=1&allow_override%5B%5D=&place_id=ChIJOwg_06VPwokRYv534QaPC8g&ne_lat=40.88316270421261&ne_lng=-73.87969342983223&sw_lat=40.747661924014125&sw_lng=-74.01908246791817&zoom=12&search_by_map=true&ss_id=14nr3wvg&s_tag=k9xqGDTT";
  const otherAirbnb = "https://techboomers.com/t/sites-like-airbnb";
  const hilton = "http://hiltongardeninn3.hilton.com/en/hotels/new-york/hilton-garden-inn-times-square-NYCMWGI/index.html";
  const mta = "http://www.mta.info/";
  const uber = "https://www.uber.com/?exp=home_signup_form";
  const arro = "https://www.goarro.com/";
  const zipcar = "http://www.zipcar.com/";
  const lyft = "https://www.lyft.com/";
  const hotels = "https://www.hotels.com/search.do?resolved-location=CITY%3A1506246%3AUNKNOWN%3AUNKNOWN&destination-id=1506246&q-destination=New%20York,%20New%20York,%20United%20States%20of%20America&q-check-in=2017-06-08&q-check-out=2017-06-12&q-rooms=1&q-room-0-adults=2&q-room-0-children=0";

  return (
    <section id="Resources" className="fullscreen page">
      <h1 className="h1">Resources</h1>
      <p>Below are some of the recommended resources to help find your way and stay in New York City.</p>
      <h2 className="h2">Accommodations</h2>
      <p>NYC has a number of hotels. You can choose a more millenial stay with AirBnb or alternatives, or you can go Ritzy with any of the many traditional Hotels.</p>
      <p><a href={airbnb}>AirBnB</a> - Like staying at someone elses home.</p>
      <p>Other <a href={otherAirbnb}>options</a> similar to AirBnb exist, but we have never tried them.</p>
    <p>Traditional hotels like <a href={hilton}>Hilton Garden Inn</a> (same building as our venue) or countless other <a href={hotels}>hotels</a> exist.</p>
    
      <h2 className="h2">Transportation</h2>
      <p>We mostly take the Subway here, but there are other ways to get around.</p> 
      <p>NYC <a href={mta}>MTA</a> Subway - You can get transit cards in any Subway station.</p>
      <p>Cabs, <a href={uber}>Uber</a>, <a href={lyft}>Lyft</a> - There are a number of millenium-type web apps for getting around. We mostly use Uber, but you can find other <a href={arro}>apps</a> for the yellow cabs or just hail one on the street.</p>
      <p><a href={zipcar}>ZipCar</a> - you will need already have an account, but you can rent a car by the hour.</p>
      <p>Traditional - Of course there is Hertz, Enterprise, and others.</p>
    </section>
  );
}

Resources.propTypes = propTypes;

export default Resources;
