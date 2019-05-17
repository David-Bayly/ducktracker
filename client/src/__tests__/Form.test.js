import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../components/Form';
import {render,cleanup,fireEvent,waitForElement,wait} from 'react-testing-library';
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

test("Can add multiple food entries by clicking the add food entry button",async()=>{
	const {getAllByText,getByLabelText,getByText}=render(<Form/>);
	//Select Food type
	const foodType= getByLabelText("Food Type");
	const addButton = getByText("Add Food Entry");
	fireEvent.change(foodType,{target:{value:"corn"}});
	fireEvent.click(addButton);
	expect(getAllByText("X")).toHaveLength(1);
	fireEvent.click(addButton);
	fireEvent.click(addButton);
	expect(getAllByText("X")).toHaveLength(3);
})

test("Can remove food entries after they have been added",()=>{
	const {getAllByText,getByLabelText,getByText}=render(<Form/>);
	//Select Food type
	const foodType= getByLabelText("Food Type");
	const addButton = getByText("Add Food Entry");
	fireEvent.change(foodType,{target:{value:"corn"}});
	fireEvent.click(addButton);
	fireEvent.click(addButton);
	fireEvent.click(addButton);
	expect(getAllByText("X")).toHaveLength(3);
	let removeButtons = getAllByText("X");
	fireEvent.click(removeButtons[0]);
	expect(getAllByText("X")).toHaveLength(2);
	removeButtons = getAllByText("X");
	fireEvent.click(removeButtons[0]);
	expect(getAllByText("X")).toHaveLength(1);
})
test("Can have multiple different values for food types",()=>{

})