import PropTypes from 'prop-types'
import {ReactComponent as CopyBtn} from "../../assets/svg/Vector.svg";
import CopyPassword from '../../utils/CopyPassword';

const PasswordCard = ({site, password}) => {
  const { copyFunc } = CopyPassword();

  const handleCopyClick = () => {
    copyFunc(password);
  }
  return (
    <div className="p-4 bg-indigo-1000 rounded-2xl lg:w-1/2">
        <h2 className='mb-4'>
            {site} 
        </h2>
        <div className='flex items-center justify-between'>
            <p className="flex items-center py-4 pl-2 rounded w-9/12 h-5 text-base border-2 border-indigo-950 bg-neutral-1000">
                {password}
            </p>
            <button onClick={() => {handleCopyClick()}} className="px-4 text-[10px] lg:text-base py-2 flex gap-1 items-center rounded-xl bg-indigo-950 md:px-4 md:py-2 hover:bg-indigo-1000">
                <CopyBtn className="fill-black"/>
                <p>Copy</p>
            </button>
        </div>
       
    </div>
  )
}

PasswordCard.propTypes = {
    site: PropTypes.string.isRequired,
    password : PropTypes.string.isRequired,
}

export default PasswordCard

