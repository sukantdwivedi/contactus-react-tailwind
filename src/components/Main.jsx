import React from 'react';
import contact from '../images/contact.svg';

const Main = () => {

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(event)
    }
  return (
    <>
        <main className='w-8/12 mx-auto my-14'>
            <div>
                <h1 className='text-5xl font-extrabold uppercase'>Contact Us</h1>
            </div>
            <div>
                <p className='font-semibold text-base text-[#5A5959] my-4'>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            </div>
            <div className='flex justify-between py-12 m-2 gap-10'>
                <div className='w-1/2 flex flex-col'>
                    <div>
                        <div className='flex w-full justify-between'>
                            <button className='border px-4 py-1.5 bg-black rounded text-white uppercase font-semibold'>  <i class="ri-message-2-line"></i> via support chat</button>
                            <button className='border px-14 py-1.5 bg-black rounded text-white uppercase font-semibold'> <i class="ri-phone-fill"></i> via call</button>
                        </div>
                        <div>
                            <button className='border border-black px-14 py-1.5 my-4 rounded w-full uppercase font-semibold'> <i class="ri-message-2-line"></i> via email form</button>
                        </div>
                    </div>

                    <div className='flex flex-col m-6'>
                        <form onSubmit={onSubmit}>
                            <div className='static'>
                                <label className='absolute -mt-1 ml-8 bg-white font-semibold'>Name</label>
                                <input className='border border-black w-full h-10 p-2 my-2' type="text" />
                            </div>
                            <div className='static mt-3'>
                                <label className='absolute -mt-1 ml-8 bg-white font-semibold'>E-mail</label>
                                <input className='border border-black w-full h-10 p-2 my-2' type="email" />
                            </div>
                            <div className='static mt-3'>
                                <label className='absolute -mt-1 ml-8 bg-white font-semibold'>Text</label>
                                <textarea className='w-full border border-black p-2 my-2' name="text" id="" cols="10" rows="5"></textarea>
                            </div>
                            <div className='w-full relative'>
                                <button className='border w-1/2 absolute end-0 px-4 py-1.5 bg-black rounded text-white uppercase font-semibold'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img src={contact} alt="" />
                </div>
            </div>
        </main>
    </>
  )
}

export default Main