 

 const menuIcon = document.querySelector("#menu-icon");
 const menu = document.querySelector("#menu");

 menuIcon.addEventListener("click", ()=>{
    //   console.log(nav)


    // menu.classList.toggle("hidden");

  if(menu.className === "hidden"){
    menu.classList.remove("hidden");
  }
  else{
    menu.classList.add("hidden");
  }


 });



 
 const show = document.querySelector("#unhide");
 const pass = document.querySelector("#password");

 show.addEventListener("click", function(){
  // this.classlist.toggle("fa-eye-slash")
  const type = pass.getAttribute("type") ==="password" ? "text" : "password";
  pass.setAttribute("type",type);

 });


 
 const show1 = document.querySelector("#unhide1");
 const pass1 = document.querySelector("#password1");

 show1.addEventListener("click", function(){
  // this.classlist.toggle("fa-eye-slash")
  const type = pass1.getAttribute("type") ==="password" ? "text" : "password";
  pass1.setAttribute("type",type);

 });
