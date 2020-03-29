import React from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name' : '한글이름',
  'birthday' : '20200109',
  'gender': 'men',
  'job': 'developer',
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name' : '2배열 이름',
  'birthday' : '20200109',
  'gender': 'men',
  'job': 'developer',
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name' : '3배열 이름',
  'birthday' : '20200109',
  'gender': 'men',
  'job': '그냥 직업',
}
]


function App() {
  return (
    <div>
      {

        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender = {c.gender}
              job= {c.job}
            />
          );
        })

      }
    </div>
  );
}

export default App;
