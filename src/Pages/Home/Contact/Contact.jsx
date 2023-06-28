import React from 'react';
import Heading from '../Components/Heading/Heading';

const Contact = () => {
    return (
        <div className='bg-slate-200 pt-4'>
           <Heading heading={'Contact me'}></Heading>
          <div className='lg:flex justify-center space-x-10'>
            <div className='bg-white p-4 rounded text-center'>
                <p>Phone</p>
                <p>01777349196</p>
            </div>
            <div className='bg-white p-4 rounded text-center'>
                <p>Email</p>
                <p>dewan.mehedi.01@gmail.com</p>
            </div>
            <div className='bg-white p-4 rounded text-center'>
                <p>Adress</p>
                <p>Dhaka,Bangladesh</p>
            </div>
          </div>
            
             <div className="hero w-full">
        <div className="hero-content w-full">
          <div className="card flex-shrink-0 w-full">
            <div className="card-body">
             <div className='grid grid-cols-2'>
             <div className="form-control lg:my-2">
                <input type="text" placeholder="Enter Name" className="input input-bordered lg:mx-2" />
              </div>
              <div className="form-control lg:my-2">
               
                <input type="text" placeholder="Enter Email" className="input input-bordered" />
              </div>
              <div className="form-control lg:mx-2">
               
                <input type="text" placeholder="Enter Number" className="input input-bordered" />
              </div>
              <div className="form-control">
               
                <input type="text" placeholder="Enter Subject" className="input input-bordered" />
              </div>
             </div>
              <div className="form-control">
               
                <input type="text" placeholder="Message" className="input input-bordered h-28" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline btn-neutral lg:w-96 mx-auto">Submit Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>  
       
    );
};

export default Contact;