import React from 'react';
const TopBar = () =>{
    // const logo = 'https://res.cloudinary.com/proper/image/upload/v1618984030/LOGO_BLANCO_rfel31.svg'
    return(
        <>
           <div id="topbar" className="dark topbar-colored topbar-fullwidth d-none">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="top-menu w-100 text-center">
                           
                            <li><a href="/" className="m-0" id="mensajeTopBar">AQUÍ VA UN ANUNCIO U OFERTA</a></li>
                        </ul>
                    </div>                    
                </div>
            </div>
        </div>
            
        </>
    )
}
export default TopBar;