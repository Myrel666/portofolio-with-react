import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div>
        <h1>Not Found</h1>
        <Link to="/"><button className="btn btn-primary">Back To Home</button></Link>
      </div>
    );
  };
  
  export default NotFound;