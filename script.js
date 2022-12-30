const addbtn = document.getElementById('addbtn');
const container = document.getElementById('main-container');
const storeData = ()=>{
    const textareaData = document.querySelectorAll('textarea');
    const notes =[];
    textareaData.forEach((note)=>{
        return notes.push(note.value);
    });
    localStorage.setItem('notes',JSON.stringify(notes));
}


 const newNote = (text ="")=>{
    const note = document.createElement('div');
    note.classList.add('main-note-body');

    const innerNote = ` 
        <div class="tools-div">
            <span class="flex icon cl2" id="deletebtn">
                <i class="fa fa2 fa-solid fa-trash-can"></i>
            </span>
            <span class="icon flex cl1" id="editbtn">
                <i class="fa fa1 fa-regular fa-pen-to-square"></i>
            </span>
            <span class="icon flex cl0" id="savebtn">
                <i class="fa-regular fa-floppy-disk"></i>
            </span>
    </div>
    <div class="write-div">
    <div class="note-content ${text ? "":"hidden"}"> </div>
    <textarea class="tarea ${text ? "hidden":""}"placeholder="Write here....." label="text"></textarea>
    </div>
    `;

    note.insertAdjacentHTML('afterbegin',innerNote);

    const editbtn = note.querySelector('#editbtn');
    const deletebtn = note.querySelector('#deletebtn');
    const notediv = note.querySelector('.note-content');
    const texta = note.querySelector('textarea');
    const savebtn = note.querySelector('#savebtn');


    deletebtn.addEventListener('click',()=>{
        note.remove()
        storeData();
    });

    notediv.innerHTML=text;
    texta.value = text;

    editbtn.addEventListener('click',()=>{
        texta.classList.toggle('hidden');
        notediv.classList.toggle('hidden');
    })

    texta.addEventListener('change',(event)=>{
        const val = event.target.value;
        notediv.innerHTML= val;
        storeData();
    });
    container.appendChild(note);
 }


const notea = JSON.parse(localStorage.getItem('notes'));
console.log(notea);

if(notea){
    notea.forEach((note)=>{newNote(note)});
}
addbtn.addEventListener('click',()=>newNote());

let ht = window.innerHeight-175+'px';
container.style.minHeight=ht;




