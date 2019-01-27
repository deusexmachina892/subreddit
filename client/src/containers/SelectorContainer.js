import React, { PureComponent, Fragment } from 'react'; 
import { connect } from 'react-redux';

import { fetchSubreddits } from '../actions';

import Selector from '../components/Selector';

class SelectorContainer extends PureComponent {
  constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
  } 
  handleClick(e){
    const { fetchSubreddits } = this.props;
    fetchSubreddits(e.target.id);
  }
  render() {
    return (
      <Fragment>
         <Selector handleClick={this.handleClick}/>
      </Fragment>
    )
  }
}

export default connect(null, { fetchSubreddits })(SelectorContainer);
