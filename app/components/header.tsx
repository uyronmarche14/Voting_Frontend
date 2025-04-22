import Image from "next/image"

export default function Header () {
    return <header className="z-1 fixed top-0 inset-x-0 bg-red-500 px-4 py-2 flex justify-between items-center">
              <Image
                src="/initial/name.png"
                alt="TCU name"
                width={160}
                height={120}
                className="h-[120px] w-auto"
                priority
              />
    
              <div className="flex items-center">
                <Image
                  src="/initial/ssc.png"
                  alt="SSC logo"
                  width={140}
                  height={90}
                  className="w-[90px] h-auto md:w-[140px]"
                />
                <Image
                  src="/initial/tcu.png"
                  alt="TCU logo"
                  width={140}
                  height={90}
                  className="w-[90px] h-auto md:w-[140px]"
                />
              </div>
            </header>
}