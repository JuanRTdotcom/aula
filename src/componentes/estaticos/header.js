// import React from "react";
// import { ShoppingCartOutlined,ClockCircleOutlined,BarChartOutlined } from "@ant-design/icons";
// import { Button } from "antd";
// import { Card, Row, Col } from "antd";
// import OwlCarousel from "react-owl-carousel2";
// import "react-owl-carousel2/lib/styles.css";
// import "react-owl-carousel2/src/owl.theme.default.css";



// // import 'owl.carousel/dist/assets/owl.carousel.min.css'
// // import 'owl.carousel/dist/assets/owl.theme.default.min.css'

// const Header = () => {
//   // function onChange(a, b, c) {
//   //     console.log(a, b, c);
//   //   }
//   const { Meta } = Card;
//   const options = {
//     items: 4,
//     dots: true,
//     rewind: true,
//     autoplay: true,
//   };
//   const logo =
//     "https://res.cloudinary.com/proper/image/upload/v1618984030/LOGO_BLANCO_rfel31.svg";
//   return (
//     <>
//       <div className="body-inner">
       
//         <header id="header" className="dark">
//           <div
//             className="header-inner"
//             style={{
//               background: "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
//             }}
//           >
//             <div className="container">
//               <div id="logo">
//                 <a href="/">
//                   <span className="logo-default">
//                     <img src={logo} alt="" />
//                   </span>
//                   <span className="logo-dark">
//                     <img src={logo} alt="" />
//                   </span>
//                 </a>
//               </div>

//               <div id="mainMenu" className="menu-right menu-lowercase">
//                 <div>
//                   <nav>
//                     <ul>
//                       <li className="dropdown">
//                         <a href="/" style={{ verticalAlign: "text-bottom" }}>
//                           <ShoppingCartOutlined />
//                         </a>
//                       </li>
//                       <li>
//                         <a href="/">Ingresar</a>
//                       </li>
//                       <li>
//                         <Button
//                           style={{
//                             background: "#1EBE66",
//                             border: "0",
//                             color: "white",
//                             fontFamily: "Blender Pro",
//                             borderRadius: "5px",
//                             padding: "4px 8px",
//                           }}
//                         >
//                           Registrarse
//                         </Button>
//                       </li>
//                     </ul>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>
       

//         <section
//           id="page-title"
//           className="text-light"
//           style={{
//             backgroundImage:
//               "url(https://res.cloudinary.com/proper/image/upload/v1626041274/aulavirtual/fondoproperaula_ixfx68.jpg)",
//             backgroundSize: "cover",
//             backgroundPosition: "center top",
//             top: "-120px",
//             marginBottom: "-124px",
//             position: "relative",
//             padding: "50vh 0px 30vh",
//           }}
//         >
//           <div className="container">
//             <div className="page-title">
//               <div className="text-left" id="tituloHeaderAula">
//                 APRENDE CON <br></br>
//                 LOS EXPERTOS
//               </div>
//             </div>
//           </div>
//         </section>
//         <section style={{ padding: "30px 0 15px 0" }}>
//           <div className="container">
//             <Row>
//               <Col span={24}>
//                 <h1>Conoce Nuestros Programas</h1>
//               </Col>
//             </Row>
//           </div>
//         </section>

//         <section style={{ paddingTop: "0",background:'#F2F2F2' }}>
//           <div className="container">
//             <OwlCarousel options={options}>
//               <div>
//                 <Card
//                   className="item"
//                   style={{ width: '90%', borderRadius : '10px',overflow: 'hidden' }}
//                   cover={
//                     <img
//                       alt="example"
//                       src="https://res.cloudinary.com/proper/image/upload/v1626450492/aulavirtual/img4_bfweqx.jpg"
//                     />
//                   }
//                 >
//                   <div>
//                     <span class="badge badge-secondary">Marketing</span>
//                     <h5 style={{fontSize:'18px',marginTop:'5px' , marginBottom: '15px'}} >Marketing estratégico y Ventas Efectivas</h5>
//                     <div style={{display:'flex', marginBottom: '15px'}}>
//                       <div style={{ color: 'black' , marginRight: '15px'}}>
//                         <ClockCircleOutlined style={{ marginRight: '5px', verticalAlign: 'unset' }}/>
//                         <span style={{fontSize:'12px'}}>4h. 30min.</span>
//                       </div>
//                       <div style={{ color: 'black' , marginRight: '15px'}}>
//                         <BarChartOutlined style={{ marginRight: '5px', verticalAlign: 'unset' }}/>
                        
//                         <span style={{fontSize:'12px'}}>Intermedio</span>
//                       </div>

//                     </div>
//                     <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
//                       <div style={{display:'flex'}}>
//                         <h5 style={{fontSize:'14px',marginRight:'5px',marginBottom:'0'}}>$<span>59.00</span></h5>
//                         <h5 style={{color:'#F83363',fontSize:'11px',marginBottom:'0',textDecoration:'line-through'}}>$<span>30.00</span></h5>
//                       </div>
//                       <div>
//                         <Button type="success" style={{padding:'4px 10px',background:'#1EBE66',borderRadius:'7px',border:'0'}} icon={<ShoppingCartOutlined style={{fontSize:'15px',verticalAlign:'text-top',marginRight:'8px',color:'#fff'}}/>}>
//                           <h5 style={{color:'#FFF',fontSize:'20px',display:'inline'}}>$<span>29</span></h5>
//                           <h5 style={{color:'#FFF',fontSize:'15px',display:'inline'}}>.<span>00</span></h5>
//                         </Button>
                        
//                       </div>
                      
//                     </div>
//                   </div>
//                 </Card>
//               </div>
//               <div>
//                 <Card
//                   className="item"
//                   style={{ width: '90%', borderRadius : '10px',overflow: 'hidden' }}
//                   cover={
//                     <img
//                       alt="example"
//                       src="https://res.cloudinary.com/proper/image/upload/v1626450237/aulavirtual/img2_abud5r.jpg"
//                     />
//                   }
//                 >
//                   <div>
//                     <span class="badge badge-secondary">Marketing</span>
//                     <h5 style={{fontSize:'18px',marginTop:'5px' , marginBottom: '15px'}} >Marketing estratégico y Ventas Efectivas</h5>
//                     <div style={{display:'flex', marginBottom: '15px'}}>
//                       <div style={{ color: 'black' , marginRight: '15px'}}>
//                         <ClockCircleOutlined style={{ marginRight: '5px', verticalAlign: 'unset' }}/>
//                         <span style={{fontSize:'12px'}}>4h. 30min.</span>
//                       </div>
//                       <div style={{ color: 'black' , marginRight: '15px'}}>
//                         <BarChartOutlined style={{ marginRight: '5px', verticalAlign: 'unset' }}/>
                        
//                         <span style={{fontSize:'12px'}}>Intermedio</span>
//                       </div>

//                     </div>
//                     <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
//                       <div style={{display:'flex'}}>
//                         <h5 style={{fontSize:'14px',marginRight:'5px',marginBottom:'0'}}>$<span>59.00</span></h5>
//                         <h5 style={{color:'#F83363',fontSize:'11px',marginBottom:'0',textDecoration:'line-through'}}>$<span>30.00</span></h5>
//                       </div>
//                       <div>
//                         <Button type="success" style={{padding:'4px 10px',background:'#1EBE66',borderRadius:'7px',border:'0'}} icon={<ShoppingCartOutlined style={{fontSize:'15px',verticalAlign:'text-top',marginRight:'8px',color:'#fff'}}/>}>
//                           <h5 style={{color:'#FFF',fontSize:'20px',display:'inline'}}>$<span>29</span></h5>
//                           <h5 style={{color:'#FFF',fontSize:'15px',display:'inline'}}>.<span>00</span></h5>
//                         </Button>
                        
//                       </div>
                      
//                     </div>
//                   </div>
//                 </Card>
//               </div>
              
//               <div>
//                 <Card
//                   className="item"
//                   style={{ width: '90%', borderRadius : '10px',overflow: 'hidden' }}
//                   cover={
//                     <img
//                       alt="example"
//                       src="https://res.cloudinary.com/proper/image/upload/v1626450288/aulavirtual/img3_cejyhd.jpg"
//                     />
//                   }
//                 >
//                   <div>
//                     <span class="badge badge-secondary">Marketing</span>
//                     <h5 style={{fontSize:'18px',marginTop:'5px' , marginBottom: '15px'}} >Marketing estratégico y Ventas Efectivas</h5>
//                     <div style={{display:'flex', marginBottom: '15px'}}>
//                       <div style={{ color: 'black' , marginRight: '15px'}}>
//                         <ClockCircleOutlined style={{ marginRight: '5px', verticalAlign: 'unset' }}/>
//                         <span style={{fontSize:'12px'}}>4h. 30min.</span>
//                       </div>
//                       <div style={{ color: 'black' , marginRight: '15px'}}>
//                         <BarChartOutlined style={{ marginRight: '5px', verticalAlign: 'unset' }}/>
                        
//                         <span style={{fontSize:'12px'}}>Intermedio</span>
//                       </div>

//                     </div>
//                     <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
//                       <div style={{display:'flex'}}>
//                         <h5 style={{fontSize:'14px',marginRight:'5px',marginBottom:'0'}}>$<span>59.00</span></h5>
//                         <h5 style={{color:'#F83363',fontSize:'11px',marginBottom:'0',textDecoration:'line-through'}}>$<span>30.00</span></h5>
//                       </div>
//                       <div>
//                         <Button type="success" style={{padding:'4px 10px',background:'#1EBE66',borderRadius:'7px',border:'0'}} icon={<ShoppingCartOutlined style={{fontSize:'15px',verticalAlign:'text-top',marginRight:'8px',color:'#fff'}}/>}>
//                           <h5 style={{color:'#FFF',fontSize:'20px',display:'inline'}}>$<span>29</span></h5>
//                           <h5 style={{color:'#FFF',fontSize:'15px',display:'inline'}}>.<span>00</span></h5>
//                         </Button>
                        
//                       </div>
                      
//                     </div>
//                   </div>
//                 </Card>
//               </div>
//               <div>
//                 <Card
//                   className="item"
//                   style={{ width: '90%', borderRadius : '10px',overflow: 'hidden' }}
//                   cover={
//                     <img
//                       alt="example"
//                       src="https://res.cloudinary.com/proper/image/upload/v1626450149/aulavirtual/im1_x7ddgq.jpg"
//                     />
//                   }
//                 >
//                   <div>
//                     <span class="badge badge-secondary">Marketing</span>
//                     <h5 style={{fontSize:'18px',marginTop:'5px' , marginBottom: '15px'}} >Marketing estratégico y Ventas Efectivas</h5>
//                     <div style={{display:'flex', marginBottom: '15px'}}>
//                       <div style={{ color: 'black' , marginRight: '15px'}}>
//                         <ClockCircleOutlined style={{ marginRight: '5px', verticalAlign: 'unset' }}/>
//                         <span style={{fontSize:'12px'}}>4h. 30min.</span>
//                       </div>
//                       <div style={{ color: 'black' , marginRight: '15px'}}>
//                         <BarChartOutlined style={{ marginRight: '5px', verticalAlign: 'unset' }}/>
                        
//                         <span style={{fontSize:'12px'}}>Intermedio</span>
//                       </div>

//                     </div>
//                     <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
//                       <div style={{display:'flex'}}>
//                         <h5 style={{fontSize:'14px',marginRight:'5px',marginBottom:'0'}}>$<span>59.00</span></h5>
//                         <h5 style={{color:'#F83363',fontSize:'11px',marginBottom:'0',textDecoration:'line-through'}}>$<span>30.00</span></h5>
//                       </div>
//                       <div>
//                         <Button type="success" style={{padding:'4px 10px',background:'#1EBE66',borderRadius:'7px',border:'0'}} icon={<ShoppingCartOutlined style={{fontSize:'15px',verticalAlign:'text-top',marginRight:'8px',color:'#fff'}}/>}>
//                           <h5 style={{color:'#FFF',fontSize:'20px',display:'inline'}}>$<span>29</span></h5>
//                           <h5 style={{color:'#FFF',fontSize:'15px',display:'inline'}}>.<span>00</span></h5>
//                         </Button>
                        
//                       </div>
                      
//                     </div>
//                   </div>
//                 </Card>
//               </div>
//               <div>
//                 <Card
//                   className="item"
//                   style={{ width: '90%', borderRadius : '10px',overflow: 'hidden' }}
//                   cover={
//                     <img
//                       alt="example"
//                       src="https://res.cloudinary.com/proper/image/upload/v1626450237/aulavirtual/img2_abud5r.jpg"
//                     />
//                   }
//                 >
//                   <div>
//                     <span class="badge badge-secondary">Marketing</span>
//                     <h5 style={{fontSize:'18px',marginTop:'5px' , marginBottom: '15px'}} >Marketing estratégico y Ventas Efectivas</h5>
//                     <div style={{display:'flex', marginBottom: '15px'}}>
//                       <div style={{ color: 'black' , marginRight: '15px'}}>
//                         <ClockCircleOutlined style={{ marginRight: '5px', verticalAlign: 'unset' }}/>
//                         <span style={{fontSize:'12px'}}>4h. 30min.</span>
//                       </div>
//                       <div style={{ color: 'black' , marginRight: '15px'}}>
//                         <BarChartOutlined style={{ marginRight: '5px', verticalAlign: 'unset' }}/>
                        
//                         <span style={{fontSize:'12px'}}>Intermedio</span>
//                       </div>

//                     </div>
//                     <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
//                       <div style={{display:'flex'}}>
//                         <h5 style={{fontSize:'14px',marginRight:'5px',marginBottom:'0'}}>$<span>59.00</span></h5>
//                         <h5 style={{color:'#F83363',fontSize:'11px',marginBottom:'0',textDecoration:'line-through'}}>$<span>30.00</span></h5>
//                       </div>
//                       <div>
//                         <Button type="success" style={{padding:'4px 10px',background:'#1EBE66',borderRadius:'7px',border:'0'}} icon={<ShoppingCartOutlined style={{fontSize:'15px',verticalAlign:'text-top',marginRight:'8px',color:'#fff'}}/>}>
//                           <h5 style={{color:'#FFF',fontSize:'20px',display:'inline'}}>$<span>29</span></h5>
//                           <h5 style={{color:'#FFF',fontSize:'15px',display:'inline'}}>.<span>00</span></h5>
//                         </Button>
                        
//                       </div>
                      
//                     </div>
//                   </div>
//                 </Card>
//               </div>          
              
//             </OwlCarousel>
//           </div>
//         </section>
//         <footer
//           id="footer"
//           className="inverted"
//           style={{ backgroundColor: "#EDEDED" }}
//         >
//           <div className="footer-content">
//             <div className="container">
//               <div className="row">
//                 <div className="col-xl-3 col-lg-3 col-md-3">
//                   <div className="widget">
//                     <h4 className="tituloFooter">LEGAL</h4>
//                     <ul className="list">
//                       <li>
//                         <a href="#">Términos y Condiciones</a>
//                       </li>
//                       <li>
//                         <a href="#">Politica de Contratación</a>
//                       </li>
//                       <li>
//                         <a href="#">Politica de Privacidad</a>
//                       </li>
//                       <li>
//                         <a href="#">Politica de Cookies</a>
//                       </li>
//                       <li>
//                         <a href="#">Libro de Reclamaciones</a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="col-xl-3 col-lg-3 col-md-3">
//                   <div className="widget">
//                     <h4 className="tituloFooter">Comunidad</h4>
//                     <ul className="list">
//                       <li>
//                         <a href="#">¿Qué es Proper?</a>
//                       </li>

//                       <li>
//                         <a href="#">Contenido Gratis</a>
//                       </li>
//                       <li>
//                         <a href="#">Programas</a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="col-xl-3 col-lg-3 col-md-3">
//                   <div className="widget">
//                     <h4 className="tituloFooter">AYUDA</h4>
//                     <ul className="list">
//                       <li>
//                         <a href="#">Preguntas Frecuentes</a>
//                       </li>
//                       <li>
//                         <a href="#">Contacto</a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div className="col-xl-3 col-lg-3 col-md-3">
//                   <div className="widget clearfix widget-newsletter">
//                     <a>contacto@proper.pe</a>
//                     <br></br>
//                     <img
//                       alt="example"
//                       src="https://res.cloudinary.com/proper/image/upload/v1624335954/correo/LOGO_NEGRO_rfel31_1_spfewr_wqvb7l_rsylmw.png"
//                       style={{
//                         width: "130px",
//                         opacity: "0.4",
//                         objectFit: "contain",
//                       }}
//                     ></img>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             className="copyright-content"
//             style={{ backgroundColor: "#EDEDED" }}
//           >
//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-6">
//                   <div className="social-icons social-icons">
//                     <ul>
//                       <li className="social-rss">
//                         <a href="#">
//                           <i className="fa fa-rss" />
//                         </a>
//                       </li>
//                       <li className="social-facebook">
//                         <a href="#">
//                           <i className="fab fa-facebook-f" />
//                         </a>
//                       </li>
//                       <li className="social-twitter">
//                         <a href="#">
//                           <i className="fab fa-twitter" />
//                         </a>
//                       </li>
//                       <li className="social-vimeo">
//                         <a href="#">
//                           <i className="fab fa-vimeo" />
//                         </a>
//                       </li>
//                       <li className="social-youtube">
//                         <a href="#">
//                           <i className="fab fa-youtube" />
//                         </a>
//                       </li>
//                       <li className="social-pinterest">
//                         <a href="#">
//                           <i className="fab fa-pinterest" />
//                         </a>
//                       </li>
//                       <li className="social-gplus">
//                         <a href="#">
//                           <i className="fab fa-google-plus-g" />
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="col-lg-6 text-right">
//                   <div className="copyright-text tituloFooter">
//                     Copyright © 2021 Proper - Todos los derechos reservados.{" "}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// };
// export default Header;
