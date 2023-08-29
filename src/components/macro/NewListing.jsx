import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '../micro/Button';
import '../CSS/NewListing.css';
import { db } from '../../firebase';
import {collection, addDoc    } from 'firebase/firestore'
import Alert from '../micro/Alert';


const NewListing = () => {
  const [showAlert,setShowAlert]=useState(false);
  const initialValues = {
    name: '',
    category: '',
    phone: '',
    website: '',
    address: '',
    description: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Business Name is required'),
    category: Yup.string().required('Business Category is required'),
    phone: Yup.string().required('Phone Number is required'),
    website: Yup.string().required('Website is required'),
    address: Yup.string().required("Address is required"),
    description: Yup.string().required("Add a small business description"),
  });
  


  const onSubmit = async (values,{resetForm}) => {
    // Handle form submission here
    console.log(values);
   try {
     await addDoc(collection(db, 'Listings'), {
       name: values.name,
       description: values.description,
       category: values.category,
       phone: values.phone,
       website: values.website, 
       address: values.address,
       timeInMills: new Date().getTime()
     })
     setShowAlert(true);
     setTimeout(() => {
       setShowAlert(false);
     },3000)
     resetForm();  
     
   } catch (err) {
     alert(err)
   }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div>
      <Link to="/">
        <Button name="Back" />
      </Link>
      { showAlert && <Alert message="Howdy! Listing Submitted." /> }
      <h1 className="header">Add a new Listing: </h1>
      <p className="headerDetails">Enter all the below Details</p>
      <form onSubmit={formik.handleSubmit}>
        <div className="inputDiv">
          <label htmlFor="name">Business Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            className="inputStyle"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>
        <div className="inputDiv">
          <label htmlFor="category">Business Category: </label>
          <input
            type="text"
            id="category"
            name="category"
            className="inputStyle"
            {...formik.getFieldProps('category')}
          />
          {formik.touched.category && formik.errors.category && (
            <div className="error">{formik.errors.category}</div>
          )}
        </div>
        <div className="inputDiv">
          <label htmlFor="category">Business Phone: </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="inputStyle"
            {...formik.getFieldProps('phone')}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="error">{formik.errors.phone}</div>
          )}
        </div>
        <div className="inputDiv">
          <label htmlFor="category">Business Address: </label>
          <input
            type="text"
            id="address"
            name="address"
            className="inputStyle"
            {...formik.getFieldProps('address')}
          />
          {formik.touched.address && formik.errors.address && (
            <div className="error">{formik.errors.address}</div>
          )}
        </div>
        <div className="inputDiv">
          <label htmlFor="category">Business Website: </label>
          <input
            type="text"
            id="website"
            name="website"
            className="inputStyle"
            {...formik.getFieldProps('website')}
          />
          {formik.touched.website && formik.errors.website && (
            <div className="error">{formik.errors.website}</div>
          )}
        </div>
        <div className="inputDiv">
          <label htmlFor="category">Business Description: </label>
          <textarea rows="5"
            type="text"
            id="description"
            name="description"
            className="inputStyle"
            {...formik.getFieldProps('description')}
          />
          {formik.touched.description && formik.errors.description && (
            <div className="error">{formik.errors.description}</div>
          )}
        </div>
        
        <div className="submitBtnDiv flex justify-center items-center">
          <input type="submit" value="Submit" className='SubmitBtn' />
        </div>
      </form>
    </div>
  );
};

export default NewListing;
