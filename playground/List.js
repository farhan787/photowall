import React, { Component } from 'react';

class List extends Component {
  render() {
    return (
      <ol>
        {this.props.listItems.map((listItem, index) => (
          <li key={index}>{listItem}</li>
        ))}
      </ol>
    );
  }
}

export default List;
