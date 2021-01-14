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
import CircularProgress from '@material-ui/core/CircularProgress';

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
  },
  progress:{
    margin: theme.spacing(2)
  }
});

class App extends Component{

  state = {
    customers: "",
    completed: 0
  }

  componentDidMount(){
    //timer를 이용하여 0.2초마다 prgress 함수 반복실행
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async() =>{
    const response = await fetch ('./api/customers');
    const body = await response.json();
    return body;
  }

  //for animation of prgress bar
  progress = () => {
    const {completed} = this.state;
    this.setState({completed: completed >= 100 ? 0 : completed + 1});
  }
  
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
            this.state.customers ? this.state.customers.map(c => {
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
            }) : 
            <TableRow>
              
              <TableCell colSpan = "6"//6개 열을 다 채우도록
               align = "center">
                 <CircularProgress className = {classes.progress} 
                 variant = "determinate" value = {this.state.completed}> 
                 </CircularProgress>
              </TableCell>
            </TableRow>
          }
          </TableBody>
        </Table>
    </Paper>
    );
  }
}

export default withStyles(styles)(App);
