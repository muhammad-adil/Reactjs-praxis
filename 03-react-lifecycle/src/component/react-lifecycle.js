import React, { Component } from 'react';

// import './reactlifecyclecomponent.css';

export default class ReactLifecycleComponent extends Component {
  constructor(props){
    super(props);
    //Initial or default state.
    this.state = {
      status: ""
    };

  }

    componentWillMount(){
      console.log('componentWillMount');
    }
    
    componentDidMount(){
      console.log('componentDidMount');
    }
    
    getInitialState(){
      return { status: true}
    }
/**
proxyConsole.js:54
Warning: getDefaultProps was defined on ReactLifecycleComponent, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.
    getDefaultProps(){
      return {name: 'John'};
     }
 **/ 
    componentWillReceiveProps(nextProps){
      console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState){
      console.log('shouldComponentUpdate');
      return true;
    }
    
    componentWillUpdate(){
      console.log('componentWillUpdate');
    }

    toggleState() {
      this.setState({status: !this.state.status})
    }

  render() {
    console.log('render');
    return (
      <div className="abc">
        <h1 onClick={this.toggleState}>
            {this.state.status.toString()}
        </h1>
      </div>

    ); 
  }

    componentWillUnmount(){
      console.log('componentWillUnmount')
    }

}

// componentWillMount
// componentDidMount
// componentWillReceiveProps(object nextProps)
// boolean shouldComponentUpdate(object nextProps, object nextState)
// componentWillUpdate(object nextProps, object nextState)
// componentDidUpdate(object prevProps, object prevState)
// componentWillUnmount()
// React.unmountComponentAtNode(document.body)