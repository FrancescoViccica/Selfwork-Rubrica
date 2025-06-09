
// Card
let contactWrapper = document.querySelector('#contactWrapper');


// Bottoni
let showContacts = document.querySelector('#showContacts');
let addContactsBtn = document.querySelector('#addContactsBtn');
let removeContactsBtn = document.querySelector('#removeContactsBtn');
let editContactsBtn = document.querySelector('#editContactsBtn');

// Input
let nameInput = document.querySelector('#nameInput');
let numberInput = document.querySelector('#numberInput');


// Modale
// let exampleModal = document.querySelector('#exampleModal');

// Variabile d'appoggio
let check = false;





// OGGETTO RUBRICA

const rubrica = {
    lista_contatti: [
        {nome_contatto : 'Luffy', numero_contatto : 3216549870 },
        {nome_contatto : 'Zoro', numero_contatto : 721456987 }, 
        {nome_contatto : 'Sanji', numero_contatto : 963852 }, 
        
    ],
    
    // Metodo per mostrare contatti
    showContacts : function(){
        
        contactWrapper.innerHTML = '';
        
        
        this.lista_contatti.forEach((contatto)=>{
            
            let div = document.createElement('div');
            // div.classList.add('card');
            div.innerHTML = `
        <div class="card" style="width: 15rem;">
        
                <div class="d-flex justify-content-center my-3">
                
                    <img src="./media/icon-img3.png" class="card-img-top img-custom " alt="Immagine Contatto">
                    
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center">${contatto.nome_contatto}</h5>
                </div>
                
                <div>
                <p class="text-center">${contatto.numero_contatto}</p>
                </div>
                
                <div class="card-body d-flex justify-content-around">
                    
                    <p> <i class="fa-solid fa-user-xmark fa-2x icon mt-1"></i></p>
                </div>
            
            
        </div>
        
        `
        contactWrapper.appendChild(div);
    });
    
    
    // Icone Rimuovi contatto
    let icons = document.querySelectorAll('.icon');
    
    icons.forEach((icon, i)=>{
        icon.addEventListener('click', ()=>{
            this.lista_contatti.splice(i, 1);
            this.showContacts();
        });
    });
    
    
    },
    
    
    // Metodo per aggiungere contatti
    addContact : function(newName, newNumber){
        
        if (newName && newNumber) {
            this.lista_contatti.push({nome_contatto : newName, numero_contatto : newNumber });
            this.showContacts();
            
            if(check == false){
                rubrica.showContacts();
                check = true;
                showContacts.innerHTML = 'Nascondi Contatti'
            }}else{
                alert('Devi inserire Nome e Numero!');
            };
        },
        
        
        // Metodo per rimuovere i contatti
    removeContact : function(removedName){
        let names = this.lista_contatti.map((contatto)=> contatto.nome_contatto);
            let index = names.indexOf(removedName);
            if (index >= 0){
                this.lista_contatti.splice(index, 1);
                this.showContacts();
            showContacts.innerHTML = 'Nascondi Contatti'
            }else{
                alert('Contatto non presente in rubrica');
            }
            
        },

        editContact : function(editName, editNumber){
            this.lista_contatti.forEach(contatto=>{
                if (contatto.nome_contatto == editName) {
                    contatto.numero_contatto = editNumber
                this.showContacts();
                };
            });
        } 
        
    }

    
    
    // Bottone Mostra contatti
    
    showContacts.addEventListener('click', ()=>{
        if(check == false){
            rubrica.showContacts();
            check = true;
            showContacts.innerHTML = 'Nascondi Contatti'
        }else{
            contactWrapper.innerHTML = '';
            check = false;
            showContacts.innerHTML = 'Mostra Contatti'
            
        }
        
    });
    
    // Bottone aggiungi contatto
    addContactsBtn.addEventListener('click', ()=>{
        rubrica.addContact(nameInput.value, numberInput.value);
        nameInput.value = '';
        numberInput.value = '';
        // rubrica.showContacts();
    });

    // Bottone rimuovi contatto
    removeContactsBtn.addEventListener('click', ()=>{
        rubrica.removeContact(nameInput.value);
        nameInput.value = '';
    });

    editContactsBtn.addEventListener('click', ()=>{
        if (nameInput) {
            rubrica.editContact(nameInput.value, numberInput.value);
            nameInput.value = '';
            numberInput.value = '';
        }
    })
    
    