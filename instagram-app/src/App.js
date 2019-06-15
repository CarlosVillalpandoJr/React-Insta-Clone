import React from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer.js';
import SearchBar from './components/SearchBar.js';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData}) 
  }

  render() {
    return (
      <div>
        <SearchBar />
        {this.state.dummyData.map(post => {
          return (
          <PostContainer post={post} key={post.id} />
          )
        })}
      </div>
    )
  }
}

export default App;
