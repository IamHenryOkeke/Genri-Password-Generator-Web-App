import { useEffect, useState } from 'react'

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
      <div className="bg-indigo-950 mt-4">
        {
          savedPasswords.map((index) => (
            <div key={index} className="flex flex-col gap-3 py-4 mx-4 md:mx-8">
              <div className="p-4 bg-indigo-1000 rounded-2xl">
                <h2 className='mb-4'>
                  Site: {JSON.parse(localStorage.getItem(index)).site}
                </h2>
                <p>
                  Password: {JSON.parse(localStorage.getItem(index)).password}
                </p>
              </div>
              
            </div>
          ))
        }
      </div> 
      
    </div>
  )
}

export default SavedPassword;
