async function getPersonName(id) {
  const url = `https://swapi.dev/api/people/${id}/`;
  const result = await fetch(url);
  const person = await result.json();

  return person;
}

async function getLukeSkywalker() {
  const luke = await getPersonName(1);
  const target = document.getElementById('fetchedData');
  target.innerText = JSON.stringify(luke, null, 2);
}

document.getElementById("fetch-btn").onclick = function() {
  getLukeSkywalker();
}
