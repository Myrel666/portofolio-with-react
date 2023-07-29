import React from 'react';
import List from '../components/SkillsetList/List';

const Experience = () => {

    const items = ['Item 1', 'Item 2', 'Item 3'];

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Experience</h1>
            <p className="text-center">This is a Bootstrap-styled paragraph.</p>
            <List items={items} />
            {/* <button className="btn btn-primary">Click Me</button> */}
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;