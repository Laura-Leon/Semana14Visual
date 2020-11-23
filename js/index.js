const database = firebase.database();
const auth = firebase.auth();

const logout = document.getElementById('logout');
const nombre = document.getElementById('nombre');
const misContactos = document.getElementById('misContactos');

//para saber el usuario auten
auth.onAuthStateChanged(
(user)=>{

    if(user !== null){

    
  
    database.ref('semana14/users/'+user.uid).once(
        'value',
    (data)=>{
        let userDB = data.val();
        titulo.innerHTML = 'Bienvenido'+" "+ userDB.nombre;
    }
    );


    database.ref ('semana14/users/'+user.vid+ '/contacts').on('value',function(data){
        misContactos.innerHTML='';
        data.forEach(
            
        
    contacts =>{
    
        let valor = contacts.val();

        console.log(valor.nombre);
        let fi = new contactos(valor);
        misContactos.appendChild(fi.render());
    
    }
    
    
        );
    }
    );

}else{
    window.location.href = "login.html";
}
}
);

logout.addEventListener('click',()=>{
    auth.signOut().then(
        (data)=>{
            window.location.href = 'login.html';
        }
    ).catch(
        (error)=>{
            alert(error.message);
            console.log(error);
        }
    );
});




