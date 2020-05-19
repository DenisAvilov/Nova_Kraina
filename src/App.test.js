import React from 'react';
import ReactDOM from 'react-dom'
import NovaKraina from './App';


test('renders witout crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<NovaKraina />, div) 
  ReactDOM.unmountComponentAtNode(div);
});
