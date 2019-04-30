import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [
    {id: '1', name: 'Mom', age: 45},
    {id: '2', name: 'Dad', age: 55},
    {id: '3', name: 'sis', age: 24}
    ],
    showPersons: false
}

inputHandler = (event, id) => {
    
  const personsIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  } );
  const person = {
    ...this.state.persons[personsIndex]
  };

  person.name = event.target.value;

  const persons = [
    ...this.state.persons
  ]
    
     persons[personsIndex] = person;



  this.setState({
    persons: persons
  }
  )
}
toogleHandler = () => {
const doesShow = this.state.showPersons;
this.setState({
  showPersons: !doesShow
})

}
deletePersons = (personIndex) => {
  // const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons: persons})
}

  render() {
    const style = {
      backgroundColor: 'green',
       font: 'inherit',
      padding: '8px',
      cursor: 'pointer',
      border: '1px solid blue',
    
    }
    let show = null;
    if(this.state.showPersons){
      show =(
      <div>
        {this.state.persons.map((person, index)  =>{
          return <Person
          changed={(event) => this.inputHandler(event, person.id)}
          key={person.id}
          click={() => this.deletePersons(index)} 
          name={person.name} age={person.age}/>
        })
        
        }
      </div>
      ); 
      style.backgroundColor= 'red';
      
    }
    const classes = []
    if(this.state.persons.length<=2){
       classes.push('red');
    }
    if(this.state.persons.length<=1){
       classes.push('bold')
    }
    return (
     
      <div className="App">
        <h1>first react app123</h1>
        <p className={classes.join(' ')}>This is working</p>
        {/* <button onClick={this.deletePersons}>delete</button> */}
       <button 
       style ={style}
       onClick={this.toogleHandler}>toggler</button>
       {show}
      </div>
     
    );
  }
}

export default App;
