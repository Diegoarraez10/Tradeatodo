
import React from "react";
import diegoPP from "../../img/diego_pp.jpg"

import profile from "../../img/profile.jpg"

import jose from "../../img/jose.jpg"




export const About= () => {

    
	return (

        <div className="text-center m-5"> 
        <h2>About Us</h2>


        <div class="container text-center my-2 ">

            <div class="row gx-1">
                <div class="col-12 "> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod rerum dicta facere eaque aut! Dolores libero modi vel corrupti excepturi eveniet reiciendis cumque? Sint nostrum consequuntur perferendis, explicabo odit quas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita error, a aliquam, soluta excepturi delectus accusantium optio esse nam placeat ullam molestiae reiciendis cumque minima fugit tempore? Dolore, accusantium exercitationem?</p></div>
              
                <div class="col-12 my-3">
      
        <div className="container cards ">
          <div className="row d-flex justify-content-center  ">
            <div className="col col-12 col-lg-3">
              <div className="card " >
                <img src="" className="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Nombre</h5>
                    <p class="card-text">Datos personales</p>
                </div>

              </div>
            </div>     
            <div className="col col-12 col-lg-3">
            <div className="card " >

                <img src={profile} className="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Jesus Gomez</h5>
                    <p class="card-text"> Tengo 22 años, Me gusta leer, los videojuegos, el cine, entre otras cosas,
                    siempre me ha llamado la atencion la programacion y gracias a este curso ha despertado mas la curiosidad por todo este tema y las ganas de seguir aprendiendo </p>

                <img src={jose} className="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Jose Hernandez</h5>
                    <p class="card-text">28 años, estudiante de ingenieria en informatica. Interesado en el area tecnologica.</p>

                </div>

              </div>
              </div>
              <div className="col col-12 col-lg-3">
            <div className="card " >
                <img src={diegoPP} className="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Diego Arraez</h5>
                    <p class="card-text">27 años, Fullstack developer,Me apasionan los videojuegos, los animales,pasar tiempo con mi familia (preferiblemente en la playa)
                    y mas que nada me encanta aprender a crear cosas desde 0 usando la programacion y el diseño web.</p>
                </div>

              </div>
              </div>  

          </div>
          </div>
        </div>
                    
              </div>
            </div>
            <div className="container"> 

            <div><h4 className="text-center">Nuestros servicios</h4> </div>

            <hr></hr>
           <div className="row">
           <div className="col">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod rerum dicta facere eaque aut! Dolores libero modi vel corrupti excepturi eveniet reiciendis cumque? Sint nostrum consequuntur perferendis, explicabo odit quas. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita error, a aliquam, soluta excepturi delectus accusantium optio esse nam placeat ullam molestiae reiciendis cumque minima fugit tempore? Dolore, accusantium exercitationem?</p>
            </div>
            </div>

            </div>
            </div>
       









    )}