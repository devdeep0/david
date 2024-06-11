import React from 'react'
import Image from 'next/image'
function HeroSection() {
  return (
    <div className=' h-auto w-full bg-custom-gradient flex flex-col gap-9 pt-[130px]'>
        {/* top */}
      <div className='flex flex-row'>
        <div className='h-[600px] w-full gap-9  flex justify-center  flex-col'>
            <div className='pl-10 text-6xl'>World-class smart contract security audits, tools and education</div>
            <div className='pl-10 text-xl'>We bring world-class smart contract audits, tools, and education to hundreds of thousands of users, partners, and blockchain protocols.</div>
            <div className='text-xl font-semibold pl-10 flex items-start gap-5'>
                <button className='bg-white  p-1 h-[50px] w-[200px]  text-black rounded-md text-md border-[#e0e5e9] border-2'>Learn about audit</button>
                <button className='bg-[#01e101] p-1 w-[200px] h-[50px]  text-white rounded-md  '>Request an audit</button>
            </div>
        </div>
        <div className='h-[600px] w-full '></div>
      </div>

        {/* mid */}

        <div className='h-[400px] gap-4 flex flex-col justify-center items-center w-full bg-blue-400'>
            <div className='font-semibold text-xl'>Trusted by the biggest protocols and chains</div>
            <div className='w-3/4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora veritatis labore molestias error ullam eligendi itaque earum vel eum id rem placeat, corporis laborum nostrum quo magni voluptatibus quod pariatur?
            Iusto sapiente quo voluptate perferendis saepe illum eligendi praesentium nesciunt cupiditate, perspiciatis quas, beatae dolore animi dolorem odit alias nam libero quae temporibus? Sed ex cupiditate ea delectus nemo voluptates!</div>
        </div>

        {/* second */}
      
        {/* third */}
        <div>
        <div className='bg-white p-6 text-black gap-4 h-auto w-full flex flex-col pl-10 justify-center'>
        <div className='text-4xl font-bold'>We’re helping secure over $10B of DeFi TVL</div>
        <div className='w-3/6 text-xl font-light'>Cyfrin helps secure some of the top protocols and organizations in DeFi. We combine top leading researchers to enhance the security of our customers and their users.</div>
      </div>
        <div className='flex flex-row'>
        <div className='pl-10 h-[600px] w-full gap-16 bg-white text-black flex justify-center  flex-col'>
            
           <div className='flex flex-row items-center justify-center gap-4'>
           <div className='w-[70px]'><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12L11 14L15 9.99999M20 12C20 16.4611 14.54 19.6937 12.6414 20.683C12.4361 20.79 12.3334 20.8435 12.191 20.8712C12.08 20.8928 11.92 20.8928 11.809 20.8712C11.6666 20.8435 11.5639 20.79 11.3586 20.683C9.45996 19.6937 4 16.4611 4 12V8.21759C4 7.41808 4 7.01833 4.13076 6.6747C4.24627 6.37113 4.43398 6.10027 4.67766 5.88552C4.9535 5.64243 5.3278 5.50207 6.0764 5.22134L11.4382 3.21067C11.6461 3.13271 11.75 3.09373 11.857 3.07827C11.9518 3.06457 12.0482 3.06457 12.143 3.07827C12.25 3.09373 12.3539 3.13271 12.5618 3.21067L17.9236 5.22134C18.6722 5.50207 19.0465 5.64243 19.3223 5.88552C19.566 6.10027 19.7537 6.37113 19.8692 6.6747C20 7.01833 20 7.41808 20 8.21759V12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> </div>
            <div className='flex flex-col gap-2'>
            <div className='text-2xl font-semibold'>Enhance the security of your protocol</div>
            <div className='text-xl font-light'>Trusted by the worlds biggest protocols, we only involve lead researchers for the highest security standards.</div>
            </div>
           </div>
           <div className='flex flex-row items-center justify-center gap-4'>
           <div className='w-[70px]'><svg fill="#000000" viewBox="0 0 24 24" id="up-trend-round" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" className="icon flat-line"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path id="primary" d="M21,7l-6.79,6.79a1,1,0,0,1-1.42,0l-2.58-2.58a1,1,0,0,0-1.42,0L3,17" style={{fill: "none", stroke: "#000000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2}}></path><polyline id="primary-2" data-name="primary" points="21 11 21 7 17 7" style={{fill: "none", stroke: "#000000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2}}></polyline></g></svg>
           </div>
            <div className='flex flex-col gap-2'>
            <div className='text-2xl font-semibold'>Level up your engineering team</div>
            <div className='text-xl font-light'>Our security engineers will work with your team to improve your code to the best security practices.</div>
            </div>
           </div>
           <div className='flex flex-row items-center justify-center gap-4'>
           <div className='w-[60px]'><svg fill="#000000" viewBox="-3 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12.365 10.832a.473.473 0 0 1-.012.106q.012.179.012.37c0 3.239-5.865 5.063-5.865 5.063S.635 14.547.635 11.307q0-.19.012-.37a.473.473 0 0 1-.012-.105V3.643a.476.476 0 0 1 .475-.475h10.78a.476.476 0 0 1 .475.475zm-2.291-2.554a.476.476 0 0 0-.475-.475h-1.89v-1.89a.476.476 0 0 0-.474-.474h-1.47a.476.476 0 0 0-.475.475v1.889H3.401a.476.476 0 0 0-.475.475v1.47a.476.476 0 0 0 .475.474h1.89v1.889a.476.476 0 0 0 .474.475h1.47a.476.476 0 0 0 .475-.475v-1.889h1.889a.476.476 0 0 0 .475-.475z"></path></g></svg></div>
            <div className='flex flex-col gap-2'>
            <div className='text-2xl font-semibold'>Establish trust with your users</div>
            <div className='text-xl font-light'>Smart contract audits are vital in communicating maturity and safety to your users.</div>
            </div>
           </div>
            <div className='text-xl font-semibold pl-10 flex items-start gap-5'>
            <button className='bg-white  p-1 h-[50px] w-[200px]  text-black rounded-md text-md border-[#e0e5e9] border-2'>Learn about audit</button>
            <button className='bg-[#01e101] p-1 w-[200px] h-[50px]  text-white rounded-md  '>Request an audit</button>
            </div>
        </div>
        <div className='h-[600px] w-full bg-white'></div>
      </div>
      </div>

        {/* fourth */}

        <div className='h-[500px] gap-8 flex flex-col justify-center items-center w-full '>
            <div className='text-xl'>Supported Chains</div>
            <div className='font-semibold text-4xl'>Bringing security to every chain</div>
            <div className='flex gap-10'>
        <div className='h-[80px] w-[80px]'><Image
                src="/chains/ethereum-cryptocurrency-icon-2048x2029-a37wbe09.png"
                alt=''
                height={100}
                width={100}
                /></div>
                <div className='h-[80px] w-[80px]'><Image
                src="/chains/73895099.png"
                alt=''
                height={100}
                width={100}
                /></div>
                <div className='h-[80px] w-[80px]'><Image
                src="/chains/arbitrum-arb-logo.png"
                alt=''
                height={100}
                width={100}
                /></div>
                <div className='h-[80px] w-[80px]'><Image
                src="/chains/Avalanche_logo_without_text.png"
                alt=''
                height={100}
                width={100}
                /></div>
                <div className='h-[80px] w-[80px]'><Image
                src="/chains/base-logo-in-blue.png"
                alt=''
                height={100}
                width={100}
                /></div>
                <div className='h-[80px] w-[80px]'><Image
                src="/chains/Binance_Logo.png"
                alt=''
                height={100}
                width={100}
                /></div>
                <div className='h-[80px] w-[80px]'><Image
                src="/chains/DPYBKVZG55EWFHIK2TVT3HTH7Y.png"
                alt=''
                height={100}
                width={100}
                /></div>
                <div className='h-[80px] w-[80px]'><Image
                src="/chains/optimism-ethereum-op-logo.png"
                alt=''
                height={100}
                width={100}
                /></div>
                <div className='h-[80px] w-[80px]'><Image
                src="/chains/Solana_logo.png"
                alt=''
                height={100}
                width={100}
                /></div>
            </div>
        </div>

        {/* fifth */}
        <div className='h-auto  flex flex-col justify-center items-center w-full bg-red-400'>
            <div className='flex mt-10 flex-col justify-center items-center gap-4'>
                <div className=' text-xl'>Our Platforms</div>
                <div className='font-semibold text-4xl'>Securing the blockchain ecosystem, one platform at a time</div>
                <div className='text-2xl font-light'>We’re reshaping the blockchain security landscape with advanced tools and platforms, serving thousands of developers and protocols every day.</div>
            </div>

            <div className=' flex flex-row justify-evenly w-full'>
                <div className='gap-5 h-[600px] ml-10 mr-10 w-3/6 bg-green-400 flex flex-col justify-center p-5 '>
                    <div className='text-5xl font-bold'>Competitive Audits Platform</div>
                    <div className='text-2xl'>CodeHawks helps protect protocols, users, and funds through competitive smart contract audits performed by top world auditors and our community.</div>
                    <div><button  className='bg-white  p-1 h-[50px] w-[200px]  text-black rounded-md text-md border-[#e0e5e9] border-2'>go to code hawks</button></div>
                </div>
                <div className=' h-[600px]  mr-10 w-3/6 bg-green-400'></div>
            </div>

            <div className=' flex flex-row justify-evenly w-full'>
                <div className='gap-5 h-[600px] ml-10 mr-10 w-3/6 bg-purple-400 flex flex-col justify-center p-5 '>
                   
                </div>
                <div className=' h-[600px]  mr-10 w-3/6 bg-purple-400 flex flex-col justify-center p-5 gap-5'>
                <div className='text-5xl font-bold'>Competitive Audits Platform</div>
                    <div className='text-2xl'>CodeHawks helps protect protocols, users, and funds through competitive smart contract audits performed by top world auditors and our community.</div>
                </div>
            </div>
            
            <div className=' flex flex-row justify-evenly w-full'>
                <div className='gap-5 h-[600px] ml-10 mr-10 w-3/6 bg-green-400 flex flex-col justify-center p-5 '>
                    <div className='text-5xl font-bold'>Competitive Audits Platform</div>
                    <div className='text-2xl'>CodeHawks helps protect protocols, users, and funds through competitive smart contract audits performed by top world auditors and our community.</div>
                    <div><button className='bg-white  p-1 h-[50px] w-[200px]  text-black rounded-md text-md border-[#e0e5e9] border-2'>go to code hawks</button></div>
                </div>
                <div className=' h-[600px]  mr-10 w-3/6 bg-green-400'></div>
            </div>

            {/* sixth */}
        </div>
        <div className='text-black bg-white gap-6 h-auto p-9 w-full flex flex-col pl-10 justify-center'>
            <div className='text-5xl font-bold'>The blockchain security problem</div>
            <div className='w-3/6 text-2xl'>More than $2B is stolen every year from on-chain protocol hacks. Were here to solve this.</div>
            <div className='flex flex-wrap h-auto gap-5 m-5 w-full'>
                <div className='h-[300px]  gap-5 text-black bg-white p-5 w-[350px] flex flex-col'>
                    <div className='text-7xl font-bold text-[#01e101] '>120+</div>
                    <div className='font-bold text-2xl text-[#3d3d3d]'>Avg number of bugs in smart contracts</div>
                    <div>Every protocol on any chain can be the target of exploits. Security is an interoperable standard.</div>
                </div>
                <div className='h-[300px]  gap-5 text-black bg-white p-5 w-[350px] flex flex-col'>
                    <div className='text-7xl font-bold text-[#01e101] '>10+</div>
                    <div className='font-bold text-2xl text-[#3d3d3d]'>Projects hacked</div>
                    <div>Every year, hundreds of protocols get hacked. The majority, had never been properly audited.</div>
                </div>
                <div className='h-[300px]  gap-5 text-black bg-white p-5 w-[350px] flex flex-col'>
                    <div className='text-7xl font-bold text-[#01e101] '>$1B+</div>
                    <div className='font-bold text-2xl text-[#3d3d3d]'>TVL stolen</div>
                    <div>DeFi protocols suffer millions of dollars in losses to exploits every year due to insufficient security practices.</div>
                </div>
                <div className='h-[300px]  gap-5 text-black bg-white p-5 w-[350px] flex flex-col'>
                    <div className='text-7xl font-bold text-[#01e101] '>30+</div>
                    <div className='font-bold text-2xl text-[#3d3d3d]'>Cross-chain protocols hacked</div>
                    <div>Every year tens of cross-chain protocols get hacked, uncovering the needs for outstanding security standards</div>
                </div>
            </div>
        </div>

         {/* seventh */}
        <div>
        <div className='flex flex-row'>
        <div className='bg-white h-[800px] w-full p-6 text-black gap-4 flex flex-col pl-10 justify-center'>
            <div className='font-bold text-[#01e101]'>Our mission</div>
        <div className='text-4xl font-bold'>We’re on a mission to secure the future of finance</div>
        <div className=' text-xl font-light'>Cyfrin is committed to bringing industry-leading smart contract security audits and education to our partners, their projects, customers, and developers at all levels worldwide.</div>
        <div className=' text-xl font-light'>Were on a mission to create a secure, safe, reliable, and transparent on-chain environment for everyone.</div>
      </div>
      <div className='h-[800px] w-full z-0 relative bg-white'>
        <div className='h-[300px] top-44 left-16 absolute'>
            <Image
            src='/40a3c03e2d8f4341a0730195c24dbefd.png'
            alt=''
            height={500}
            width={500}
            />
        </div>
      </div>
      </div>

        </div>

        {/* eight */}

        <div>
            <div></div>
        <div className='bg-white p-6 text-black gap-4 h-auto w-full flex flex-col pl-10 justify-center'>
        <div className='w-4/6 text-4xl font-bold'>We’re making protocols safer— but don’t just take our word for it</div>
        <div className='w-4/6 text-xl font-light'>Heres a sneak peek into our previous smart contract audits and how weve helped secure tens of billions of dollars across blockchains and protocols.</div>
      </div>
        </div>

    </div>
  )
}

export default HeroSection