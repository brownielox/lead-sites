import React, { Component } from 'react';
import Heading from './Heading'


class About extends Component{
  render(){
       return(
        <div className="App">
         <Heading />
         <p>
         Philadelphia's Fishtown neighborhood is a fast-growing neighborhood.
         <br/>Unfortunately, it's also home to many former lead smelting sites, and the levels of lead in the soil in the area are dangerously high, especially for children.
         <br/>This app provides a convenient way to find your home, school, or playground's distance from the former smelting sites in Philadelphia.
         <br/>Source: <a href="http://www.philly.com/philly/news/special_packages/toxic-city/philadelphia-lead-soil-fishtown-construction-dust.html">The Philadelphia Inquirer</a>
         </p>
        </div>
  )}
}
export default About;
