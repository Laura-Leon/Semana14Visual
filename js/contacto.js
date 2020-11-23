const database = firebase.database();
const auth = firebase.auth();

const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');

const agregar = document.getElementById('agregar');

const agregarContacto = ()=>{
    auth.onAuthStateChanged(
        (user)=>{
            let reference = database.ref('semana14/users/'+user.uid+'/contacts').push();
            let contacts = {
                id: reference.key,
                nombre: nombre.value,
                telefono: telefono.value

                };
reference.set(contacts).then(
    ()=>{
        window.location.href = "index.html";

    }
);


            }

        
    );

}

agregar.addEventListener('click',agregarContacto );