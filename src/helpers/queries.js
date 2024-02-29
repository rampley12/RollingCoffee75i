const APIPRoductos = import.meta.env.VITE_API_PRODUCTO;
console.log(APIPRoductos);

//GET
export const leerProductos = async () => {
  try {
    const respuesta = await fetch(APIPRoductos);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//POST
export const crearProducto = async (productoNuevo) => {
  try {
    const respuesta = await fetch(APIPRoductos,{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(productoNuevo)
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//PUT o PATCH
//DELETE

export const borrarProducto = async (id) => {
  try {
    const respuesta = await fetch(APIPRoductos+'/'+id,{
      method: "DELETE"     
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

//GET de un unico producto
export const obtenerProducto = async (id) => {
  try {
    const respuesta = await fetch(APIPRoductos+'/'+id);
    console.log(respuesta)
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};