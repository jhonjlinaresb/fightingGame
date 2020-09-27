//la funcion se llama mediante el botón de html con el onclick ="cambiaPantalla(num)"
const cambiaPantalla = (num) =>{
  
    //la switch recibe el num que le decimos al pulsar los diferentes botones
    //  elige el caso que usa segun el num del boton
        switch(num){
          
    //el boton de la pagina 1 envia una señal de num 2 onclick="cambiaPantalla(2)"
          
    case 2:
        document.getElementById('fase1').style.display="none";
        document.getElementById('fase2').style.display="flex";
        break;
           
    //el boton de la pagina 2 envia una señal de num 3 onclick="cambiaPantalla(3)"
    
    case 3:
        document.getElementById('fase2').style.display="none";
        document.getElementById('fase3').style.display="flex"; 
        break;
           
    //el boton de la pagina 3 envia una señal de num 1 onclick="cambiaPantalla(1)"
    
    case 1:
        document.getElementById('fase3').style.display="none";
        document.getElementById('fase1').style.display="flex"; 
        break;
        }
    }

    class personaje {
      //Constructor basico del personaje
      constructor(name, hp, armor, dmg) {
        this.name = name;
        this.hp = hp;
        this.armor = armor;
        this.dmg = dmg;
      }
    
      // Funcion Recibir Daño
      /*
            Aqui interpretamos que el daño, por una parte se mitiga con la armadura
            Por otra parte, para darle algo de dinamismo, como en el famoso juego de
            Rol D&D, comprobamos que si nos da un 20, es un critico y hace el doble 
            de daño, mientras que si es un 1, sera un fallo automatico.
        */
      recibeDmg = (dmg) => {
        const tirada = tirarDado();
        if (tirada === 20) {
          console.log("\tCRITICAL HIT! " + dmg * 2);
          this.hp -= dmg * 2 - this.armor;
        } else if (tirada === 1) {
          console.log("\tHAS FALLADO!");
        } else {
          console.log("\tGOLPE NORMAL " + (dmg - this.armor));
          this.hp -= dmg - this.armor;
        }
      };
    }
    
    // Nuestro tirador de dados
    const min = 1;
    const max = 20;
    const tirarDado = () => Math.floor(Math.random() * (max - min + min)) + 1;

    let clan = document.getElementById("clan");
clan.innerHTML = `
        <div class="pj">
        <div class="text">
        Name <img class="meliodas" src="./img/meliodas.png" alt="meliodas">
        </div>
        <div class="text">HP</div>
        <div class="text">Armor</div>
        <div class="text">Armor</div>
        </div>
        <div class="pj1">
        <div class="text">
        Name <img class="elizabeth" src="./img/elizabeth.png" alt="elizabeth">
        </div>
        <div class="text">HP</div>
        <div class="text">Armor</div>
        <div class="text">Armor</div>
        </div>
        <div class="pj2">
        <div class="text">
           Name <img class="escanor" src="./img/escanor.png" alt="escanor">
        </div>
        <div class="text">HP</div>
        <div class="text">Armor</div>
        <div class="text">Armor</div>
    </div>
    <div class="pj3">
        <div class="text">
            Name <img class="merlin" src="./img/merlin.png" alt="merlin">
         </div>
        <div class="text">HP</div>
        <div class="text">Armor</div>
        <div class="text">Armor</div>
    </div>
`;

const selectedElement = document.getElementById("selected");

selectedElement.innerHTML = "";

const pers1 = new Personaje("Meliodas", 100, 10, 15);
const pers2 = new Personaje("Elizabeth", 12, 5, 15);
const pers3 = new Personaje("Escanor", 60, 0, 35);
const pers4 = new Personaje("Merlin", 80, 5, 20);

//Se almacenan en un array para recorrerlos y pintarlos
let arrayPJ = [pers1, pers2, pers3, pers4];

//Array para almacenar los PJ seleccionados
let arrySeleccionados = [];
const maximaSeleccionDePJ = 2;

//Los dos favoritos del publico que aun no sabemos
let pjSelec1;
let pjSelec2;

// Variable en la que almacenaremos el contenido HTML a mostrar
let infoClan = "";

// Funcion pintar Clan
/* 
    Aqui la idea es leer del array cada personaje y pintarlo en pantalla.
    para ello, usamos el string literal en el que insertamos la info que queremos
*/
const pintarClan = () => {
  for (let pos in arrayPJ) {
    infoClan += `<div class="pj" id="pj${pos}" onclick="selectPJ(${parseInt(
      pos
    )})" > <div class="text">Name: ${
      arrayPJ[pos].name
    } </div> <div class="text">HP: ${
      arrayPJ[pos].hp
    }</div> <div class="text">Armor: ${
      arrayPJ[pos].armor
    }</div> <div class="text">Damage: ${arrayPJ[pos].armor}</div> </div>`;
  }
  clanElement.innerHTML = infoClan;
};

pintarClan();