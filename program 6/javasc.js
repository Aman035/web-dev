function validate()
{
  var emailid=document.querySelector("#mail").value;
  var regx= /@gmail.com/ ;
  if(regx.test(emailid))
  alert("Valid gmail id");
  else
  alert("Invalid gmail id");
}
document.querySelector("#submitbtn").addEventListener("click",validate);
