const database = firebase.database();
const auth = firebase.auth();

const correo = document.getElementById('correo');
const password = document.getElementById('password');
const loginbtn = document.getElementById('loginbtn');
auth.onAuthStateChanged(
    (user)=>{
        if(user !== null){
            window.location.href = "index.html";
        }
    }
);

loginbtn.addEventListener('click',()=>{
    auth.signInWithEmailAndPassword(correo.value,password.value).then(
        (data)=>{
            window.location.href = 'index.html';
        }
    ).catch(
        (error)=>{
            alert(error.message);
            console.log(error);
        }
    );
});


