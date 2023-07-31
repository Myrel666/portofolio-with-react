import React from 'react';
import List from '../components/SkillsetList/List';

const Portofolio = () => {

  const items = ['Manajemen Rapat App', 'Skrining App', 'Montern App'];

  const chart = ['Manajemen Rapat App', 'Skrining App', 'Montern App'];

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Portofolio</h1>
            <p className="text-center">This is a Bootstrap-styled paragraph.</p>
            <List items={items} />
            <List items={chart} />
          </div>
        </div>
      </div>
    );
  };
  
  export default Portofolio;