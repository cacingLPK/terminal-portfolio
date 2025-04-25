
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome to akm.web.id");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("Want to know me? Just type below command:");
 
  createCode("who are you", "You will know who am i and what i do.");
  // createCode("all", "See all commands.");
  createCode("contact", "How to connect to me.");
  createCode("help", "Show command you can type.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# you're";
  span1.textContent = " in";
  span2.textContent = " ~/akm.web.id";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "help"){
    trueValue(value);
    
    // createCode("projects", "My github page with my projects. Follow me there ;)");
    createCode("who are you", "You will know who am i and what i do.");
    createCode("contact", "How to connect to me.");
    createCode("help", "Show command you can type.")
    createCode("clear", "Clean the terminal.");
    
  }
  // else if(value === "projects"){
  //   trueValue(value);
  //   createText("<a href='https://github.com/heberleonard2' target='_blank'><i class='fab fa-github white'></i>AKM</a>")
  // }
  else if(value === "who are you"){
    trueValue(value);
    createText("Hi, My name is Aris K. Marantika ^^,")
    createText("I am a full time worker at PANDI as System Administrator. I am responsible for maintaining the reliability and availability of the .id DNS service. ")
    createText("I also do freelance project as Network Administrator, System Administrator, IT Support, and Site Reliable Engineer in my free time.")
    createText("I can design, manage, and maintain physical infrastructure such as routers, switches, and servers. I understand how to run shared hosting systems, resource and capacity monitoring, local servers, and cloud servers. I understand some of today's popular technologies such as virtualization, containerization, continuous development, and automation.")
    createText("Besides all that, I continue to develop my skills and knowledge to keep up with today's industry needs.")
  }
  else if(value === "contact"){
    trueValue(value);
    // createText("<a href='https://github.com/heberleonard2' target='_blank'><i class='fab fa-github white'></i> github.com/heberleonard2</a>")
    createText("<a href='https://www.linkedin.com/in/akrisnam/' target='_blank'><i class='fab fa-linkedin-in white'></i> LinkedIn</a>")
    createText("<a href='mailto:hi@akm.web.id' target='_blank'><i class='fa fa-envelope white'></i> Email</a>")
  }
  else if(value === "contac"){
    trueValue(value);
    createText("Didn't you mean: contact?")
  }
  else if(value === "clean"){
    trueValue(value);
    createText("Didn't you mean: clear?")
  }
  else if(value === "who"){
    trueValue(value);
    createText("Didn't you mean: who are you?")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createErrorText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

function createErrorText(text) {
  const p = document.createElement("p");
  p.innerText = text;
  app.appendChild(p);
}

open_terminal();
