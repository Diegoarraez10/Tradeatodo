import React from "react";
import diegoPP from "../../img/diego_pp.jpg";
import profile from "../../img/profile.jpg";
import jose from "../../img/jose.jpg";
import Card from "react-bootstrap/Card";
import "../../styles/profiles.css";

export const About = () => {
  return (
    <div className="text-center m-5 ">
      <h2>About Us</h2>
      <div class="container text-center my-2">
        <div class="row gx-1">
          <div class="col-12 ">
            <p></p>
          </div>

          <div class="col-12 my-3">
            <div className="container cards ">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-3 col-md-6">
                  <Card>
                    <Card.Img
                      className="aboutImage"
                      variant="top"
                      src={profile}
                    />
                    <Card.Body>
                      <Card.Title>Jesus Gomez</Card.Title>
                      <Card.Text>
                        Tengo 22 años, Me gusta leer, los videojuegos, el cine,
                        entre otras cosas, siempre me ha llamado la atencion la
                        programacion y gracias a este curso ha despertado mas la
                        curiosidad por todo este tema y las ganas de seguir
                        aprendiendo
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-3 col-md-6">
                  <Card>
                    <Card.Img className="aboutImage" variant="top" src={jose} />
                    <Card.Body>
                      <Card.Title>Jose Hernandez</Card.Title>
                      <Card.Text>
                        28 años, estudiante de ingenieria en informatica.
                        Interesado en el area tecnologica.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-lg-3 col-md-6">
                  <Card>
                    <Card.Img
                      className="aboutImage"
                      variant="top"
                      src={diegoPP}
                    />
                    <Card.Body>
                      <Card.Title>Diego Arraez</Card.Title>
                      <Card.Text>
                        27 años, Fullstack developer,Me apasionan los
                        videojuegos, los animales,pasar tiempo con mi familia
                        (preferiblemente en la playa) y mas que nada me encanta
                        aprender a crear cosas desde 0 usando la programacion y
                        el diseño web.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
