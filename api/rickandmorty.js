async function getData(endpoint) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/${endpoint}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

getData("character").then((data) => {
  data.results.forEach((element) => console.log(element.name));
});
