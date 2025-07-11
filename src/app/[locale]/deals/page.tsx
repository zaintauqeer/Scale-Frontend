// import React from 'react'
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'
// import DealOfTheMonth from '@/components/DealOfTheMonth'
// import LiveDeals from '@/components/LiveDeals'

// const Deals = () => {
//   return (
//     <>
//       <div className='mt-8'>
//         <Navbar/>
//       </div>
//       <DealOfTheMonth/>
//       <LiveDeals/>
//       <Footer/>
//     </>
//   )
// }

// export default Deals


"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DealOfTheMonth from "@/components/DealOfTheMonth";
import LiveDeals from "@/components/LiveDeals";

const Deals = () => {
 

  return (
    <>
      <div className="mt-8">
        <Navbar />
      </div>
      <DealOfTheMonth />
      <LiveDeals />
      <Footer />
    </>
  );
};

export default Deals;