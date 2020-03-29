import React from 'react';
import Customer from './components/Customer';
import './App.css';

const customer = {
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name' : '한글이름',
  'birthday' : '20200109',
  'gender': 'men',
  'job': 'developer',
}


function App() {
  return (
    <Customer
      id = {customer.id}
      image = {customer.image}
      name = {customer.name}
      birthday = {customer.birthday}
      gender = {customer.gender}
      job = {customer.job}
    />
  );
}

export default App;
