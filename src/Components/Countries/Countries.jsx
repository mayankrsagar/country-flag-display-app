import './Countries.css';

import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

import Country from '../CountryCard/Country';

const Countries = () => {
  const [country, setCountry] = useState([]);

  const fetchData = async () => {
    const url = "https://xcountries-backend.azurewebsites.net/all";
    try {
      const response = await axios.get(url);
      setCountry(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <div className='countries'>
      {country.map((ele) => {
        const { name, flag ,abbr} = ele;
        return <Country key={abbr} name={name} flag={flag} />;
      })}
      </div>
      
  );
};

export default Countries;
