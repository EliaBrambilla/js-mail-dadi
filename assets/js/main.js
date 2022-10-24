// parte 1 trova mail utente
// constanti
const mailList = ['elia.brambilla@icloud.com', 'helfy97@gmail.com', 'ely.bramb97@hotmail.com', 'boolean@hotmail.it', 'classe77@gmail.com', 'zoomclasse77@live.it'];
const inputBtn = document.getElementById('verifica');
let isIntolist = false;
let mailOutput = document.getElementById('accesso');

//logica
inputBtn.addEventListener('click', function(){
    let inputMail = document.getElementById('mymail').value;
    for( let i = 0; i < mailList.length; i++){
        if(inputMail.toLowerCase() === mailList[i]){
            isIntolist = true;
        }
    }
    if(isIntolist){
        mailOutput.innerHTML = 'Hai accesso a questa lista mail.';
    }else{
        mailOutput.innerHTML = 'NON hai accesso a questa lista. Inserisci una mail valida.';
    }
    isIntolist = false;
    inputMail.value = '';
})

// parte 2 tira i dadi utente vs pc
//costanti
const minDado = 1;
const maxDado = 6
const numBtn = document.getElementById('actiondadi');
const container = document.querySelector('.results');
let outputUser;
let outputCpu;
let outputResult;
let numUser = 0;
let numCpu = 0;

//logica
numBtn.addEventListener('click', function(){
    container.innerHTML = '';
    numUser = Math.floor(Math.random() * (maxDado - minDado + 1) + minDado);
    numCpu = Math.floor(Math.random() * (maxDado - minDado + 1) + minDado);
    console.log(numUser);
    console.log(numCpu);
    outputUser = document.createElement('div');
    outputCpu = document.createElement('div');
    outputUser.innerHTML = `Il tuo numero é:  ${numUser}`;
    outputCpu.innerHTML = `Il numero della CPU é:  ${numCpu}`;
    container.append(outputUser);
    container.append(outputCpu);

 //condizioni
    outputResult = document.createElement('div');
    if(numUser > numCpu){
        outputResult = 'HAI VINTO!';
    }else if(numCpu > numUser ){
        outputResult = 'Hai perso :( RIPROVA!';
    }else{
        outputResult = 'PAREGGIO!';
    }
//output result
    container.append(outputResult);
})