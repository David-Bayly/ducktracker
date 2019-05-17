import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../components/Form';
import {render,cleanup,fireEvent} from 'react-testing-library';
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

test("Can add multiple food entries by clicking the add button",()=>{
	const {getAllByText,getByText}=render(<Form/>);
	fireEvent.click(getByText('Add Food Entry'));
	//count all close buttons
	expect(getAllByText("X")).toHaveLength(1);
})

test("Can remove food entries after they have been added",()=>{
	const {getAllByText,getByText}=render(<Form/>);
	fireEvent.click(getByText('Add Food Entry'));
	//count all close buttons
	fireEvent.click(getByText('Add Food Entry'));
	expect(getAllByText("X")).toHaveLength(2);
	fireEvent.click(getByText('X'));
	expect(getAllByText("X")).toHaveLength(1);
	fireEvent.click(getByText('X'));
	expect(getAllByText("X")).toHaveLength(0);
})