const database = firebase.database();
const auth = firebase.auth();

const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');

const correo = document.getElementById('correo');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const regbtn = document.getElementById('regbtn');
const yatengoC  = document.getElementById('yatengoC');

var isSingInUp = false;
auth.onAuthStateChanged(
    (user)=>{
        if(user !== null){
            window.location.href = "index.html";
        }
    }
)

regbtn.addEventListener('click', ()=>{
    isSingInUp = true;
    auth.createUserWithEmailAndPassword(correo.value,password.value).then(
        (data)=>{ //depositar daticos
            let user = {
                id: data.user.uid,
                nombre: nombre.value,
                telefono: telefono.value,
                correo: correo.value,
                password: password.value

            };

database.ref('semana14/users/'+user.id).set(user);

        }
    );
});
