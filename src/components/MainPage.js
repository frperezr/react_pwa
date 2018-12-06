import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import Header from './Header';
import ErrorBoundry from './ErrorBoundry';

export default class MainPage extends Component {
  componentDidMount() {
    const { onRequestRobots } = this.props;
    onRequestRobots();
  }

  filterRobots = () => {
    const { searchField, robots } = this.props;
    return robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
  };

  render() {
    const { onSearchChange, robots, isPending } = this.props;
    if (isPending) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={this.filterRobots(robots)} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}
