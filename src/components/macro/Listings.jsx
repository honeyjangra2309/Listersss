import React, { useState, useEffect } from 'react';
import { getDocs, collection } from "firebase/firestore"; 
import { db } from '../../firebase';
import Listing from './Listing';
import '../CSS/Listings.css'
import { Loader } from '../micro/Loader';


const Listings = () => {
  const [listings, setListings] = useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
   

    const fetchData = async () => {
      try {
        // Fetch data from Firebase collection
        const doc_refs = await getDocs(collection(db, "Listings"))
        
        

        // Convert querySnapshot to an array of listing objects
        const data = doc_refs.docs.map((doc) => doc.data());
        console.log(data);
        // Sort the data based on timeInMills property
        const sortedData = data.sort((a, b) => a.timeInMills - b.timeInMills);
        console.log(sortedData);
        // Set the sorted data in the Listings state
        setLoading(false);
        setListings(sortedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container w-100'>
      <h1 className='header'>All Listings</h1>
      <p className='header_details'>Below are the public listings just for you.</p>
      {
        loading && <div className='Loader_div'>
        <Loader />
        </div>
      }
      {listings.map((el,i) => {
        return <Listing listData={el} key={i} />
      })}
    </div>
  );
};

export default Listings;
