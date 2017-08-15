import React from 'react';
import { Component } from 'react';

import FruitBasket from './FruitBasket';
class App extends Component {
  constructor() {
    super();

    this.state = {
    
      fruit: [],
      filters: [],
      currentFilter: null
    };

    this.fetchFilters = this.fetchFilters.bind(this);
    this.updateItems = this.updateItems.bind(this);

  }

  componentWillMount() {
    this.fetchFilters();
    this.updateItems();
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters: filters }));
    console.log(this.state.filters)
  }
 

  updateItems = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit: fruit }));
  }


   handleFilterChange(event) {    
    
    this.setState({ currentFilter: event.target.value });

  }



  render() {
    return (
      <FruitBasket
          fruit = {this.state.fruit}
          filters = {this.state.filters}
          currentFilter = {this.state.currentFilter}
          updateFilter = {this.updateFilter}
      />

    ); 
  }
}

export default App;
