import {ReactComponent as CopyBtn} from "../assets/svg/Vector.svg";

const GeneratePasswordSection = () => {
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
              type="range"
              min="1"
              max="10"
              value="5"
              className="w-3/4 cursor-pointer"
            />
            <p className="flex items-center justify-center rounded-md w-[40px] h-[40px] border-4 border-indigo-950 bg-neutral-1000">
              <span className="md:text-3xl"></span>
            </p>
          </div>
        </div>
        <div
          className="md:pl-6 pl-3 lg:pl-14 py-4 bg-indigo-1000 rounded-2xl"
        >
          <h4 className="md:text-3xl lg:text-4xl">Lowercase(a-z)</h4>
          <div className="flex items-center gap-5">
            <input
              type="range"
              min="1"
              max="10"
              value="5"
              className="w-3/4 cursor-pointer"
            />
            <p
              className="flex items-center justify-center rounded-md w-[40px] h-[40px] border-4 border-indigo-950 bg-neutral-1000"
            >
              <span className="md:text-3xl"></span>
            </p>
          </div>
        </div>
        <div
          className="md:pl-6 lg:pl-14 pl-3 py-4 bg-indigo-1000 rounded-2xl"
        >
          <h4 className="md:text-3xl lg:text-4xl">Number(0-9)</h4>
          <div className="flex items-center gap-5">
            <input
              type="range"
              min="1"
              max="10"
              value="5"
              className="w-3/4 cursor-pointer"
            />
            <p
              className="flex items-center justify-center rounded-md w-[40px] h-[40px] border-4 border-indigo-950 bg-neutral-1000"
            >
              <span className="md:text-3xl"></span>
            </p>
          </div>
        </div>
        <div
          className="md:pl-6 lg:pl-14 pl-3 py-4 bg-indigo-1000 rounded-2xl"
        >
          <h4 className="md:text-3xl lg:text-4xl">Symbols(-@_)</h4>
          <div className="flex items-center gap-5">
            <input
              type="range"
              min="1"
              max="10"
              value="5"
              className="w-3/4 cursor-pointer"
            />
            <p
              className="flex items-center justify-center rounded-md w-[40px] h-[40px] border-4 border-indigo-950 bg-neutral-1000"
            >
              <span className="md:text-3xl"></span>
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center">
          <p>Password Length:</p>
          <p className="flex items-center justify-center text-base md:text-4xl w-16 h-12 rounded-xl md:w-[150px] md:h-[60px] border-2 border-indigo-950">

          </p>
        </div>
        <button className="px-10 md:font-medium md:text-4xl md:px-20 py-2 bg-indigo-950 rounded-md hover:bg-indigo-1000">
          Generate
        </button>
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <p className="px-3 text-sm md:text-base text-ellipsis text-center flex items-center justify-center w-[300px] h-[40px] rounded-xl md:w-[400px] md:h-[80px] border-2 border-indigo-950">

          </p>
          <button className="px-4 py-[6px] flex gap-1 items-center rounded-md bg-indigo-950 md:px-4 md:py-2 hover:bg-indigo-1000">
            <CopyBtn/>
            <p>Copy</p>
          </button>
        </div>
      </section>
    </div>
  )
}

export default GeneratePasswordSection;

