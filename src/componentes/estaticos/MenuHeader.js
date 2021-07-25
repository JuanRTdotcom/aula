import React , { Fragment, forwardRef, useImperativeHandle, useState,useRef } from 'react'
import { Disclosure} from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'
import { motion , AnimatePresence } from 'framer-motion'


const navigation = [
  // { name: 'Programas', href: 'Programas', current: false },
//   { name: 'Cursos', href: '#', current: false },
//   { name: 'Comunidad', href: '#', current: false }
]

const ModalLogin = forwardRef((props,ref)=>{
  const [open, setOpen] = useState(false)

  useImperativeHandle(ref,()=>{
      return {
          open:() => setOpen(true),
          close:() => setOpen(false)
      }
  })

  return(
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
                          onClick={()=>setOpen(false)}
                          class="container mx-auto">
                              <div class="flex justify-center px-6 my-12">
                                  
                                  <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                                  
                                      <div
                                          class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                                          style={{backgroundImage: "url('https://source.unsplash.com/oWTW-jNGl9I/600x800'"}}
                                      ></div>
                                      
                                      <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                                          <div class="px-8 mb-4 text-center">
                                              <h3 class="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
                                              <p class="mb-4 text-sm text-gray-700">
                                                  We get it, stuff happens. Just enter your email address below and we'll send you a
                                                  link to reset your password!
                                              </p>
                                          </div>
                                          <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                              <div class="mb-4">
                                                  <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                                                      Email
                                                  </label>
                                                  <input
                                                      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                      id="email"
                                                      type="email"
                                                      placeholder="Enter Email Address..."
                                                  />
                                              </div>
                                              <div class="mb-6 text-center">
                                                  <button
                                                      class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                                                      type="button"
                                                  >
                                                      Reset Password
                                                  </button>
                                              </div>
                                              <hr class="mb-6 border-t" />
                                              <div class="text-center">
                                                  <a
                                                      class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                                      href="./register.html"
                                                  >
                                                      Create an Account!
                                                  </a>
                                              </div>
                                              <div class="text-center">
                                                  <a
                                                      class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                                      href="./index.html"
                                                  >
                                                      Already have an account? Login!
                                                  </a>
                                              </div>
                                          </form>
                                      </div>
                                  </div>
                              </div>
                          </motion.div>
                  </>
              )}

          </AnimatePresence>
  )
})

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MenuHeader() {

  const modalRef = useRef()

  return (
    <Disclosure as="nav" className="bg-gray-800 z-10 fixed w-full top-0" style={{background:'#141416'}}>
      {({ open }) => (
        <>
       
          <div className="container mx-auto px-2">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <NavLink to="/" className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://res.cloudinary.com/proper/image/upload/v1618984030/LOGO_BLANCO_rfel31.svg"
                    alt="Proper"
                    style={{width:'110px'}}
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://res.cloudinary.com/proper/image/upload/v1618984030/LOGO_BLANCO_rfel31.svg"
                    alt="Proper"
                    style={{width:'110px'}}
                  />
                </NavLink>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-normal'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}
                <button className="bg-transparent p-1">
                  <span className="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-normal">Ingresar</span>
                </button>
                <button onClick={()=> modalRef.current.open()} className="bg-transparent p-1">
                  <span className="text-white hover:bg-green-600 px-3 py-2 rounded-md text-sm font-light bg-green-500 transition duration-200" 
                  
                  >Registrarse</span>
                </button>
                
                {/* Profile dropdown */}
                {/* <Menu as="div" className="ml-3 relative">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm text-gray-700'
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu> */}
              </div>
            </div>
          </div>
          <ModalLogin ref={modalRef}/>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

