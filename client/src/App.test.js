import React from 'react';
import ReactDOM from 'react-dom';
import {render} from "@testing-library/react";
import Header from "./components/Header";
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test(" Render Header", () => {
  const {getByText} = render(<Header />);
  getByText(/Women's world cup players/i);
})

test("Render darkmode", () => {
  const {getByTestId} =render(<Header />);
  getByTestId(/darkmodes/i);
})