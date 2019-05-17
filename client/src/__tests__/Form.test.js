import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../components/Form';
import {render,cleanup} from 'react-testing-library';
//import {renderIntoDocument,cleanup} from 'react-testing-library'
afterEach(cleanup);
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test("calls on submit function when submit button is pressed",()=>{
	const handleSubmit = jest.fn();
	const {getByLabelText, getByText} = render(
	    <Form submitForm={handleSubmit} />,
	  )
	getByLabelText(/feedtime/).value='1:00 pm';
	getByLabelText(/location/i).value='Victoria';
	getByLabelText(/quantity/i).value='6';
	getByText(/submit/i).click();
	expect(handleSubmit).toHaveBeenCalledTimes(1);
});