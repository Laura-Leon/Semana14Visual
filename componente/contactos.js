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

    let deleteBtn= document.createElement('button');
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerHTML = ( 
      'x'
    );

    deleteBtn.addEventListener('click', ()=> {
        auth.onAuthStateChanged(
            (user)=>{
                console.log(user.uid);
                const database = firebase.database();
                database.ref('semana14/users/'+user.uid+'/contacts/'+this.contacts.id).set(null);
            }
        );
        
    
    });

 component.appendChild(nomcont); 
 component.appendChild(telcont);
 component.appendChild(deleteBtn);

 return component;

}


}