// TODO: add code here
window.addEventListener("load", function() {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    .then(function(response) {
        response.json().then(function(json) {
          json.sort(function (a, b) {
            return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
          });
          const  count = document.getElementById("count");
          count.innerHTML = `There are ${json.length} astronauts in your list.`;
          const astronaut = document.getElementById("container");
          let index = 0;
          while (index < json.length) {
            let activeClass = json[index].active ? "active" : "";
            console.log(activeClass);
            astronaut.innerHTML += `
            <div class="astronaut">
              <div class="bio">
                  <h3> ${json[index].firstName}  ${json[index].lastName} </h3>
                <ul>
                  <li>Hours in space: ${json[index].hoursInSpace} </li>
                  <li class="${activeClass}">Active: ${json[index].active}</li>
                  <li>Skills: ${json[index].skills}</li>
                </ul>
              </div>
              <img class="avatar" src=${json[index].picture} height=200></img>
            </div>

            `;
          index = index + 1;    
      
          }
        });
    });

});