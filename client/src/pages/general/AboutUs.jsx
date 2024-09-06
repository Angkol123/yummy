// import React from 'react';

// const AboutUs = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="max-w-2xl p-6 bg-white shadow-md rounded-lg">
//         <h1 className="text-3xl font-bold text-blue-600">About Us</h1>
//         <p className="mt-4 text-gray-700">
//           At Early Learners Hub, we believe in creating educational resources that ignite curiosity and creativity in young minds. Our platform is dedicated to providing games, videos, and activities that are both fun and educational. Join us on this journey to inspire the next generation!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React from 'react'
import about from '../../images/about.png'

const AboutUs = () => {
  return (
    <div className='flex flex-col justify-center -z-50'>
      <div className='flex justify-center items-center' style={{
    backgroundImage: `url(${about})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    width: '90%',
    height: '700px',
    marginTop: '-2.5vh'  
  }}
  alt="image"
>
  <h1 className='text-[#5B3A29] text-[5rem] font-semibold' style={{textShadow: '6px 5px 4px rgb(0, 0, 0, 0.7)'}}>About Us</h1>
</div>

    </div>
  )
}

export default AboutUs
