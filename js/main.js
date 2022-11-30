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
  /*
          // container of all projects
          let all_Projects = document.getElementById('allProjects');
          // create trash & clock icons
          let trash = document.createElement("i")
          trash.className = "fas fa-trash-alt";
          let clock = document.createElement("i")
          clock.className = "far fa-clock";
          // function to delete the task 
          trash.onclick  = function () {      all_Projects.removeChild(my_project);    };

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
*/
          if (candidate.value != '' && candidate2.value != ''  && candidate3.value != '' && candidate4.value !='')
          {
            /*
            project_name.appendChild(title);
            my_project.appendChild(header_project);
            my_project.appendChild(discribtion_project);
            my_project.appendChild(time);
            all_Projects.appendChild(my_project);
            */
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
  showData();
}
function showCompleteData()
{
  document.getElementById('delete').style.backgroundColor = "#ddd";
  document.getElementById('complete').style.backgroundColor = "green";
  document.getElementById('inprogress').style.backgroundColor = "#ddd";
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
  completetasks.splice(i, 1);
  localStorage.complete = JSON.stringify(completetasks);
  document.getElementById('num-complete').innerHTML = (i + 1) - 1;
  showCompleteData();
}
/*
for (let i = 0; i < allTasks.length; i++)
{
  let today = new Date(),
      month = today.getMonth() + 1,
      year  = today.getFullYear(),
      date  = today.getDate(),
      day   = today.getDay(),
      hours = today.getHours(),
      minutes = today.getMinutes();

  if (hours > allTasks[i].time)
  {
    allTasks.splice(i, 1);
    localStorage.task = JSON.stringify(allTasks);
  }
  showData();
}*/