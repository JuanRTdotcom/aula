import React  from 'react'
import Carousel from 'react-elastic-carousel'
import { motion } from 'framer-motion'

const breakPoints = [ 
    {width:1 , itemsToShow : 1},
    {width:550 , itemsToShow : 2},
    {width:768 , itemsToShow : 3},
    {width:1200 , itemsToShow : 4},

]



export default function Home(){
    
  

    return(
        <>
        
        <section className="mx-auto w-100 flex items-center" style={{minHeight:'760px' ,backgroundImage:'url(https://res.cloudinary.com/proper/image/upload/v1626041274/aulavirtual/fondoproperaula_ixfx68.jpg)',backgroundPosition:'center center',backgroundSize: 'cover'}}>
            
        <motion.div
                    initial={{
                        opacity:0
                    }}
                    animate={{
                        opacity:1
                    }}
                    style={{fontSize:'52px',color:'#1EBE66',fontWeight:'900'}}
                    transition={{ delay: 2 }}
                 className="container mx-auto text-proper px-2">
                    APRENDE CON <br></br>
                    LOS EXPERTOS
                </motion.div>
            
        </section>
        <section className="mx-auto w-100 pt-16 pb-20" style={{backgroundPosition:'center center',backgroundSize:'120% auto',backgroundImage:'#F2F2F2'}}>            
                <div className="container mx-auto text-proper px-6 text-4xl pb-8">
                    Conoce Nuestros Programas
                </div>
                <div className="container mx-auto">
                    <Carousel breakPoints = {breakPoints}>
                        <div>
                            <div className="mx-auto px-4   max-w-xl  ">
                                <div className="bg-white  cursor-pointer rounded-lg mb-6 tracking-wide" >
                                    <motion.div
                                    whileHover={{ backgroundSize: 'auto 105%' }}
                                    className="md:flex-shrink-0 w-full h-48 rounded-lg rounded-b-none object-cover" style={{backgroundPosition:'center center',backgroundSize:'auto 120%',backgroundImage:'url(https://res.cloudinary.com/proper/image/upload/v1626450149/aulavirtual/im1_x7ddgq.jpg)'}}>
                                        {/* <img src="https://res.cloudinary.com/proper/image/upload/v1626450149/aulavirtual/im1_x7ddgq.jpg" alt="mountains" className=""/> */}
                                    </motion.div>
                                    <div className="px-4 py-2 mt-1">
                                        <span className="inline-block rounded-md text-gray-50 bg-gray-400 px-2 py-1 text-xs font-light mr-3 mb-1">Marketing</span>
                                        <h2 className="font-bold  text-lg text-gray-800 tracking-normal pb-2" style={{maxWidth:'80%'}}>
                                        Marketing Estrategico y Ventas Efectivas
                                        </h2>                    
                                        <div className="flex items-center justify-start mt-2 mx-0">
                                                <p href="/" className="flex items-center text-gray-800 text-xs mr-3 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-1 text-xs">
                                                    4h. 30min.
                                                    </span>
                                                </p>
                                                <p href="/" className="flex items-center text-gray-800 text-xs mr-3 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                    </svg>
                                                    <span className="ml-1 text-xsm">
                                                    Intermedio
                                                    </span>
                                                </p>
                                                
                                        </div>
                                        <div className="author flex items-center justify-between mx-0 my-3">
                                            <div className="flex justify-start items-center">
                                                <p className="line-through mr-2 text-sm">$59.00</p>
                                                <p className="line-through text-red-500 text-xs">$30 dcto</p>
                                            </div>
                                            <div className="">
                                                <p className="py-1 px-3 bg-green-500 text-white rounded-md flex items-center cursor-pointer ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                        </svg>
                                                        <p className="text-xl ml-1 font-medium">
                                                            $29
                                                            <span className="text-xs">
                                                            .00
                                                            </span> 
                                                        </p>
                                                </p> 
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                        <div>
                            <div className="mx-auto px-4   max-w-xl  ">
                                <div className="bg-white  cursor-pointer rounded-lg mb-6 tracking-wide" >
                                    <motion.div
                                         whileHover={{ backgroundSize: 'auto 105%' }}
                                        className="md:flex-shrink-0 w-full h-48 rounded-lg rounded-b-none object-cover" style={{backgroundPosition:'center center',backgroundSize:'auto 120%',backgroundImage:'url(https://res.cloudinary.com/proper/image/upload/v1626450237/aulavirtual/img2_abud5r.jpg)'}}>
                                        
                                    </motion.div>
                                    <div className="px-4 py-2 mt-1">
                                        <span className="inline-block rounded-md text-gray-50 bg-gray-400 px-2 py-1 text-xs font-light mr-3 mb-1">Marketing</span>
                                        <h2 className="font-bold  text-lg text-gray-800 tracking-normal pb-2" style={{maxWidth:'80%'}}>
                                        Crecimiento Financiero Sostenible
                                        </h2>                    
                                        <div className="flex items-center justify-start mt-2 mx-0">
                                                <p href="/" className="flex items-center text-gray-800 text-xs mr-3 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-1 text-xs">
                                                    4h. 30min.
                                                    </span>
                                                </p>
                                                <p href="/" className="flex items-center text-gray-800 text-xs mr-3 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                    </svg>
                                                    <span className="ml-1 text-xsm">
                                                    Intermedio
                                                    </span>
                                                </p>
                                                
                                        </div>
                                        <div className="author flex items-center justify-between mx-0 my-3">
                                            <div className="flex justify-start items-center">
                                                <p className="line-through mr-2 text-sm">$59.00</p>
                                                <p className="line-through text-red-500 text-xs">$30 dcto</p>
                                            </div>
                                            <div className="">
                                                <p className="py-1 px-3 bg-green-500 text-white rounded-md flex items-center cursor-pointer ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                        </svg>
                                                        <p className="text-xl ml-1 font-medium">
                                                            $29
                                                            <span className="text-xs">
                                                            .00
                                                            </span> 
                                                        </p>
                                                </p> 
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                        <div>
                            <div className="mx-auto px-4   max-w-xl  ">
                                <div className="bg-white  cursor-pointer rounded-lg mb-6 tracking-wide" >
                                    
                                    <motion.div
                                     whileHover={{ backgroundSize: 'auto 105%' }}
                                    className="md:flex-shrink-0 w-full h-48 rounded-lg rounded-b-none object-cover" style={{backgroundPosition:'center center',backgroundSize:'auto 120%',backgroundImage:'url(https://res.cloudinary.com/proper/image/upload/v1626450288/aulavirtual/img3_cejyhd.jpg)'}}>
                                        
                                    </motion.div>
                                    <div className="px-4 py-2 mt-1">
                                        <span className="inline-block rounded-md text-gray-50 bg-gray-400 px-2 py-1 text-xs font-light mr-3 mb-1">Marketing</span>
                                        <h2 className="font-bold  text-lg text-gray-800 tracking-normal pb-2" style={{maxWidth:'80%'}}>
                                        Marketing Estrategico y Ventas Efectivas
                                        </h2>                    
                                        <div className="flex items-center justify-start mt-2 mx-0">
                                                <p href="/" className="flex items-center text-gray-800 text-xs mr-3 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-1 text-xs">
                                                    4h. 30min.
                                                    </span>
                                                </p>
                                                <p href="/" className="flex items-center text-gray-800 text-xs mr-3 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                    </svg>
                                                    <span className="ml-1 text-xsm">
                                                    Intermedio
                                                    </span>
                                                </p>
                                                
                                        </div>
                                        <div className="author flex items-center justify-between mx-0 my-3">
                                            <div className="flex justify-start items-center">
                                                <p className="line-through mr-2 text-sm">$59.00</p>
                                                <p className="line-through text-red-500 text-xs">$30 dcto</p>
                                            </div>
                                            <div className="">
                                                <p className="py-1 px-3 bg-green-500 text-white rounded-md flex items-center cursor-pointer ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                        </svg>
                                                        <p className="text-xl ml-1 font-medium">
                                                            $29
                                                            <span className="text-xs">
                                                            .00
                                                            </span> 
                                                        </p>
                                                </p> 
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                        <div>
                            <div className="mx-auto px-4   max-w-xl  ">
                                <div className="bg-white  cursor-pointer rounded-lg mb-6 tracking-wide" >
                                    <motion.div
                                     whileHover={{ backgroundSize: 'auto 105%' }}
                                    className="md:flex-shrink-0 w-full h-48 rounded-lg rounded-b-none object-cover" style={{backgroundPosition:'center center',backgroundSize:'auto 120%',backgroundImage:'url(https://res.cloudinary.com/proper/image/upload/v1626450492/aulavirtual/img4_bfweqx.jpg)'}}>
                                        
                                    </motion.div>
                                   
                                    <div className="px-4 py-2 mt-1">
                                        <span className="inline-block rounded-md text-gray-50 bg-gray-400 px-2 py-1 text-xs font-light mr-3 mb-1">Marketing</span>
                                        <h2 className="font-bold  text-lg text-gray-800 tracking-normal pb-2" style={{maxWidth:'80%'}}>
                                        Marketing Estrategico y Ventas Efectivas
                                        </h2>                    
                                        <div className="flex items-center justify-start mt-2 mx-0">
                                                <p href="/" className="flex items-center text-gray-800 text-xs mr-3 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-1 text-xs">
                                                    4h. 30min.
                                                    </span>
                                                </p>
                                                <p href="/" className="flex items-center text-gray-800 text-xs mr-3 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                    </svg>
                                                    <span className="ml-1 text-xsm">
                                                    Intermedio
                                                    </span>
                                                </p>
                                                
                                        </div>
                                        <div className="author flex items-center justify-between mx-0 my-3">
                                            <div className="flex justify-start items-center">
                                                <p className="line-through mr-2 text-sm">$59.00</p>
                                                <p className="line-through text-red-500 text-xs">$30 dcto</p>
                                            </div>
                                            <div className="">
                                                <p className="py-1 px-3 bg-green-500 text-white rounded-md flex items-center cursor-pointer ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                        </svg>
                                                        <p className="text-xl ml-1 font-medium">
                                                            $29
                                                            <span className="text-xs">
                                                            .00
                                                            </span> 
                                                        </p>
                                                </p> 
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                        <div>
                            <div className="mx-auto px-4   max-w-xl  ">
                                <div className="bg-white  cursor-pointer rounded-lg mb-6 tracking-wide" >
                                     <motion.div 
                                      whileHover={{ backgroundSize: 'auto 105%' }}
                                     className="md:flex-shrink-0 w-full h-48 rounded-lg rounded-b-none object-cover" style={{backgroundPosition:'center center',backgroundSize:'auto 120%',backgroundImage:'url(https://res.cloudinary.com/proper/image/upload/v1626450288/aulavirtual/img3_cejyhd.jpg)'}}>
                                        
                                    </motion.div>
                                   
                                    <div className="px-4 py-2 mt-1">
                                        <span className="inline-block rounded-md text-gray-50 bg-gray-400 px-2 py-1 text-xs font-light mr-3 mb-1">Marketing</span>
                                        <h2 className="font-bold  text-lg text-gray-800 tracking-normal pb-2" style={{maxWidth:'80%'}}>
                                        Marketing Estrategico y Ventas Efectivas
                                        </h2>                    
                                        <div className="flex items-center justify-start mt-2 mx-0">
                                                <p href="/" className="flex items-center text-gray-800 text-xs mr-3 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-1 text-xs">
                                                    4h. 30min.
                                                    </span>
                                                </p>
                                                <p href="/" className="flex items-center text-gray-800 text-xs mr-3 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                    </svg>
                                                    <span className="ml-1 text-xsm">
                                                    Intermedio
                                                    </span>
                                                </p>
                                                
                                        </div>
                                        <div className="author flex items-center justify-between mx-0 my-3">
                                            <div className="flex justify-start items-center">
                                                <p className="line-through mr-2 text-sm">$59.00</p>
                                                <p className="line-through text-red-500 text-xs">$30 dcto</p>
                                            </div>
                                            <div className="">
                                                <p className="py-1 px-3 bg-green-500 text-white rounded-md flex items-center cursor-pointer ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                        </svg>
                                                        <p className="text-xl ml-1 font-medium">
                                                            $29
                                                            <span className="text-xs">
                                                            .00
                                                            </span> 
                                                        </p>
                                                </p> 
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                        <div>
                            <div className="mx-auto px-4   max-w-xl  ">
                                <div className="bg-white  cursor-pointer rounded-lg mb-6 tracking-wide" >
                                    <motion.div
                                     whileHover={{ backgroundSize: 'auto 105%' }}
                                    className="md:flex-shrink-0 w-full h-48 rounded-lg rounded-b-none object-cover" style={{backgroundPosition:'center center',backgroundSize:'auto 120%',backgroundImage:'url(https://res.cloudinary.com/proper/image/upload/v1626450237/aulavirtual/img2_abud5r.jpg)'}}>
                                        
                                    </motion.div>
                                    <div className="px-4 py-2 mt-1">
                                        <span className="inline-block rounded-md text-gray-50 bg-gray-400 px-2 py-1 text-xs font-light mr-3 mb-1">Marketing</span>
                                        <h2 className="font-bold  text-lg text-gray-800 tracking-normal pb-2" style={{maxWidth:'80%'}}>
                                        Marketing Estrategico y Ventas Efectivas
                                        </h2>                    
                                        <div className="flex items-center justify-start mt-2 mx-0">
                                                <p href="/" className="flex items-center text-gray-800 text-xs mr-3 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="ml-1 text-xs">
                                                    4h. 30min.
                                                    </span>
                                                </p>
                                                <p href="/" className="flex items-center text-gray-800 text-xs mr-3 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                    </svg>
                                                    <span className="ml-1 text-xsm">
                                                    Intermedio
                                                    </span>
                                                </p>
                                                
                                        </div>
                                        <div className="author flex items-center justify-between mx-0 my-3">
                                            <div className="flex justify-start items-center">
                                                <p className="line-through mr-2 text-sm">$59.00</p>
                                                <p className="line-through text-red-500 text-xs">$30 dcto</p>
                                            </div>
                                            <div className="">
                                                <p className="py-1 px-3 bg-green-500 text-white rounded-md flex items-center cursor-pointer ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                        </svg>
                                                        <p className="text-xl ml-1 font-medium">
                                                            $29
                                                            <span className="text-xs">
                                                            .00
                                                            </span> 
                                                        </p>
                                                </p> 
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </Carousel>
                </div>
        </section>

        </>
    )
}