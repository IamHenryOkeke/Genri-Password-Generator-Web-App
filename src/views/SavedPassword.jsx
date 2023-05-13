import { useEffect, useState } from 'react'
import PasswordCard from '../components/SavedPasswords/PasswordCard';

const SavedPassword = () => {
  const [savedPasswords, setSavedPasswords] = useState([]);
  useEffect(() => {
      setSavedPasswords(Object.keys(localStorage))
  }, []);
  return (
    <div className='mt-4'>
      <h2 className='text-center text-lg font-semibold'>
          Saved Passwords 
      </h2> 
      {
        savedPasswords.length >= 1 ? (
          <div className="bg-indigo-950 mt-4 rounded-xl mx-4 md:mx-0 md:rounded-none">
          {
            savedPasswords.map((index) => (
              <div key={index} className="flex flex-col gap-3 py-4 mx-4 md:mx-8 lg:mx-32">
                <PasswordCard site={JSON.parse(localStorage.getItem(index)).site} password={JSON.parse(localStorage.getItem(index)).password}  />
              </div>
            ))
          }
        </div> 
        ) : (
            <p className='text-center'>
              No Passwords Founds
            </p>
        )
      }
      
    </div>
  )
}

export default SavedPassword;
