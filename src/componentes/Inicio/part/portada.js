import React from 'react';
// import ReactPlayer from 'react-player';
const Portada = () =>{
    return(
        <>
           <div id="page-title" className="fullscreen text-light page-title-left" data-bg-video="https://res.cloudinary.com/proper/video/upload/v1621614178/Trailers%20y%20V%C3%ADdeos/Presentacion_web_Proper_xkbwlf.mp4">
               
                <div className="container">
                    <div className="page-title FormularioInicioGlass" style={{marginTop: '116px'}}>
                        <h4 className="text-uppercase text-center pt-4 pb-4" style={{lineHeight: '1.3'}}>Suscríbete a nuestro newsletter
                        </h4>
                        <h6 className="text-center mb-4" style={{fontWeight: '400',lineHeight: '1.3'}}>Recibe noticias,
                            convocatorias, recursos, y promociones exclusivas.</h6>
                        <form className="text-center" id="__suscribirte">
                            <div className="form-group">
                                <input className="form-control" id="__email" required="" aria-describedby="emailHelp" placeholder="E-mail" type="email" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="__instruccion" required="" placeholder="Nombres y apellidos" type="text" />
                            </div>
                            <button type="submit" className="boton-proper boton-A btn m-t-20 m-b-10" style={{textTransform:'capitalize'}}>
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Portada;