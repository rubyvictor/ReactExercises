import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import isEmpty from 'lodash';

function MyComponent() {
  return (
    <div className="book">
      <div className="title">The Title</div>
      <div className="author">The Author</div>
      <ul className="stats">
        <li className="rating">5 stars</li>
        <li className="isbn">12-388880-910</li>
      </ul>
    </div>
  );
}

function AnotherWayComponent() {
  return React.createElement(
    'div',
    { className: 'book' },
    React.createElement('div', { className: 'title' }, 'The Title'),
    React.createElement('div', { className: 'author' }, 'The Author'),
    React.createElement(
      'ul',
      { className: 'stats' },
      React.createElement('li', { className: 'rating' }, '5 stars'),
      React.createElement('li', { className: 'isbn' }, '12-388880-910')
    )
  );
}

function Greeting() {
  var username = 'Victor';
  // try undefine, null, true,
  return (
    <span>
      {username && !username.isEmpty ? 'Hello ' + username : 'Not logged in.'}
    </span>
  );
}

function Table() {
  return (
    <Data />
  );
}

function Data() {
  return (
    <Fragment>
        <td>data 1</td>
        <td>data 2</td>
        <td>data 3</td>
    </Fragment>
  )
}

ReactDOM.render(<Table />, document.getElementById('root'));
