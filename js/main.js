// let neww = document.querySelector('.cl');
// let re = document.querySelector('.cli');
// let divs =  document.querySelector('.divs');
// neww.addEventListener("click", addNew);
// let one = neww.addEventListener("click", addNew);
// re.addEventListener("click", remove);
// let two = re.addEventListener("click", remove);
//
//
//
//     function addNew() {
//       let newDiv = document.createElement("div");
//       console.log('add');
//       newDiv.className = "newDiv";
//       divs.appendChild(newDiv);
//     }
//     function remove() {
//       let removee = document.getElementsByClassName("newDiv");
//       divs.removeChild(removee);
//       console.log('remove');
//     }
//
//

// Add Task
 function addItem() {
   // container of all projects
 let all_Projects = document.getElementById('allProjects');
  // input title of project
 let candidate = document.getElementById('candidate');
  // input discribtion of project
 let candidate2 = document.getElementById('candidate2');
 // input date of project
 let candidate3 = document.getElementById('candidate3');
 // input time of project
 let candidate4 = document.getElementById('candidate4');
 // create trash & clock icons
 let trash = document.createElement("i")
 trash.className = "fas fa-trash-alt";
 let clock = document.createElement("i")
 clock.className = "far fa-clock";

 trash.onclick  = function () {
  all_Projects.removeChild(my_project);
};

 // project content
 let my_project = document.createElement("div");
 my_project.className = "my-project";

 // project header
 let header_project = document.createElement("div");
 header_project.className = "header-project";
// name of project inside project header project
 let name_projects = document.createElement("div");
 name_projects.className = "name-projects";
                // append (div name_projects) inside (header_project div)
               header_project.appendChild(name_projects);
               header_project.appendChild(trash);
 // title of project inside name of project
 let project_name = document.createElement("p");
 project_name.className = "project-name";
                   // append (div project_name) inside (name_projects div)
                   name_projects.appendChild(project_name)
 let title = document.createTextNode(candidate.value);
 // container Describtion project
 let discribtion_project = document.createElement("div");
 discribtion_project.className = "discribtion-project";
 // content of discribtion project inside (container discribtion project)
 let dis_project = document.createElement("p");
 dis_project.className = "dis-project";
 let discribtion = document.createTextNode(candidate2.value);
dis_project.appendChild(discribtion);
// append (P dis_project) inside (discribtion_projects div)
discribtion_project.appendChild(dis_project);
 // Time of project
 let time = document.createElement("div");
 time.className = "time";
 // content time of project inside time
 let span = document.createElement("span");
 span.className = "time-d";
 let timefull = document.createTextNode(candidate4.value);
 span.appendChild(timefull);
time.appendChild(span);

 my_project.setAttribute('id' , candidate.value);


  if (candidate.value !== "" && candidate2.value !== ""  && candidate3.value !=="" && candidate4.value !== "")
  {
     project_name.appendChild(title);
     my_project.appendChild(header_project);
     my_project.appendChild(discribtion_project);
     my_project.appendChild(time);
     all_Projects.appendChild(my_project);
     candidate.value = "";
     candidate2.value = "";
     candidate3.value = "";
     candidate4.value = "";
  }
}
//  if (candidate.value === "fri" || candidate2.value === "25" ||  candidate.value === "march" || candidate3.value === "sp" || candidate4.value === "dis")
//  {
//    let txt = document.createTextNode(candidate.value);
//    let txt2= document.createTextNode(candidate2.value);
//    let txt3= document.createTextNode(candidate3.value);
//    let txt4= document.createTextNode(candidate4.value);
//    div.appendChild(txt);
//    div.appendChild(txt2);
//    div.appendChild(txt3);
//    div.appendChild(txt4);
//    divA.appendChild(div);
//  }
//  else {
//    alert("not valid");
//  }
//
// }
//
// function removeItem() {
//   let divA = document.getElementById('dynamic');
//   let candidate = document.getElementById('candidate');
//   let item = document.getElementById(candidate.value);
//   if (  candidate2.value !== "25" ||  candidate.value !== "fri"|| candidate3.value !== "sp" || candidate4.value !== "dis" )
//   {
//     alert("not valid");
//   }
// else {
//     divA.removeChild(item);
// }
// }
// $('.togel').click(function()
//   {
//    $('.mmmm').fadeToggle();
//   });
//
//   let mmmm = document.querySelector('.mmmm');
//   let my_page = document.querySelector('.my-page');
//

//   function TOOgle() {
//
//     mmmm.style.display = "block";
//   }
function kk()
{
  let ll = document.getElementById("allProjects");
  let ppp = document.createElement("div");
  ppp.className = "my-project";

  let kkk = document.createElement("div");
  kkk.className = "project-header";
  let cc = document.createElement("div");
    cc.className = "name-projects";
      let u = document.createElement("p");
      u.className = "project-name";
          let o = document.createTextNode("ssstudddinggg");

      let f =     document.createElement("div");
      f.className = "discribtion-project";
      let w= document.createElement("p");
      w.className = "dis-project";
      let d = document.createTextNode("plalalalalal")
      w.appendChild(d);
      f.appendChild(w);
      ppp.appendChild(f);
     u.appendChild(o);
     cc.appendChild(u);
     kkk.appendChild(cc);
     ppp.appendChild(kkk);
     ppp.appendChild(f);
  ll.appendChild(ppp);
}


$('.togel').click(function()
   {
    $('.add-projects').fadeIn();
     });

 $('.togel2').click(function()
    {
     $('.add-projects').fadeOut();
      });


  //     const inputVal = document.getElementsByClassName('inputVal')[0];
  //
  //  const addTaskBtn = document.getElementsByClassName('btn')[0];
  //
  //
  // addTaskBtn.addEventListener('click', function (){
  //
  // if(inputVal.value.trim()!=0){
  //        let localItems = JSON.parse( localStorage.getItem('localItem'))
  //     if(localItems === null){
  //          taskList = []
  //
  //     }else{
  //         taskList = localItems;
  //     }
  //     taskList.push(inputVal.value)
  //     localStorage.setItem('localItem', JSON.stringify(taskList));
  // }
  //
  //     showItem()
  // })
  //
  // function showItem(){
  //     let localItems = JSON.parse( localStorage.getItem('localItem'))
  //     if(localItems === null){
  //          taskList = []
  //
  //     }else{
  //         taskList = localItems;
  //     }
  //
  //
  // let html = '';
  // let itemShow = document.querySelector('#allProjects');
  // taskList.forEach((data, index )=> {
  //
  //
  //     html += `
  //     <div class="todoList">
  //     <p class="pText">${data}</p>
  //     <button class="deleteTask" onClick="deleteItem(${index})">x</button>
  //     </div>
  //     `
  // })
  // itemShow.innerHTML = html;
  // }
  // showItem()
  //
  // function deleteItem(index){
  //     let localItems = JSON.parse( localStorage.getItem('localItem'))
  //     taskList.splice(index, 1)
  //     localStorage.setItem('localItem', JSON.stringify(taskList));
  //     showItem()
  // }
  //
  // function clearTask(){
  //
  // localStorage.clear()
  // showItem()
  // }
//   // Empty Array To Store The Tasks
// let arrayOfTasks = [];
//
// // Check if Theres Tasks In Local Storage
// if (localStorage.getItem("projects")) {
//   arrayOfTasks = JSON.parse(localStorage.getItem("projects"));
// }
//
// getDataFromLocalStorage();
//
// function addTaskToArray(taskText) {
//   // Task Data
//   const task = {
//     id: Date.now(),
//     title: taskText,
//     completed: false,
//   };
//   // Push Task To Array Of Tasks
//   arrayOfTasks.push(projects);
//   // Add Tasks To Page
//   addElementsToPageFrom(arrayOfTasks);
//   // Add Tasks To Local Storage
//   addDataToLocalStorageFrom(arrayOfTasks);
// }
//
//
// function addElementsToPageFrom(arrayOfTasks) {
//   // Empty Tasks Div
//   tasksDiv.innerHTML = "";
//   // Looping On Array Of Tasks
//   arrayOfTasks.forEach((task) => {
//     // Create Main Div
//     let div = document.createElement("div");
//     div.className = "task";
//     // Check If Task is Done
//     if (task.completed) {
//       div.className = "task done";
//     }
//     div.setAttribute("data-id", task.id);
//     div.appendChild(document.createTextNode(task.title));
//     // Create Delete Button
//     let span = document.createElement("span");
//     span.className = "del";
//     span.appendChild(document.createTextNode("Delete"));
//     // Append Button To Main Div
//     div.appendChild(span);
//     // Add Task Div To Tasks Container
//     tasksDiv.appendChild(div);
//   });
// }
//
// function addDataToLocalStorageFrom(arrayOfTasks) {
//   window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
// }
//
// function getDataFromLocalStorage() {
//   let data = window.localStorage.getItem("tasks");
//   if (data) {
//     let tasks = JSON.parse(data);
//     addElementsToPageFrom(tasks);
//   }
// }
//
//
// function deleteTaskWith(taskId) {
//   // For Explain Only
//   // for (let i = 0; i < arrayOfTasks.length; i++) {
//   //   console.log(`${arrayOfTasks[i].id} === ${taskId}`);
//   // }
//   arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
//   addDataToLocalStorageFrom(arrayOfTasks);
// }
//
// function toggleStatusTaskWith(taskId) {
//   for (let i = 0; i < arrayOfTasks.length; i++) {
//     if (arrayOfTasks[i].id == taskId) {
//       arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
//     }
//   }
//   addDataToLocalStorageFrom(arrayOfTasks);
// }



// El ZEROOOOO
/*
let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Empty Array To Store The Tasks
let arrayOfTasks = [];

// Check if Theres Tasks In Local Storage
if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

// Trigger Get Data From Local Storage Function
getDataFromLocalStorage();

// Add Task
submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value); // Add Task To Array Of Tasks
    input.value = ""; // Empty Input Field
  }
};

// Click On Task Element
tasksDiv.addEventListener("click", (e) => {
  // Delete Button
  if (e.target.classList.contains("del")) {
    // Remove Task From Local Storage
    deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
    // Remove Element From Page
    e.target.parentElement.remove();
  }
  // Task Element
  if (e.target.classList.contains("task")) {
    // Toggle Completed For The Task
    toggleStatusTaskWith(e.target.getAttribute("data-id"));
    // Toggle Done Class
    e.target.classList.toggle("done");
  }
});

function addTaskToArray(taskText) {
  // Task Data
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  // Push Task To Array Of Tasks
  arrayOfTasks.push(task);
  // Add Tasks To Page
  addElementsToPageFrom(arrayOfTasks);
  // Add Tasks To Local Storage
  addDataToLocalStorageFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) {
  // Empty Tasks Div
  tasksDiv.innerHTML = "";
  // Looping On Array Of Tasks
  arrayOfTasks.forEach((task) => {
    // Create Main Div
    let div = document.createElement("div");
    div.className = "task";
    // Check If Task is Done
    if (task.completed) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    // Create Delete Button
    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete"));
    // Append Button To Main Div
    div.appendChild(span);
    // Add Task Div To Tasks Container
    tasksDiv.appendChild(div);
  });
}

function addDataToLocalStorageFrom(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElementsToPageFrom(tasks);
  }
}

function deleteTaskWith(taskId) {
  // For Explain Only
  // for (let i = 0; i < arrayOfTasks.length; i++) {
  //   console.log(`${arrayOfTasks[i].id} === ${taskId}`);
  // }
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataToLocalStorageFrom(arrayOfTasks);
}

function toggleStatusTaskWith(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
    }
  }
  addDataToLocalStorageFrom(arrayOfTasks);
}
*/

/**
<div class="container">
      <div class="form">
        <input type="text" class="input" />
        <input type="submit" class="add" value="Add Task" />
      </div>
      <div class="tasks"></div>
    </div>
**/
