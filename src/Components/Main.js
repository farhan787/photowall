import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import PhotoWall from './PhotoWall';
import Title from './Title';
import AddPhoto from './AddPhoto';

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>
          <Link exact to="/">
            <Title title={'PhotoWall'} />
          </Link>
        </h1>

        <Route
          exact
          path="/"
          render={() => (
            <div>
              <PhotoWall {...this.props} />
            </div>
          )}
        />

        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />
      </div>
    );
  }
}

export default Main;
