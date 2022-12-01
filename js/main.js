 // input title of project
let candidate = document.getElementById('candidate');
// input discribtion of project
let candidate2 = document.getElementById('candidate2');
// input date of project
let candidate3 = document.getElementById('candidate3');
// input time of project
let candidate4 = document.getElementById('candidate4');
let all_Projects = document.getElementById('allProjects');
let my_project = document.getElementsByClassName('my-project');
let allTasks = [];
let deltasks = [];
let completetasks = [];
if (localStorage.task != null)
{
    allTasks = JSON.parse(localStorage.task);
}
else
{
    allTasks = [];
}
if (localStorage.dell != null)
{
    deltasks = JSON.parse(localStorage.dell);
}
else
{
    deltasks = [];
}
if (localStorage.complete != null)
{
    completetasks = JSON.parse(localStorage.complete);
}
else
{
    completetasks = [];
}
// Add Task
function addItem()
{
   let newTask =
                {
                  name: candidate.value,
                  discribtion: candidate2.value,
                  date: candidate3.value,
                  time: candidate4.value
                }
          if (candidate.value != '' && candidate2.value != ''  && candidate3.value != '' && candidate4.value !='')
          {
            allTasks.push(newTask);
            swal({
                    title: "Successfully",
                    text: "Your Task has been Started",
                    icon: "success",
                    button: "Ok",
                });
            candidate.value  = "";
            candidate2.value = "";
            candidate3.value = "";
            candidate4.value = "";
            
          }
          else
          {
            swal({
                title: "Fields Empty !!",
                text: "Please Check The Missing Values ",
                icon: "error",
                button: "Ok",
            });
            }
  localStorage.setItem('task', JSON.stringify(allTasks));
  showData();
}


function showData()
{
  document.getElementById('delete').style.backgroundColor = "#ddd";
  document.getElementById('complete').style.backgroundColor = "#ddd";
  document.getElementById('inprogress').style.backgroundColor = "gold";
  document.getElementById('dlt').style.color = "#000";
  document.getElementById('comp').style.color = "#000";
  document.getElementById('progs').style.color = "#fff";

  let tasks = '';
    for (let i = 0 ; i < allTasks.length ; i++)
    {
        tasks +=`
                <div class="my-project">
                        <div class="header-project">
                          <div class="name-projects">
                            <p class="project-name">${allTasks[i].name}</p>
                          </div>
                          <div class="options">
                          <i class="fas fa-check mx-1" onclick="completeData(${i})"></i>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ffd700" onclick="updateData(${i})">
                              <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 
                                      0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8
                                      7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                            <i class="fas fa-trash-alt mx-1" onclick="deleteData(${i})"></i>
                            
                          </div>
                        </div>
                        <div class="discribtion-project">
                            <p class="dis-project">${allTasks[i].discribtion}</p>
                        </div>
                        <div class="time d-flex flex-column ">
                            <i class="far fa-clock "> ${allTasks[i].time}</i>
                            <div class="my-1">
                            <i class="fas fa-calendar-week me-1"></i> <span> ${allTasks[i].date}</span>
                            </div>
                            
                        </div>
                    </div>
                `
      document.getElementById('num-progress').innerHTML = i + 1;
  }
  document.getElementById('num-delete').innerHTML = deltasks.length;
  document.getElementById('num-complete').innerHTML = completetasks.length;
  document.getElementById('allProjects').innerHTML = tasks;
}
showData();
$('.togel').click(function()
    {
    $('.add-projects').fadeIn();
    });
$('.togel2').click(function()
    {
    $('.add-projects').fadeOut();
    });
function deleteData(i)
{
    //console.log(i);
  let deTask =
                {
                name: allTasks[i].name,
                discribtion: allTasks[i].discribtion,
                date: allTasks[i].date,
                time: allTasks[i].time
  }
  swal({
    title: "Are you sure ?",
    text: "Once deleted, you will be able to recover this task again !",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) =>
    {
      if (willDelete)
      {
        deltasks.push(deTask);
        localStorage.setItem('dell', JSON.stringify(deltasks));
        allTasks.splice(i, 1);
        localStorage.task = JSON.stringify(allTasks);
        document.getElementById('num-progress').innerHTML = (i + 1) - 1;
        document.getElementById('num-delete').innerHTML = deltasks.length;
        showData();
      }
      else
            {
            swal("Your task is safe !");
            }
        });
}        
function showdelData()
{
  document.getElementById('delete').style.backgroundColor = "red";
  document.getElementById('complete').style.backgroundColor = "#ddd";
  document.getElementById('inprogress').style.backgroundColor = "#ddd";
  document.getElementById('dlt').style.color = "#fff";
  document.getElementById('comp').style.color = "#000";
  document.getElementById('progs').style.color = "#000";
  let stasks = '';
  if (deltasks.length === 0) {
    document.getElementById('allProjects').innerHTML = " UN-AVAILABLE  DATA ";
  }
  else {
    for (let i = 0; i < deltasks.length; i++) {
      stasks += `
                <div class="my-project">
                        <div class="header-project">
                          <div class="name-projects">
                            <p class="project-name">${deltasks[i].name}</p>
                          </div>
                          <div class="options">
                            <i class="fa-solid fa-trash-arrow-up mx-1" onclick="restoredelData(${i})"></i>
                            <i class="fas fa-trash-alt" onclick="deletedelData(${i})"></i>
                          </div>
                        </div>
                        <div class="discribtion-project">
                            <p class="dis-project">${deltasks[i].discribtion}</p>
                        </div>
                        <div class="time d-flex flex-column">
                            <i class="far fa-clock "> ${deltasks[i].time}</i>
                            <span> ${deltasks[i].date}</span>
                            
                        </div>
                    </div>
                `;
    }
    
    document.getElementById('allProjects').innerHTML = stasks;
  }
}
function deletedelData(i)
{
    //console.log(i);
  swal({
    title: "Are you sure ?",
    text: "Once deleted, you will be not able to recover this task again !",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) =>
    {
      if (willDelete)
      {
  deltasks.splice(i, 1);
  localStorage.dell = JSON.stringify(deltasks);
  document.getElementById('num-delete').innerHTML = (i + 1) - 1;
        showdelData();
        }
      else
            {
            swal("Your task in the trash !");
            }
        });
}
function restoredelData(i)
{
   //console.log(i);
  let restoreTask =
                {
                name: deltasks[i].name,
                discribtion: deltasks[i].discribtion,
                date: deltasks[i].date,
                time: deltasks[i].time
  }
  swal({
    title: "Are you sure ?",
    text: "Your task will restored to the progress tasks !",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) =>
    {
      if (willDelete)
      {
        allTasks.push(restoreTask);
        deltasks.splice(i, 1);
        localStorage.dell = JSON.stringify(deltasks);
        localStorage.task = JSON.stringify(allTasks);
        document.getElementById('num-progress').innerHTML = (i + 1) + 1;
        document.getElementById('num-delete').innerHTML = deltasks.length;
        showData();
      }
      else
            {
            swal(" Your task is still in the trash !");
            }
        });
}

function updateData(i)
{
  console.log(i);
  candidate.value  = allTasks[i].name;
  candidate2.value = allTasks[i].discribtion;
  candidate3.value = allTasks[i].date;
  candidate4.value = allTasks[i].time;
  $('.add-projects').fadeIn();
}


function completeData(i)
{
    //console.log(i);
  let completeTask =
                {
                name: allTasks[i].name,
                discribtion: allTasks[i].discribtion,
                date: allTasks[i].date,
                time: allTasks[i].time
  }
  completetasks.push(completeTask);
  localStorage.setItem('complete', JSON.stringify(completetasks));
  allTasks.splice(i, 1);
  localStorage.task = JSON.stringify(allTasks);
  document.getElementById('num-progress').innerHTML = (i + 1) - 1;
  document.getElementById('num-complete').innerHTML = completetasks.length;
  swal({
        title: "Successfully",
        text: "Your Task has been Completed",
        icon: "success",
        button: "Ok",
      });
  showData();
}
function showCompleteData()
{
  document.getElementById('delete').style.backgroundColor = "#ddd";
  document.getElementById('complete').style.backgroundColor = "green";
  document.getElementById('inprogress').style.backgroundColor = "#ddd";
  document.getElementById('dlt').style.color = "#000";
  document.getElementById('comp').style.color = "#fff";
  document.getElementById('progs').style.color = "#000";
  let comptasks = '';
  if (completetasks.length === 0) {
    document.getElementById('allProjects').innerHTML = " UN-AVAILABLE  DATA ";
  }
  else {
    for (let i = 0; i < completetasks.length; i++) {
      comptasks += `
                <div class="my-project">
                        <div class="header-project">
                          <div class="name-projects">
                            <p class="project-name">${completetasks[i].name}</p>
                          </div>
                          <div class="options">
                            <i class="fas fa-trash-alt" onclick=" deletecompleteData(${i})"></i>
                          </div>
                        </div>
                        <div class="discribtion-project">
                            <p class="dis-project">${completetasks[i].discribtion}</p>
                        </div>
                        <div class="time d-flex flex-column">
                            <i class="far fa-clock "> ${completetasks[i].time}</i>
                            <span> ${completetasks[i].date}</span>
                            
                        </div>
                    </div>
                `;
    }
    
    document.getElementById('allProjects').innerHTML = comptasks;
  }
}
function deletecompleteData(i)
{
    //console.log(i);
  swal({
    title: "Are you sure ?",
    text: "Once deleted, you will be not able to recover this task again !",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) =>
    {
      if (willDelete)
      {
  completetasks.splice(i, 1);
  localStorage.complete = JSON.stringify(completetasks);
  document.getElementById('num-complete').innerHTML = (i + 1) - 1;
        showCompleteData();
        }
      else
            {
            swal("Your task in the completed section !");
            }
        });
}