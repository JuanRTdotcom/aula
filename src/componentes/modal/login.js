import { motion , AnimatePresence } from 'framer-motion'
import { useContext, useState } from 'react';
import StateLog from './stateLog'
import {Context} from '../../contextos/userContext'

// import { useImperativeHandle, useState } from 'react'

export default function Modal_Login({open,close}){
    const miContexto = useContext(Context)
    const [estadoLogin,setEstadoLogin] = useState(miContexto);
    
    
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
                                          <div style={{width:'100%',maxWidth:'300px',margin:'auto'}}>
                                            <StateLog estado={estadoLogin.stateUserLogin} />
                                          </div>
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