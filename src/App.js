import axios from 'axios';
import { useState, useEffect, React } from 'react';
import './App.css';
import { Countries } from './components/Countries';
import { Pagination } from './components/Pagination';

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage] = useState(20)

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      const res = await axios.get('https://restcountries.com/v3.1/all');
      setCountries(res?.data);
      setLoading(false);
    }

    getCountries()
  }, [])

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const currentCountryIndex = countries.slice(firstCountryIndex, lastCountryIndex)

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    setCurrentPage(prev => prev + 1)
  }
  
  const prevPage = () => {
    setCurrentPage(prev => prev - 1)
  }

  return (
    <div className="App">
      <h1>Countries</h1>
      <div className='container'>
        <Countries countries={currentCountryIndex} loading={loading} />
        <Pagination countriesPerPage={countriesPerPage} totalCountries={countries.length} paginate={paginate}/>
        <button onClick={prevPage}>Prev Page</button>
        <button onClick={nextPage}>Next Page</button>
      </div>
    </div>
  );
}

export default App;
