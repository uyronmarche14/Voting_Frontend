import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-screen bg-white bg-cover bg-[url(/initial/building.png)] bg-center text-gray-500 flex flex-col items-center pt-2 gap-y-4 overflow-x-hidden relative">
      <img 
        src="/initial/tcu_gray.png" 
        className="absolute top-0 left-0 w-[50%] h-[80%] z-0 invisible md:visible" 
      />

      <div className='w-full flex flex-row h-23 md:h-25 bg-red-500 justify-between items-center z-10'>
            <img src="/initial/name.png" alt="tcu name" className='h-[120px] w-[160px] ml-2'/>
            
            <div className='flex flex-row items-center justify-center gap-x-1'>
                <img src="/initial/ssc.png" alt="ssc logo" className='mr-[-35px] md:mr-[-55px] w-[90px] h-[70px] md:w-[140px] md:h-[90px]'/>
                <img src="/initial/tcu.png" alt="tcu logo" className='mr-[-15px] md:mr-[0px] w-[90px] h-[70px] md:w-[140px] md:h-[90px]'/>
            </div>
      </div>

      <div className='flex flex-col'>
          <p className='text-center text-[10px] mb-[-10px] z-10 mt-4 opacity-80'>YOUR UNIVERSITY <br/> FIRST EVER</p>
          <img 
            src="/initial/voting.png" 
            alt="text" 
            className='w-[150px] h-[150px] z-5'
          />
      </div>

      <div className='w-[80%] h-auto flex flex-col gap-y-4  items-center justify-center'>
        <div className='w-full flex flex-col justify-center items-center'>
          <input 
            type="text" 
            name='student-id'
            className='border-1 border-gray-500 w-full h-9 max-w-[450px] px-2'                
          />
          <label htmlFor="student-id">STUDENT ID</label>
        </div>
    
        <div className='w-full flex flex-col justify-center items-center'>
          <input 
            type="password" 
            name='password'
            className='border-1 border-gray-500 w-full h-9 max-w-[450px] px-2'
          />                
          <label htmlFor="password">PASSWORD</label>
        </div>
      </div>

      <button className='underline'>Forget Password?</button>
            
      <button className="bg-gray-500 py-3 px-12 text-xl font-bold text-gray-100 rounded-full">LOG IN</button>
      <p className='text-sm md:text-md mb-6 mt-2'>
        Don't have an account yet?{" "}
        <Link href="/register" className='underline text-blue-500'>Create Account</Link>
      </p>
    </div>  
  );
}
