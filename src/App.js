import './App.css';
import { Component } from 'react';
import Customer from './components/customer';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '훌랄라',
  'birthday': '961222',
  'gender': '여자',
  'job': '대학생'
}, 
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '하이하이',
  'birthday': '971102',
  'gender': '여자',
  'job': '의사'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '헬로우',
  'birthday': '920312',
  'gender': '남자',
  'job': '승무원'
}
]

class App extends Component{
  render(){
    return (
      <div>
        {
          customers.map(c => {
            return( 
              <Customer
                key = {c.id}
                id = {c.id}
                image = {c.image}
                name = {c.name}
                birthday = {c.birthday}
                gender = {c.gender}
                job = {c.job}
              ></Customer>
            )
          })
        }
    </div>
    );
  }
}

export default App;
