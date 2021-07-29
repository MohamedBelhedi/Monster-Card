import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list.component';
import { render } from '@testing-library/react';
import {SearchBox}from'./components/searchbox/searchbox.component'


class App extends Component{
  constructor(){
  super();
  this.state={
    monster:[
      // {
      //   name:'Kaouthar Radhwa',
      //   id:'x1'

        
      // },
      // {
      //   name:'Nindita Farah Sasmaya',
      //   id:'x2'
        
      // },
      // {
      //   name:'Mohamed ',
      //   id:'x2'

        
      // }
    ],
    searchField:''

  };

  // this.handleChange=this.handleChange.bind(this)

}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(users=>this.setState({monster:users})
  );
}

handleChange=(e)=>{
  this.setState({searchField:e.target.value});
  
}
render() {
  const {monster,searchField }=this.state;
  const filteredMonster=monster.filter(monster=>
    monster.name.toLowerCase().includes(searchField.toLowerCase()))
  // const monsters=this.state.monster;
  // const searchField=this.state.searchField;
  return (
    <div className="App">
      <h1 className="title">Monster Infokarten</h1>
     
        <SearchBox
        
        placeholder="suche Monster"
        handleChange={this.handleChange} 
         />
    <CardList monster={filteredMonster}>

    </CardList>
   
    </div>
  );
}
}

export default App;
