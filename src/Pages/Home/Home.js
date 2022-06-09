import React from 'react';
import "./Home.css"
import Navbar from '../Shared/Navbar/Navbar';
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const Home = () => {
   return (
     <div className="py-12 bg-image">
       <Navbar />
       <Link to="/contact">
         <PrimaryButton>hellow</PrimaryButton>
       </Link>
     </div>
   );
};

export default Home;