import Carousel from 'react-elastic-carousel'

const breakPoints = [ 
    {width:1 , itemsToShow : 1},
    {width:550 , itemsToShow : 2},
    {width:768 , itemsToShow : 3},
    {width:1200 , itemsToShow : 4},

]
export default function Home(){
    
    return(
        <>
        <section className="mx-auto w-100 flex items-center" style={{minHeight:'760px' ,background:'url(https://res.cloudinary.com/proper/image/upload/v1626041274/aulavirtual/fondoproperaula_ixfx68.jpg)center',backgroundSize: 'cover'}}>
            
                <div className="container mx-auto text-proper px-2" style={{fontSize:'52px',color:'#1EBE66',fontWeight:'900'}}>
                    APRENDE CON <br></br>
                    LOS EXPERTOS
                </div>
            
        </section>
        <section className="mx-auto w-100 pt-20 pb-20">            
                <div className="container mx-auto text-proper px-2 text-4xl pb-8">
                    Conoce Nuestros Programas
                </div>
                <div>
                    <Carousel breakPoints = {breakPoints}>
                        <div>
                            uno
                        </div>
                        <div>
                            dos
                        </div>
                        <div>
                            cuatro
                        </div>
                        <div>
                            tres
                        </div>
                    </Carousel>
                </div>
        </section>

        
        
        
        </>
    )
}