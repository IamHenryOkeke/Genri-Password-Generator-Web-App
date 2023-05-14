import React from 'react'
import ContactCard from '../components/ContactUs/ContactCard'


const ContactUs = () => {
  return (
    <div className='mt-4'>
      <h2 className='text-center text-2xl font-semibold'>
          Get in touch with us 
      </h2> 
      <div className="bg-indigo-950 mt-4 rounded-xl md:rounded-none flex flex-col md:flex-row items-center justify-center md:gap-10 gap-3 py-4 mx-4 md:mx-0">
        <ContactCard role='Developer' twitterUrl="https://twitter.com/NmesomaHenry" portfolioUrl='https://github.com/IamHenryOkeke' phone='tel:+2347080194374' linkedInUrl='http://www.linkedin.com/in/henry-okeke-3176481a9' emailAddress="iamhenryokeke@gmail.com"/>
        <ContactCard role='Designer' twitterUrl="https://twitter.com/HeyEmdeee" portfolioUrl='https://www.behance.net/heisemdee' phone='tel:+2348106970750' linkedInUrl='http://www.linkedin.com/in/mac-daniel-dokubo' emailAddress="dokubomacdaniel@gmail.com"/>
      </div>
    </div>
  )
}

export default ContactUs
