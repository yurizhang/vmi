import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory,browserHistory,IndexRoute,Link } from 'react-router';
//import Button from '../plugs/Button';
import Modal from '../plugs/modal';
import Nav from '../plugs/nav';
import Lang from '../lang/string';
import TrendFun from '../lib/function';
import DbCss from './dashboard.css';
import Chartshow from './chartshow';
import Profile from '../profile/profile';

let selectIndex=0;//当前菜单选中那一项从navigation数组0开始
let trendFun=new TrendFun(); //公共函数库
//console.log(trendFun.to_locale_time());

trendFun.setCookie("test_cookie",'123456',10);
//console.log(trendFun.GetCookie("test_cookie"));

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myModal: 1,
      myModal2: 2,
      myModal3: 3,
    };    
  }
  _openModal() {
      alert("你save了");
      $('#myModal'+this.state.myModal).modal();
  }
  _openModal2() {
      $('#myModal'+this.state.myModa2).modal();
  }

  render () {
    return (
      
      <section>
        <a id="Buttons"></a>
        <h2 className="page-header">React Buttons</h2>          

          <br/><br/>
          <button type="button" className="btn btn-default btn-icon-only"><span className="fa fa-comment"></span></button>
          <button type="button" onClick={this._openModal2.bind(this)} className="btn btn-default btn-border"><span className="fa fa-wrench"></span>Settings</button>
          <button type="button" onClick={this._openModal.bind(this)} className="btn btn-danger btn-lg">Open Modal</button>

      </section>
    );
  }
}



  


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectIndex:0,
      myModal: 1,
      myModal2: 2
    };
    
  }
 _closeModal() {
      $('#myModal'+this.state.myModal).modal('hide');
      alert("你关闭了");
      console.log("你关闭了__");
   }
    _openModal() {
      $('#myModal'+this.state.myModal).modal();
      alert("你open"+this.state.myModal);
   }
  _saveBtn() {
      alert("你save了");
      $('#myModal'+this.state.myModal).modal('hide');
      console.log("为什么 alert不能执行,因为你chrome禁止了");
      
  }

  _bodyHtml(){
      let html="\
          <p>VMI popup info</p>\
          <p>VMI popup info</p>\
          <p>VMI popup info</p>\
          <p>VMI popup info</p>";
      
      
      return html;


  }

  render () {
    let modTitle="this is a  title";
    let modBody=this._bodyHtml();
    return (
    <div>
      <Nav selectIndex={selectIndex} /> 
      <div>
          <button type="button" onClick={this._openModal.bind(this)} className="btn btn-default btn-border"><span className="fa fa-wrench"></span>Settings</button>
          <button type="button" onClick={this._openModal.bind(this)} className="btn btn-danger btn-lg">Open Modal</button>

        {this.props.children}

        
      </div>

  

      {<Modal modTitle={modTitle} modBody={modBody} modalName={this.state.myModal} closeModal={this._closeModal.bind(this)} saveBtn={this._saveBtn.bind(this)} />}
      {<Modal modTitle={modTitle} modBody={modBody} modalName={this.state.myModal2} closeModal={this._closeModal.bind(this)} saveBtn={this._saveBtn.bind(this)} />}
      
    </div>      
    )

  }
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };    
  }
  render () {
    return (
    <div>
         
     
      <Chartshow />
    </div>      
    )

  }
}


class Report extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {};    
  } 
  render () {
    console.log(trendFun.GetCookie("test_cookie"));
    return (
      <div>
      <Profile />      
      </div>
    );
  }
}
class About extends React.Component {
  render () {
    return (
      <div>
      About {this.props.location.query.id} params:{this.props.params.id}
       {/*about?id=3 得到地址栏参数 后一个得到这样: http://localhost:8888/build/test/router.htm#/about/15*/}
      </div>     
    );
  }
}




let rs=
<Router history={hashHistory}>
    <Route path="/" component={Index}>  
        <IndexRoute component={Dashboard}/>      
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/report" component={Report}/>
        <Route path="/about" component={About}/>
        <Route path="/about/:id" component={About}/>
    </Route>
</Router>;

ReactDOM.render(rs, document.getElementById('container'));

