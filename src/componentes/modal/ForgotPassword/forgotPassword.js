export default function ForgotPassword(){
    return(
        <>
          
      <div className="mb-4 text-center">
        <h3 className="pt-4 my-2 mt-10 text-2xl" style={{fontSize:'50px',color:'#00E579',lineHeight:'1.1'}}>Restaurar Contraseña</h3>
        <p className="mb-1 text-sm mt-6 text-gray-700">
        Ingresa el correo electrónico con el que te registraste
        y en breve te enviaremos un enlace para restaurar tu
        contraseña.
        </p>
      </div>
      <form className="px-8 pt-6 pb-8 mb-4 bg-transparent rounded">
        <div class="flex my-4">
          <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center mdi mdi-account-outline text-gray-400 text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <input
            type="text"
            class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
            placeholder="E-mail"
          />
        </div>
        <div className="mb-6 text-center">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline"
            type="button"
          >
            Restaurar
          </button>
        </div>
        
        <div className="text-center">
          <a
            className="inline-block text-sm text-green-400 align-baseline hover:text-green-500"
            href="./index.html"
          >
            Ingresar
          </a>
        </div>
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
        </>
    )
}