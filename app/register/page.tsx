

export default function signIn(){

    return(
        <div className="w-screen overflow-x-hidden bg-white bg-cover bg-[url(/initial/building.png)] bg-center text-gray-500 flex flex-col items-center pt-2 gap-y-4 relative">
            {/* Background Logo (hidden on small screens) */}
            <img 
                src="/initial/tcu_gray.png" 
                className="absolute top-2 left-0 w-[50%] h-[80%] z-0 invisible md:visible" 
                alt="background tcu logo"
            />

            {/* Header Section */}
            <div className='w-full flex flex-row h-23 md:h-25 bg-red-500 justify-between items-center z-10'>
                <img src="/initial/name.png" alt="tcu name" className='h-[120px] w-[160px] ml-2'/>
                
                <div className='flex flex-row items-center justify-center gap-x-1'>
                    <img src="/initial/ssc.png" alt="ssc logo" className='mr-[-35px] md:mr-[-55px] w-[90px] h-[70px] md:w-[140px] md:h-[90px]'/>
                    <img src="/initial/tcu.png" alt="tcu logo" className='mr-[-15px] md:mr-[0px] w-[90px] h-[70px] md:w-[140px] md:h-[90px]'/>
                </div>
            </div>

            {/* Sub-Header */}
            <div className="flex flex-col items-center z-10">
                <p className="text-center text-[10px] mb-[-10px] mt-4 opacity-80">
                YOUR UNIVERSITY <br /> FIRST EVER
                </p>
                <img src="/initial/voting.png" alt="Voting System" className="w-[150px] h-[150px]" />
            </div>

            {/* Registration Form */}
            <div className="w-[70%] max-w-[400px] flex flex-col gap-y-3 font-bold text-xs md:text-md z-10">
                {/* Student ID */}
                <div className="flex flex-col items-start">
                <label htmlFor="student-id">STUDENT ID</label>
                <input 
                    type="text" 
                    name="student-id" 
                    id="student-id"
                    className="border border-gray-500 w-full h-8 px-2"
                />
                </div>

                {/* Password */}
                <div className="flex flex-col items-start">
                <label htmlFor="password">PASSWORD</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    className="border border-gray-500 w-full h-8 px-2"
                />
                </div>

                {/* Last Name and First Name */}
                <div className="flex flex-row gap-x-3">
                <div className="w-1/2 flex flex-col">
                    <label htmlFor="last-name">LAST NAME</label>
                    <input 
                    type="text" 
                    name="last-name" 
                    id="last-name"
                    className="border border-gray-500 w-full h-8 px-2"
                    />
                </div>

                <div className="w-1/2 flex flex-col">
                    <label htmlFor="first-name">FIRST NAME</label>
                    <input 
                    type="text" 
                    name="first-name" 
                    id="first-name"
                    className="border border-gray-500 w-full h-8 px-2"
                    />
                </div>
                </div>

                {/* Email */}
                <div className="flex flex-col items-start">
                <label htmlFor="email">EMAIL</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    className="border border-gray-500 w-full h-8 px-2"
                />
                </div>

                {/* Course and Section */}
                <div className="flex flex-row gap-x-3">
                <div className="w-4/6 flex flex-col">
                    <label htmlFor="course">COURSE</label>
                    <input 
                    type="text" 
                    name="course" 
                    id="course"
                    className="border border-gray-500 w-full h-8 px-2"
                    />
                </div>

                <div className="w-2/6 flex flex-col">
                    <label htmlFor="section">SECTION</label>
                    <input 
                    type="text" 
                    name="section" 
                    id="section"
                    className="border border-gray-500 w-full h-8 px-2"
                    />
                </div>
                </div>
            </div>

            {/* Register Button */}
            <button className="bg-gray-500 py-2  md:py-3 px-8 md:px-12 text-md md:text-lg font-bold text-white rounded-full my-4 z-10">
                REGISTER
            </button>
        </div>

    )
}