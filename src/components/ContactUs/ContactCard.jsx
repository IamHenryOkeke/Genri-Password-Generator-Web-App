import { useState } from 'react'
import PropTypes from 'prop-types'
import {ReactComponent as LinkedIn} from "../../assets/svg/LinkedIn.svg";
import {ReactComponent as Behance} from "../../assets/svg/Behance.svg";
import {ReactComponent as Github} from "../../assets/svg/Github.svg";
import {ReactComponent as Phone} from "../../assets/svg/Phone.svg";
import {ReactComponent as Twitter} from "../../assets/svg/Twitter.svg";


const ContactCard = ({role, twitterUrl, phone, portfolioUrl, linkedInUrl, emailAddress}) => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <h2 className='text-center text-lg font-medium my-3'>{role}</h2>
      <div className="py-4 px-10 bg-indigo-1000 rounded-2xl flex flex-col items-center">
        <p className='md:text-xl mb-2'>Socials</p>
        <div className='flex gap-5 mb-5'>
          <a href={twitterUrl} target='_blank' rel="noreferrer">
            <Twitter className="transition-all ease-in-out delay-150 hover:scale-125 duration-500"/>
          </a>
          <a href={portfolioUrl} target='_blank' rel="noreferrer">
            {role === "Developer"? <Github className="transition-all ease-in-out delay-150 hover:scale-125 duration-500"/> : <Behance className="h-6 w-6 transition-all ease-in-out delay-150 hover:scale-125 duration-500"/>}
          </a>
          <a href={linkedInUrl} target='_blank' rel="noreferrer">
            <LinkedIn className="h-6 w-6 transition-all ease-in-out delay-150 hover:scale-125 duration-500"/>
          </a>
          <a href={phone}>
            <Phone className="transition-all ease-in-out delay-150 hover:scale-125 duration-500"/>
          </a>
        </div>
        <div className='flex flex-col items-center gap-3 md:w-[80%]'>
          <h1 className='md:text-xl -mb-3'>Send a mail</h1>
          <label>
            Message Subject:
          </label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className='border-2 border-black rounded-md p-2 w-full bg-neutral-1000'
          />

          <label>Your message</label>
          <textarea rows="5" value={message}
            onChange={(e) => setMessage(e.target.value)} className="p-2 border-2 w-full border-black text-gray-900 bg-neutral-1000 resize-none rounded-md" placeholder="Write your message here..."></textarea>
          <a href={`mailto:${emailAddress}?subject=${subject}&body=${message}`}>
            <button className='px-4 py-1 bg-slate-400 border rounded-md'>Click to Send an Email</button>
          </a>
        </div>
      </div>
    </div>
  )
}

ContactCard.propTypes = {
    twitterUrl: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    portfolioUrl : PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    linkedInUrl : PropTypes.string.isRequired,
    emailAddress : PropTypes.string.isRequired
}

export default ContactCard
