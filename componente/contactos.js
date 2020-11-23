class contactos{
    constructor(contacts){
        this.contacts = contacts;

    }
render = ()=>{
    let component = document.createElement('div');
    component.className = 'fi';

    let nomcont= document.createElement('div');
    nomcont.className = "nomcont";
    nomcont.innerHTML = ( 
        this.contacts.nombre
    );
    let telcont= document.createElement('div');
    telcont.className = "telcont";
    telcont.innerHTML = ( 
        this.contacts.telefono
    );

 component.appendChild(nomcont); 
 component.appendChild(telcont);

 return component;

}


}