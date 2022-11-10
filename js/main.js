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
if (localStorage.task != null)
{
    allTasks = JSON.parse(localStorage.task);
}
else
{
    allTasks = [];
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
          if (candidate.value !== "" && candidate2.value !== ""  && candidate3.value !=="" && candidate4.value !== "")
          {
            /*
            project_name.appendChild(title);
            my_project.appendChild(header_project);
            my_project.appendChild(discribtion_project);
            my_project.appendChild(time);
            all_Projects.appendChild(my_project);
            */
            allTasks.push(newTask);
            candidate.value = "";
            candidate2.value = "";
            candidate3.value = "";
            candidate4.value = "";
          }
          localStorage.setItem('task', JSON.stringify(allTasks));
  showData();
}


function showData()
{
    let tasks = '';
    for (let i = 0 ; i < allTasks.length; i++)
    {
        tasks +=`
                <div class="my-project">
                        <div class="header-project">
                          <div class="name-projects">
                            <p class="project-name">${allTasks[i].name}</p>
                          </div>
                          <div class="options">
                            <i class="fas fa-trash-alt" onclick="deleteData(${i})"></i>
                          </div>
                        </div>
                        <div class="discribtion-project">
                            <p class="dis-project">${allTasks[i].discribtion}</p>
                        </div>
                        <div class="time">
                            <i class="far fa-clock">${allTasks[i].time}</i>
                            <span class="time-d">${allTasks[i].date}</span>
                        </div>
                    </div>
                `
    }
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
    allTasks.splice(i, 1);
    localStorage.task = JSON.stringify(allTasks);
    showData();
}


 
 



  
  








  
   




