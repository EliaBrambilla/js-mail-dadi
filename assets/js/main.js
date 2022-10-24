// parte 1 trova mail utente
const mailList = ['elia.brambilla@icloud.com', 'helfy97@gmail.com', 'ely.bramb97@hotmail.com', 'boolean@hotmail.it', 'classe77@gmail.com', 'zoomclasse77@live.it'];
const inputBtn = document.getElementById('verifica');
let isIntolist = false;
let mailOutput = document.getElementById('accesso');

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
