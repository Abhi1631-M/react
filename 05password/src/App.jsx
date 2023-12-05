import { useState ,  useCallback, useEffect, useRef} from 'react'



function App() {
  const [count, setCount] = useState(6)
  const[numAll,setNumall]=useState(false)
  const[charAll,setCharall]=useState(false)

  const[pass,setPass]=useState("")
  //useref
  const passwordRef = useRef(null)

  const passwordGenerator= useCallback(()=>{
    let password=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAll) str += "0123456789"
    if(charAll) str+= "`@#$%^&*+[]~!-_"

    for(let i=1;i<=count;i++)
    {
      let char = Math.floor(Math.random()* str.length+1)
      password +=str.charAt(char)

    }
    setPass(password)
  },[count,numAll,charAll,setPass])
  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
   // passwordRef.current?.setSelectionRange(0,5)
   window.navigator.clipboard.writeText(pass)
  },[pass])
   useEffect(()=>{
    passwordGenerator()
   },[count,numAll,charAll,passwordGenerator])  
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md
     rounded-lg px-4 my-8 text-orange-400 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={pass}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly   
        ref={passwordRef}     />
          <button 
          onClick={copyPassword}
          className='outline-none bg-blue-700 text-white
          px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"  
          min={6}
          max={100}
          value={count}
          className='cursor-pointer'
          onChange={(e)=>{setCount(e.target.value)}}/>
          <label>Length:{count}</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={numAll}
          id='numberInput'
          onChange={()=>{
            setNumall((prev)=>!prev);
          }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={charAll}
          id='characterInput'
          onChange={()=>{
            setCharall((prev)=>!prev);
          }} />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
