import { motion , AnimatePresence } from 'framer-motion'
// import { useImperativeHandle, useState } from 'react'

export default function Modal_Login({open,close}){

    return (
        <>
            <AnimatePresence>
              {open && (                    
                  <>
                      <motion.div
                      initial={{
                        opacity : 0
                    }}
                    animate={{
                        opacity : 1,
                        transition:{
                            duration: 0.3
                        }
                    }}
                    exit = {{
                        opacity : 0
                        
                    }}                    
                    onClick={close}
                      className="fondoModal">
                        
                      </motion.div>
                      <motion.div  
                          initial={{
                              opacity : 0
                          }}
                          animate={{
                              opacity : 1,
                              transition:{
                                  duration: 0.3
                              }
                          }}
                          exit = {{
                              opacity : 0
                              
                          }}
                          className="container ModalLogin mx-auto">
                              <div className="flex justify-center">
                                  
                                  <div className="w-full xl:w-4/4 lg:w-12/12 flex">
                                  
                                      <div
                                          className="w-full h-auto bg-gray-400 hidden lg:block lg:w-6/12 bg-cover rounded-l-lg"
                                          style={{backgroundImage: "url('https://res.cloudinary.com/proper/image/upload/v1627239355/aulavirtual/loginImagen_hgnxf8.jpg'"}}
                                      ></div>
                                      
                                      <div className="w-full lg:w-8/12 p-5 rounded-lg lg:rounded-l-none" style={{background:'#EDEBEB'}}>
                                          <div className="px-8 mb-4 text-center">
                                              <h3 className="pt-4 mb-2 text-2xl"  >Registrarse</h3>
                                              <p className="mb-4 text-sm text-gray-700">
                                                  o registrarse mediante su email
                                              </p>
                                          </div>
                                          <form className="px-8 pt-6 pb-8 mb-4 bg-transparent rounded">
                                              
                                              <div class="flex my-4">
                                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center mdi mdi-account-outline text-gray-400 text-lg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>                                                    
                                                 </div>
                                                 <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Nombre"/>
                                              </div>
                                              <div class="flex my-4">
                                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center mdi mdi-account-outline text-gray-400 text-lg">
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                  </svg>                                                
                                                 </div>
                                                 <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="E-mail"/>
                                              </div>
                                              <div class="flex my-4">
                                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center mdi mdi-account-outline text-gray-400 text-lg">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                    </svg>                                               
                                                 </div>
                                                 <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Contraseña"/>
                                              </div>
                                              <div className="mb-6 text-center">
                                                  <button
                                                      className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
                                                      type="button"
                                                  >
                                                      Registrarse
                                                  </button>
                                              </div>
                                              <hr className="mb-6 border-t" />
                                              {/* <div className="text-center">
                                                  <a
                                                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                                      href="./register.html"
                                                  >
                                                      Create an Account!
                                                  </a>
                                              </div> */}
                                              {/* <div className="text-center">
                                                  <a
                                                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                                      href="./index.html"
                                                  >
                                                      Already have an account? Login!
                                                  </a>
                                              </div> */}
                                          </form>
                                      </div>
                                  </div>
                              </div>
                          </motion.div>
                  </>
              )}

          </AnimatePresence>
        </>
    )
}