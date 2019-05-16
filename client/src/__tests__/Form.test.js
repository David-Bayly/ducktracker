import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../components/Form';
import {renderIntoDocument,cleanup} from 'react-testing-library';
afterEach(cleanup);
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
  ReactDOM.unmountComponentAtNode(div);
});

