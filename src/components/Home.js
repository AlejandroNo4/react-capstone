import React, { useState, useEffect } from 'react';

const Home = () => {
  const [image, updateImage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const id = '436336';
      const apiDepartment = 'https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=11';
      const apiObject = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
      try {
        const departmentItems = await fetch(apiDepartment, { mode: 'cors' });
        const json = await departmentItems.json();
        const ids = json.objectIDs;
        console.log(ids);
        const item = await fetch(apiObject, { mode: 'cors' });
        const objectRes = await item.json();
        updateImage(objectRes.primaryImage);
        return objectRes;
      } catch (e) {
        return e;
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello from Home</h1>
      <img alt="Cannnot be shown" className="object-img" src={image} />
    </div>
  );
};

export default Home;
