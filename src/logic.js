export let newTaskButton = document.getElementById('newTaskButton');
export let newTaskHolder = document.getElementById('taskFormHolder');
let cancelButton = document.getElementById('cancelButton');
let rootDiv = document.getElementById('root');

//form submit and inputs
let taskForm = document.getElementById('taskForm');
let submitTaskButton = document.getElementById('submitTaskButton');
let titleInput = document.getElementById('titleInput');
let bodyInput = document.getElementById('bodyInput');
let dueDate = document.getElementById('dueDate');
let urgentCheck = document.getElementById('urgentCheck');

export function showElement(id) {
    id.classList.add('d-flex');
    id.classList.remove('d-none');
};

export function hideElement(id) {
    id.classList.remove('d-flex');
    id.classList.add('d-none');
};

cancelButton.addEventListener('click',() => {
    hideElement(newTaskHolder);
});
rootDiv.addEventListener('click',() => {
    hideElement(newTaskHolder);
});

export let normalFormat = [['Example Task','This here task is an example',new Date('2020-01-15'),true]];

const stringifyArray = () => {
    //use normalFormat array for now, but will change once testing done
    let stringified = [];
    //iterate through every item in task array
    for(let i=0; i<normalFormat.length; i++){
        //set an empty string
        let string = '';
        //iterate through the array that holds task info
        for(let j=0; j<normalFormat[i].length; j++){
            //add current array location to string
            let currentLoc = normalFormat[i][j].toString();
            string = string + currentLoc + ':';
        }
        stringified.push(string);
    }
    return stringified.join(',');
}

console.log(stringifyArray(normalFormat));

const unString = () => {
    let taskString;
    !localStorage.getItem('gigatasks') ? taskString='Example Task:This here task is an example:2020-01-15:true':taskString=localStorage.getItem('gigatasks');
    let splitTaskStrings = taskString.split(',');
    let splitTaskArr = [];
    for(let i in splitTaskStrings){
        splitTaskArr.push(splitTaskStrings[i].split(":"));
        splitTaskArr[2] = new Date(splitTaskArr[i][2]);
    }
    return(splitTaskArr);
}

console.log(unString());
//make render function for onload that translates our stringified array
//to be used inside the app.js file

submitTaskButton.addEventListener('click',() => {
    if(urgentCheck.checked){
        urgentCheck.value='true';
    }else{
        urgentCheck.value='false';
    }
    //turn current input into array
    let newTaskArr = [titleInput.value,bodyInput.value,dueDate.value,urgentCheck.value];
    //push new task into current tasks array
    normalFormat.push(newTaskArr);

    localStorage.clear();
    localStorage.setItem('gigatasks', stringifyArray(normalFormat));

    //refill task array
    
    taskForm.reset();
    hideElement(newTaskHolder);
});