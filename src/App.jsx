import React, { useState } from 'react';

function App(){
  return(
    <>
    <div className="heroe">
    <h1>SPIDER-MAN</h1>
    </div>
    <h3>Spiderman tambien conocido como el hombre araña, es el superheroe mas popular del mundo</h3>
    <div className='logo'>
    <img src="/public/imagen.jpg"></img>
    </div>
    <br /><br />
    <h2>Principales enemigos de Spider-man</h2>
    <div className="galeria">
    <br /><br />
    <a href="https://es.wikipedia.org/wiki/Duende_Verde"><img src="/public/imagen2.jpg"></img></a>
    <a href="https://es.wikipedia.org/wiki/Venom_(Marvel)"><img src="/public/imagen3.jpg"></img></a>
    <a href="https://es.wikipedia.org/wiki/Thanos"><img src="/public/imagen4.jpg"></img></a>
    <a href="https://es.wikipedia.org/wiki/Doctor_Octopus"><img src="/public/imagen5.jpg"></img></a>
    <a href="https://es.wikipedia.org/wiki/Hombre_de_Arena"><img src="/public/imagen6.jpg"></img></a>
     </div>
     <br /><br />
    <h2 className="titt">HISTORIA DE SPIDERMAN (UCM)</h2>
     <div className="hist">
    <p>La picadura de una araña le otorgó al adolescente Peter Parker habilidades arácnidas, y en lugar 
    de usarlas para beneficio propio, decidió ayudar a los demás. Huérfano y viviendo con su tía May Parker, 
    el chico optó por usar una máscara al combatir el crimen para no abrumarla con sus acciones.
    Autodenominándose Spider-Man y luciendo un par de lanzatelarañas que él mismo había construido, Parker 
    apareció en videos de internet que llamaron la atención de Tony Stark. El multimillonario industrial 
    descubrió la identidad secreta de Spider-Man y se acercó a Parker en su casa con May en Queens, Nueva York, 
    para pedirle ayuda en un próximo enfrentamiento con el Capitán América y un grupo de Vengadores y aliados 
    renegados. Al principio, Parker se mostró reacio incluso a admitir su carrera secreta como Spider-Man, pero 
    la emoción de la aventura y las palabras de responsabilidad de Stark lo convencieron, y aceptó la invitación, 
    así como un nuevo traje de alta tecnología y lanzatelarañas.</p>
    <br /><br />
    </div>
    <div className="pelicula">
      <br /><br />
      <img src="/public/imagen7.jpg"></img>
      <img src="/public/imagen8.jpg"></img>
    </div>
    <div className="creacion">
      <h2>CREACION DE SPIDERMAN</h2>
      <h3>Spider-Man fue creado por el escritor Stan Lee y el dibujante Steve Ditko</h3>
      <br />
    </div>
    <div className="comic">
      <h3>La idea de Stan Lee:</h3>
      <p>Stan Lee quería crear un superhéroe adolescente con el que los jóvenes pudieran identificarse. En esa época, 
      los adolescentes en los cómics solo eran "compañeros" del héroe principal (como Robin para Batman). Lee quería 
      que el protagonista fuera el propio joven, enfrentando problemas reales como pagar la renta, lidiar con la escuela, 
      la timidez y la vida cotidiana, además de combatir el crimen.</p>
      <br /><br />
      <img src="/public/imagen9.webp"></img>
      <h3>La inspiración:</h3>
      <p>Se dice que a Stan Lee se le ocurrió la idea al ver una mosca trepar por una pared en su oficina. Pensó en nombres 
      como "Spider-Boy", "Insect-Man" y "Fly-Man", inclinándose finalmente por Spider-Man (añadiéndole el guion para que 
      no se confundiera con Superman de DC Comics).</p>
      <br /><br />
      <img src="/public/imagen10.jpg"></img>
      <h3>El rechazo inicial de Marvel:</h3>
      <p>El dueño de Marvel Comics en ese momento, Martin Goodman, rechazó rotundamente la idea. Consideraba que "a la gente 
      le dan asco las arañas" y que un adolescente no podía ser un héroe principal. Sin embargo, le permitió a Lee publicar 
      la historia en la última edición del cómic Amazing Fantasy, una revista que estaba a punto de ser cancelada.</p>
      <br /><br />
      <img src="/public/imagen11.jpg"></img>
      <br /><br />
      <h3>El éxito inesperado:</h3>
      <p>Cuando salieron las ventas de Amazing Fantasy #15, la edición se convirtió en uno de los mayores éxitos de la editorial. 
      Ante la enorme respuesta de los fans, Martin Goodman le pidió de inmediato a Stan Lee que creara una serie propia para el 
      personaje, lanzando en 1963 The Amazing Spider-Man, la cual se convirtió en la franquicia estrella de Marvel.</p>
      <br /><br />
      <img src="/public/imagen12.jpg"></img>
      <br /><br />
      <footer className="footer">
        <a href="https://www.facebook.com/spiderman/?locale=es_LA">F</a>
        <a href="https://x.com/SpiderMan">TWITTER</a>
        <a href="https://www.instagram.com/spiderman/?hl=es">X</a>
      </footer>
      </div>
    </> 
  );  
}


export default App;