import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory,browserHistory,IndexRoute,Link } from 'react-router';
//import $ from 'jquery';
import Global from '../css/vmi-global.css';
//import Navigation,{TMMS_WEB_ROOT as api} from '../lib/global.js';
import * as Navigation from '../lib/global.js';
/*第一个是导出默认成员， 后一个是导出发webroot 重命名为api*/
//console.log(Navigation);
let navigation=Navigation.default;

export default class Nav extends React.Component {

  createMenu(){
      let selectIndex= this.props.selectIndex; //当前菜单选中那一项从navigation数组0开始      
      let menuHtml=`
                   <!-- <li class="navbar-first"><a class="navbar-icon" href="javascript:;"><span class="icon icon-t-ball-white"></span></a></li>-->
                    <li><a class="navbar-icon" href="javascript:;"><span class="icon icon-favorite"></span></a></li>
      `;
      if(navigation.children){
        navigation.children.map(function(e,i){
            //console.log(e.title);
            if(e.children.length==0){
                menuHtml+=`<li ${i==selectIndex?'class="active"':''}><a href="${e.url}">${e.title}</a></li>`;
            }else{            
                    menuHtml+=`
                    <li class="dropdown ${i==selectIndex?'active':''}">
                        <a href="#" class="dropdown-toggle" data-submenu  data-toggle="dropdown">${e.title}<span class="caret"></span></a> 
                        <ul class="dropdown-menu" role="menu">`;
                             e.children.map(function(ee,ii){
                                 //[to do]请处理 status:	"show"  disabled
                                 menuHtml+=` <li><a href="${ee.url}">${ee.title}</a></li>`;
                                 //menuHtml+=` <li><Link to="${ee.url}">${ee.title}</Link></li>`;
                                 //<li><Link to="/about">about</Link></li>
                                //menuHtml+=`<li class="disabled"><a tabIndex="-1" href="${ee.url}">Disabled action</a></li>`;
                                //className="dropdown-toggle" data-toggle="dropdown" 加上这个不可能点击 disabled还是可以点
                                
                            })

                     menuHtml+= `</ul>
                    </li>`;
                
            }
        });

      }
     // console.log(menuHtml);
      return  {__html:menuHtml};
  }
  render() {   
    
    return (
    <header role="banner">

        <div  className={Global.banner+''} >
                <a href="../dashboard/index.htm">
                    <img src="../img/logo.png" alt="Trend Micro Virtual Mobile Infrastructure" />
                    {/*<h1>Trend Micro Virtual Mobile Infrastructure</h1>*/}
                </a>

                    <ul className="nav navbar-nav navbar-right" style={{"paddingTop":20+'px'}}>
                        {/*<li><a href="javascript:;"><span className="icon icon-alert"></span></a></li>*/}
                        <li className="dropdown">
                            <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
                                <span className="caret"></span><span className="icon icon-user"></span>Root
                            </a>
                            <ul className="dropdown-menu" role="menu" style={{"right":0}}>
                                <li><a href="#">Reset Password</a></li>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Login Log</a></li>
                                <li className="divider"></li>
                                <li><a href="#">Login Out</a></li>
                            </ul>
                        </li>
                    </ul>






        </div>
        <nav className="navbar navbar-default" role="navigation" data-spy="affix" data-offset-top="61" style={{zIndex:1}}>
            <div className={Global.vim_menu_list_div+' container-fluid'}>
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                    
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#VMI_MENU_LIST">
                        <span className="sr-only">{/*导航菜单占位符*/}</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    {/*<a className="navbar-brand" href="../dashboard/index.htm">
                        VMI
                    </a>  */}    
                </div>

                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse" id="VMI_MENU_LIST">
                    <ul className="nav navbar-nav" dangerouslySetInnerHTML={this.createMenu()}>
                    
                    </ul>                   
                    
                </div> 
            </div> 
        </nav>
       
   </header>
)
  }
}
