import React from 'react';

const Home = (props) => {

  const { fetchedData, screenWidth, screenHeight } = props;

  return (
    <div>
      <div>
      <input placeholder="Search">
      </input>
      <button>Search</button>
      </div>
    </div>
  );
}

export default Home;