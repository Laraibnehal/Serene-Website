import React from 'react'

function Contact() {
  return (
    <div className=' text-center'>
    <h1 className='text-2xl shadow-xl  text-center p-3 m-3'>Contact Page</h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.21689694983!2d88.26495057337593!3d22.535564936984567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1704642645735!5m2!1sen!2sin" 
    width="100%" 
    height="300" 
    style={{border:0}}
     allowFullScreen=""
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div>
        <div className=' m-auto max-w-42 w-1/4 text-center '>
            <form action="https://formspree.io/f/xqkrkokl" method='POST' className='flex flex-col gap-12  justify-center '>
                <input type="text" name="name" placeholder="Name" required autoComplete='off' className='p-2 mt-4'/>
                <input type="email" name="Email" placeholder="Email" required autoComplete='off' className='p-2 mt-3'/>
                <textarea name="message" rows="6" cols="50" placeholder="Message" required autoComplete='off' className='p-2 mt-3'/>
                <input type='submit' value="send" className='rounded-xl p-2 mb-3 w-4/12  hover:bg-slate-400 cursor-pointer  hover:text-white bg-sky-700 '/>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact