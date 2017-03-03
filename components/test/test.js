import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//var $ = require('jquery');

$("#hello").html("hello22888888888888888888888");

class Animal {
    constructor(){
        this.type = 'animal'
    }
    says(say){
        console.log(this.type + ' says ' + say)
    }
}

let animal = new Animal()
animal.says('hello') //animal says hello

class Cat extends Animal {
	constructor(){
        super();
        this.type = 'cat'
    }
}

let cat = new Cat()
let ii=(i)=>{return i+13+6};
cat.says('hello:'+ ii(3)) //cat says hello


function animals(...types){
    console.log(types)
}
animals('cat', 'dog', 'fish')



let cat1 = 'ken';
let dog = 'lili';
let zoo = {cat1, dog};
console.log(zoo) 



class Content extends React.Component {
  render () {
    return ( 
        <div>
            <input ref="myInput" type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} /> 
            <h4>{this.props.myDataProp}</h4>
        </div>
    )
  }
};

class HelloMessage extends React.Component {
  constructor(props){
        super(props);
        this.state={
            value: 'Hello Runoob!',
            label:"hee"
        }           
  }
 
  handleChange(event) {
   // this.setState({value: event.target.value});
    let d= new Date();
    //this.refs.myInput2.focus();
    this.setState({
        value: event.target.value,
        label: event.target.value ? event.target.value : d.getTime()
    });
    console.log(this.state)
  }
  handleChange2(event) {
   // this.setState({value: event.target.value});
    let d= new Date();
    console.log('handleChange2:'+event.target.value)
  
  }

  render () {
    //var value = this.state.value;
    return (
        <div>
            <Content myDataProp = {this.state.value}  updateStateProp = {this.handleChange.bind(this)}></Content>
            <button onClick={this.handleChange2.bind(this)}>点我</button>
            <h4>label:{this.state.label}</h4>

            <CustomTextInput />
        </div>
    )
  }
};


class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
    this.name="ssss";
  }

  focus() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input type="text"  ref={(input) => { this.textInput = input; } } />
        <input type="button"  value="Focus the text input"   onClick={this.focus}  />
      </div>
    )
  }
}




ReactDOM.render(  <HelloMessage />,  document.getElementById('example'));

//孙子，将下拉选项的值传给爷爷

class Grandson extends React.Component {    
    render() {
        return (
            <div>性别：
                <select onChange={this.props.handleSelect}>
                    <option value="男">男</option>
                    <option value="女">女</option>
                </select>
            </div>
        )
    }
};
//子，将用户输入的姓名传给爹  
//对于孙子的处理函数，父只需用props传下去即可
class Child extends React.Component {   
//var Child = React.createClass({
    render() {
        return (
            <div>
                姓名：<input onChange={this.props.handleVal}/>
                <Grandson handleSelect={this.props.handleSelect}/>
            </div>
        )
    }
};
//父组件，准备了两个state，username和sex用来接收子孙传过来的值，对应两个函数handleVal和handleSelect
class Parent extends React.Component {  
   
  constructor(props) {
    super(props);
    this.state={       
            username: '',
            sex: ''        
    }
    
   }


    handleVal(event){
        this.setState({username: event.target.value});
    }
    handleSelect(event) {
        this.setState({sex: event.target.value});
    }
    render(){
        return (
            <div>
                <div>用户姓名：{this.state.username}</div>
                <div>用户性别：{this.state.sex}</div>
                <Child handleVal={this.handleVal.bind(this)} handleSelect={this.handleSelect.bind(this)}/>
            </div>
        )
    }
};
ReactDOM.render(
  <Parent />,
  document.getElementById('root')
);



