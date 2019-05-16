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
	getByText(/submit/i).click();
	expect(handleSubmit).toHaveBeenCalledTimes(1);
});
test("does not allow for submission if there are any empty fields",()=>{

})
test("saves data when previous and next buttons are pushed",()=>{

})
test("cycles to the next form element when previous and next buttons are pressed",()=>{

})