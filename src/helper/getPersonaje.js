const getPersonaje = async () => {
    const url = "https://swapi.dev/api/people/";
    try {
      const response = await fetch(url);
      const datos = await response.json();
      return datos.results;
    } catch (error) {
      console.log(error);
    }
  };
  
  export default getPersonaje;