import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/galeriaproductos.css";
import "../../styles/productDetails.css";
import onizuka from "../../img/onizuka.jpg";
import logo from "../../img/OP2.png";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { store, actions } = useContext(Context);
  const [bigPicture, setBigPicture] = useState("");
  const { id } = useParams();
  const [productDetail, SetProductDetail] = useState({});
  const imgDisplay = (event) => {
    console.log(event);
  };
  // filtro store por mis products buscando un id igual a el de los parametros lo va a guardar en product
  const getProduct = async () => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/api/product/${id}`
      ); //<-- ruta dinamica creada//
      const data = await response.json();
      SetProductDetail(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // const product = store.products.find(product =>product.id==id)
    // SetProductDetail(product)
    // console.log(product)
    getProduct();
  }, []);
  console.log(id);
  console.log(store.products);
  return (
    <div className="container text-center py-5 ">
      <h1 className="d-flex align-self-left mb-5"> "Detalles de producto" </h1>
      <div className="row ">
        <div className="col">
          <img
            id="imageBox"
            className="w-100 h-100"
            src={productDetail.product_img}
          ></img>
        </div>

        <div className="col flex-column  mb-3 ">
          <div className="float-start d-flex align-items-start flex-column">
            <div className="p-2">
              <h1 className=" float-start">{productDetail.name}</h1>
            </div>

            <div className="p-2 float-start">
              <i className="fas fa-star iconstar"></i>
              <i className="fas fa-star iconstar"></i>
              <i className="fas fa-star iconstar"></i>
              <i className="fas fa-star iconstar"></i>
              <i className="fas fa-star iconstar"></i>
            </div>

            <div className="p-2 my-4">
              <h2 className="float-start"> Precio:{productDetail.price}</h2>
            </div>
            <div className="p-2">
              {/* <h6 className="float-start">Seller:{productDetail.user_id}</h6> */}
            </div>
            <div className="p-2">
              {/* <h6 className="float-start">Tipo de producto: Juegos</h6> */}
            </div>
            <div className="p-2">
              {/* <h6 className="float-start">Agregar a lista de deseo</h6> */}
            </div>

            {/* <div className="p-2">
              <h6 className="float-start">Cantidades:</h6>
            </div>
            <div className="d-flex float-start">
              <div className="p-2 cuadrado ">+</div>
              <div className="p-2 lines">2</div>
              <div className="p-2 cuadrado">-</div>
            </div> */}

            <div className="flex-column">
              <button className="btn btn-success mb-4"
                variant="primary"
                onClick={() =>
                  actions.handleTransaccion(productDetail.id, productDetail.status)
                }
              >
                Buy now!
              </button>
            </div>

            <div className="cNameard ">
              <div className="card-body ">
                <div className="container text-center ">
                  <div className="row row-cols-2">
                    <div className="col-md d-flex justify-content-start gap-1 mb-4  py-3">
                      <i className="fa-solid fa-box icon  "></i>

                      <div>
                        <h6 className="text-start">
                          Delivery Gratis.
                          <p className="fs-6 text-secondary">
                            Con ordenes mayores a 50$
                          </p>
                        </h6>
                      </div>
                    </div>

                    <div className="col  d-flex justify-content-start gap-1 mb-4 py-3">
                      <i className="fa-solid fa-headset icon"></i>
                      <div>
                        <h6 className="text-start">
                          Atención al cliente.
                          <p className="fs-6 text-secondary">
                            Sopporte online 24/7
                          </p>
                        </h6>
                      </div>
                    </div>
                    <div className="col d-flex justify-content-start gap-1">
                      <i className="fa-solid fa-circle-dollar-to-slot icon"></i>
                      <div>
                        <h6 className="text-start">
                          Grandes ahorros.
                          <p className="fs-6 text-secondary">
                            No cobramos comision de venta!
                          </p>
                        </h6>
                      </div>
                    </div>
                    <div className="col d-flex justify-content-start gap-1">
                      <i className="fa-solid fa-gift icon"></i>
                      <div>
                        <h6 className="text-start">
                          {" "}
                          Gift Voucher.
                          <p className="fs-6 text-secondary">
                            Sigue nuestras redes para cupones y mas!
                          </p>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>

      <div className="card mt-5">
        <div className="card-body">
          <ul
            className="nav nav-tabs  d-flex justify-content-center"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                Politicas
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="warranty-tab"
                data-bs-toggle="tab"
                data-bs-target="#warranty-tab-pane"
                type="button"
                role="tab"
                aria-controls="warrantytab-pane"
                aria-selected="true"
              >
                Garantia
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
           
            <div
              className="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabIndex="0"
            >
              <h2>Política de devoluciones:</h2>
              <ul>
<li>Plazo mínimo de 14 días para devolución.</li>
<li>El cliente no está obligado a justificar el motivo de la devolución.</li>
<li>La empresa debe devolver todo el importe pagado por el consumidor, incluyendo los gastos de envío iniciales.</li>
<li>El comprador tiene que hacerse cargo de los gastos derivados de la devolución del producto.</li>
</ul>
<h2>Política de privacidad:</h2>
<ul>
<li>Nunca compartiremos tu informacion con nadie</li>
<li>Un miembro de nuestro staff jamas te pedira tu contraseña</li>
<li>No nos hacemos responsables por cuentas perdidas o hackeadas, siempre utiliza una conexion segura y cierra tus sesiones al terminar</li>
</ul>
            </div>
            <div
              className="tab-pane fade"
              id="warranty-tab-pane"
              role="tabpanel"
              aria-labelledby="warranty-tab"
              tabIndex="0"
            >
              <h2>La politica de garantia solo aplica si:</h2>
              <ul>
                <li>Han pasado menos de 28 dias habiles luego de la compra</li>
                <li>El producto presenta defectos no especificados por el vendedor</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
