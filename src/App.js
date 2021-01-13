import './App.css';
import { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Customer from './components/customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table:{
    minWidth: 1080
  },
  font:{
    fontWeight: 600,
    color: 'purple'
  }
})

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
    const {classes} = this.props;
    console.log({classes});
    return (
      <Paper className = {classes.root}>
        <Table className = {classes.table}>   
          <TableHead>
            <TableRow>
              <TableCell className = {classes.font}>번호</TableCell>
              <TableCell className = {classes.font}>이미지</TableCell>
              <TableCell className = {classes.font}>이름</TableCell>
              <TableCell className = {classes.font}>생년월일</TableCell>
              <TableCell className = {classes.font}>성별</TableCell>
              <TableCell className = {classes.font}>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>     
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
          </TableBody>
        </Table>
    </Paper>
    );
  }
}

export default withStyles(styles)(App);
