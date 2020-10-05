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

let normalFormat = [['title1','body1','2020-10-15',false],['title2','body2','2020-01-13',true],['title3','body3','2020-2-66',false]];

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
            let currentLoc = normalFormat[i][j];
            string = string + currentLoc + ':';
        }
        stringified.push(string);
    }
    return stringified;
}

submitTaskButton.addEventListener('click',() => {
    let title = titleInput.value;
    let body = bodyInput.value;
    let due = dueDate.value;
    if(urgentCheck.checked){
        urgentCheck.value='true';
    }else{
        urgentCheck.value='false';
    }
    let urgent= urgentCheck.value;

    

    //then load that back into the task array and call a render() function.
    console.log(title,body,due,urgent);

    localStorage.clear();
    localStorage.setItem('gigatasks', stringifyArray());

    //make render function that translates our stringified stuff
    
    taskForm.reset();
    hideElement(newTaskHolder);
});