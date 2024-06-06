import React from 'react'

function Header() {
  return (
    <div className='h-[130px]  bg-white w-full text-black flex items-center justify-between pl-6 pr-6'>
        <div className='flex items-center justify-center '>logo</div>
        <div className='h-full flex w-11/12  flex-row'>
          <nav className=' font-medium flex items-center flex-row w-full h-full text-[23px] justify-between'>
           <div className='h-full justify-center items-center flex gap-5 '>
            <div className='w-[120px] flex justify-center'>Home</div>
            <div className='w-[150px] h-full items-center flex justify-center group  '>
              Service


              <div className="absolute h-3/4 left-0 w-full group-hover:block top-32  bg-green-400  p-4 ">
                <div className='w-full h-full flex'>
                  {/* services */}
                  <div className='w-[600px] bg-gray-400 h-full'>
                    <div>Services</div>
                    <div className='ml-10 flex flex-col gap-5'>
                    <div className='ml- flex gap-4 m-4'>
                      <div>image</div>
                    <div className='flex flex-col '>
                     <div>Private Audits</div>
                     <div className='font-extralight'>industry-leading smart contract smart services</div>
                    </div>
                    </div>

                    <div className='ml- flex gap-4 m-4'>
                      <div>image</div>
                    <div className='flex flex-col '>
                     <div>Open Audits</div>
                     <div className='font-extralight'>compete hack and win prizes</div>
                    </div>
                    </div>
                    
                    <div className='ml- flex gap-4 m-4'>
                      <div>image</div>
                    <div className='flex flex-col '>
                     <div>Education</div>
                     <div className='font-extralight'>Learn how to build web3 projects and audit them</div>
                    </div>
                    </div>

                    <div className='ml- flex gap-4 m-4'>
                      <div>image</div>
                    <div className='flex flex-col '>
                     <div>Reaserch platform</div>
                     <div className='font-extralight'>the ultimate security research tool</div>
                    </div>
                    </div>


                    </div>
                  </div>
                  {/* supported chains */}
                  <div className='w-[350px] bg-gray-400 h-full'>
                    <div>Supported Chain</div>
                    <div className='w-full flex-col'>
                   <div className='flex  flex-row justify-center gap-4 h-[100px]'>
                      <div>photo</div>
                      <div>Ethereum</div>
                   </div>
                   <div className='flex  flex-row justify-center h-[100px] gap-4'>
                      <div>photo</div>
                      <div>Ethereum</div>
                   </div>
                   <div className='flex  flex-row justify-center h-[100px] gap-4'>
                      <div>photo</div>
                      <div>Ethereum</div>
                   </div>
                   <div className='flex  flex-row justify-center h-[100px] gap-4'>
                      <div>photo</div>
                      <div>Ethereum</div>
                   </div>
                   <div className='flex  flex-row justify-center h-[100px] gap-4'>
                      <div>photo</div>
                      <div>Ethereum</div>
                   </div>
                   <div className='flex  flex-row justify-center h-[100px] gap-4'>
                      <div>photo</div>
                      <div>Ethereum</div>
                   </div>
                   </div>

                    
                  </div>
                  {/* last */}
                  <div className='flex bg-[#ffff] flex-1 h-full '>

                  </div>

                </div> 
              </div>
            </div>
            <div className='w-[170px] flex justify-center'>Resources</div>
           </div>
            <ul className='flex'>
              <li><button>Request Audit</button></li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default Header