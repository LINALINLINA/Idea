import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from '../component/slider';
import {
  inputChange,
  inputSubmit,
  deleteListItem,
  listItemClick
} from '../reducers/demo';
class Idea extends Component {

  onInputChange = (event) => {
    this.props.inputChange(event.target.value);
  };

  onInputSubmit = (event) => {
    event.preventDefault();
    this.props.inputSubmit();
  };

  onListItemClick = (i) => {
    this.props.listItemClick(i)
  };

  deleteListItem = (i) => {
    this.props.deleteListItem(i)
  };

  render(){
    console.log('idea',this.props)
    return (
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              
              <hr/>
              <Slider />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    toDoApp: state.toDoApp || {} // gives our component access to state through props.toDoApp
  }
}

function mapDispatchToProps(dispatch) {
  return {
    inputChange: (value) => dispatch(inputChange(value)),
    inputSubmit: () => dispatch(inputSubmit()),
    deleteListItem: (i) => dispatch(deleteListItem(i)),
    listItemClick: (i) => dispatch(listItemClick(i))
  }; // here we're mapping actions to props
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Idea);
