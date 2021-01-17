import { render, screen } from '@testing-library/react';
import App from './App';
import { Home } from './pages/Home'
import { Topmovies } from './pages/Topmovies'
import { SearchMovies } from './pages/SearchMovies'
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
//import ReactDOM from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from "react";
import { shallow } from 'enzyme';
import $ from 'jquery';



Enzyme.configure({ adapter: new Adapter() });

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
 
//Testing Home router
test('invalid path should redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/random' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(Home)).toHaveLength(0);
});

test('valid path should not redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(Home)).toHaveLength(1);
});

//Testing Topmovies router
test('invalid path should redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/random' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(Topmovies)).toHaveLength(0);
});

test('valid path should not redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/topmovies' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(Topmovies)).toHaveLength(1);
});

//Testing SearchMovies router 
test('invalid path should redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/random' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(SearchMovies)).toHaveLength(0);
 
});

test('valid path should not redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/searchmovies' ]}>
      <App/>
    </MemoryRouter>
  );
  expect(wrapper.find(SearchMovies)).toHaveLength(1);
 
});

