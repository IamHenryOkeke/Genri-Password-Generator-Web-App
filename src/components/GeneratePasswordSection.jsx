import { useState } from "react";
import {ReactComponent as CopyBtn} from "../assets/svg/Vector.svg";
import useGenerate from "../../useGenerate";

const GeneratePasswordSection = () => {
  const [upperCaseValue, setUpperCaseValue] = useState(5);
  const [lowerCaseValue, setLowerCaseValue] = useState(5);
  const [numberValue, setNumberValue] = useState(5);
  const [symbolValue, setSymbolValue] = useState(5);
  const [userPassword, setUserPassword] = useState("");

  const  { generatePassword } = useGenerate(upperCaseValue, lowerCaseValue, numberValue, symbolValue)

  const handleOnClick = () => {
    setUserPassword(generatePassword())
  }

  const copyPassword = () => {
    if (userPassword === "" ) {
        alert("Please generate password")
    }
    else{
        navigator.clipboard.writeText(userPassword);
        alert("Copied password: " + userPassword)
    }    
  }

  return (
    <div className="px-4 md:px-0 border-indigo-950 border-b-8 py-20">
      <section
        className="rounded-xl p-5 md:p-8 flex flex-col gap-3 lg:px-36 md:py-6 md:grid md:grid-cols-2 md:gap-5 md:rounded-none bg-indigo-950 justify-between md:text-4xl mb-5"
      >
        <div
          className="pl-3 md:pl-6 lg:pl-14 py-4 bg-indigo-1000 rounded-2xl"
        >
          <h4 className="md:text-3xl lg:text-4xl">Uppercase(A-Z)</h4>
          <div className="flex items-center gap-5">
            <input
            onChange={(e) => {
              setUpperCaseValue(e.target.value)
            }}
              type="range"
              min="1"
              max="10"
              value={upperCaseValue}
              className="w-3/4 cursor-pointer"
            />
            <p className="flex items-center justify-center rounded-md w-[40px] h-[40px] border-4 border-indigo-950 bg-neutral-1000">
              <span className="md:text-3xl">{upperCaseValue}</span>
            </p>
          </div>
        </div>
        <div
          className="md:pl-6 pl-3 lg:pl-14 py-4 bg-indigo-1000 rounded-2xl"
        >
          <h4 className="md:text-3xl lg:text-4xl">Lowercase(a-z)</h4>
          <div className="flex items-center gap-5">
            <input
              onChange={(e) => {
                setLowerCaseValue(e.target.value)
              }}
              type="range"
              min="1"
              max="10"
              value={lowerCaseValue}
              className="w-3/4 cursor-pointer"
            />
            <p
              className="flex items-center justify-center rounded-md w-[40px] h-[40px] border-4 border-indigo-950 bg-neutral-1000"
            >
              <span className="md:text-3xl">{lowerCaseValue}</span>
            </p>
          </div>
        </div>
        <div
          className="md:pl-6 lg:pl-14 pl-3 py-4 bg-indigo-1000 rounded-2xl"
        >
          <h4 className="md:text-3xl lg:text-4xl">Number(0-9)</h4>
          <div className="flex items-center gap-5">
            <input
              onChange={(e) => {
                setNumberValue(e.target.value)
              }}
              type="range"
              min="1"
              max="10"
              value={numberValue}
              className="w-3/4 cursor-pointer"
            />
            <p
              className="flex items-center justify-center rounded-md w-[40px] h-[40px] border-4 border-indigo-950 bg-neutral-1000"
            >
              <span className="md:text-3xl">{numberValue}</span>
            </p>
          </div>
        </div>
        <div
          className="md:pl-6 lg:pl-14 pl-3 py-4 bg-indigo-1000 rounded-2xl"
        >
          <h4 className="md:text-3xl lg:text-4xl">Symbols(-@_)</h4>
          <div className="flex items-center gap-5">
            <input
              onChange={(e) => {
                setSymbolValue(e.target.value)
              }}
              type="range"
              min="1"
              max="10"
              value={symbolValue}
              className="w-3/4 cursor-pointer"
            />
            <p
              className="flex items-center justify-center rounded-md w-[40px] h-[40px] border-4 border-indigo-950 bg-neutral-1000"
            >
              <span className="md:text-3xl">{symbolValue}</span>
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center">
          <p>Password Length:</p>
          <p className="flex items-center justify-center text-base md:text-4xl w-16 h-12 rounded-xl md:w-[150px] md:h-[60px] border-2 border-indigo-950">
              {Number(upperCaseValue) + Number(lowerCaseValue)  + Number(numberValue) + Number(symbolValue)}
          </p>
        </div>
        <button onClick={()=>{handleOnClick()}} className="px-10 md:font-medium md:text-4xl md:px-20 py-2 bg-indigo-950 rounded-md hover:bg-indigo-1000">
          Generate
        </button>
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <p className="px-3 text-sm md:text-base text-ellipsis text-center flex items-center justify-center min-w-[300px] h-[40px] rounded-xl w-fit md:min-w-[250px] md:h-[60px] border-2 border-indigo-950">
              {userPassword}
          </p>
          <button onClick={() => {copyPassword()}} className="px-4 py-[6px] flex gap-1 items-center rounded-md bg-indigo-950 md:px-4 md:py-2 hover:bg-indigo-1000">
            <CopyBtn/>
            <p>Copy</p>
          </button>
        </div>
      </section>
    </div>
  )
}

export default GeneratePasswordSection;

