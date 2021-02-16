var usrinp = document.getElementById("name");
usrinp.addEventListener("keypress", EventForKeyPress);

function Generate() {
  GenerateAvtr();
}
function GenerateAvtr() {
  var name = document.getElementById("name").value;
  async function fetchGender(gen) {
    try {
      const response = await fetch(`https://api.genderize.io?name=${name}`);
      const gen = await response.json();
      return gen;
    } catch (error) {
      console.error(error);
    }
  }
  async function getGender(gen) {
    const res = await fetchGender(gen);
    document.getElementById(
      "avtr"
    ).src = `https://avatars.dicebear.com/api/${res.gender}/${name}.svg?mood[]=happy`;
    document.getElementById("usrname").innerHTML = `Name: ${name}`;
    document.getElementById("gender").innerHTML = `Gender: ${res.gender}`;
  }
  getGender();
}

function EventForKeyPress(event) {
  if (event.keyCode === 13) {
    GenerateAvtr();
  }
}



