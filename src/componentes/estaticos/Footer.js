// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import { UilFacebookF,UilInstagram,UilYoutube } from '@iconscout/react-unicons'
import {  } from '@iconscout/react-unicons'
export default function Footer(){
    return (
        <>
   <footer className="pt-10 sm:mt-10 pt-10" style={{background:'#EDEDED'}}>
    <div className="container mx-auto text-gray-900 flex flex-wrap justify-left">
        
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12 titulosFooter">
            
            <div className="text-xs  font-medium mb-6" style={{color:'#141416'}}>
                Legal
            </div>

            
            <a href="/" className="my-3 block text-gray-300 hover:text-gray-900 text-sm font-medium duration-700">
                Términos y condiciones
            </a>
            <a href="/" className="my-3 block text-gray-300 hover:text-gray-900 text-sm font-medium duration-700">
                Políticas de contratación
            </a>
            <a href="/" className="my-3 block text-gray-300 hover:text-gray-900 text-sm font-medium duration-700">
                Políticas de privacidad
            </a>
            <a href="/" className="my-3 block text-gray-300 hover:text-gray-900 text-sm font-medium duration-700">
                Políticas de cookies
            </a>
            <a href="/" className="my-3 block text-gray-300 hover:text-gray-900 text-sm font-medium duration-700">
                Libro de reclamaciones
            </a>
           
        </div>

        
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12 titulosFooter">
            
            <div className="text-xs  text-gray-400 font-medium mb-6"  style={{color:'#141416'}}>
                Comunidad
            </div>

            
            <a href="/" className="my-3 block text-gray-300 hover:text-gray-900 text-sm font-medium duration-700">
                ¿Qué es Proper?
            </a>
            <a href="/" className="my-3 block text-gray-300 hover:text-gray-900 text-sm font-medium duration-700">
                Contenido gratis
            </a>
            <a href="/" className="my-3 block text-gray-300 hover:text-gray-900 text-sm font-medium duration-700">
                Programas
            </a>
        </div>

        
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12 titulosFooter">
            
            <div className="text-xs  text-gray-400 font-medium mb-6"  style={{color:'#141416'}}>
                Encuéntranos en
            </div>
        <div className="flex items-center justify-start space-x-4 ">
            
                <a href="/" className="w-6 mx-1">
                    <UilYoutube size="32" />                    
                </a>
                <a href="/" className="w-6 mx-1">                    
                    <UilInstagram size="32" />
                </a>
                <a href="/" className="w-6 mx-1">                    
                    <UilFacebookF size="32" />
                </a>
        </div>
            <div className="my-3 block mt-4 text-gray-300 hover:text-gray-900 text-sm font-medium duration-700" style={{color: '#818182'}}>
                contacto@proper.pe
            </div>
        </div>

        
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            
            <div className="text-xs titulosFooter text-right uppercase text-gray-400 font-medium mb-6">
            <img
                      alt="example"
                      src="https://res.cloudinary.com/proper/image/upload/v1624335954/correo/LOGO_NEGRO_rfel31_1_spfewr_wqvb7l_rsylmw.png"
                      style={{
                        width: "130px",
                        opacity: "0.4",
                        objectFit: "cover",
                        display: 'inline'
                      }}
                    ></img>
            </div>

        </div>
    </div>

    <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5
             border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl">
            <div className="mt-2 mx-auto">
            Copyright © 2021 Proper - Todos los derechos reservados
            </div>

        </div>
    </div>
</footer>
        </>
    )
}