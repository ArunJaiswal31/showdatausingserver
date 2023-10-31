function savetoLocalStorage(event) {
  event.preventDefault();
  const name = event.target.username.value;
  const email = event.target.emailId.value;
  const ph_no = event.target.no.value;
  //     // localStorage.setItem('name',name);
  // localStorage.setItem('email',email);
  const obj = {
    name,
    email,
    ph_no,
  };
  //localStorage.setItem(obj.name,JSON.stringify(obj))
  axios
    .post(
      "https://crudcrud.com/api/3ee372af1e60455e8fad7568fdea73f5/appointmentdata",
      obj
    )
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err));
  showUSersonScreen(response.data[i])
}
function showUSersonScreen(obj) {
  const parentElem = document.getElementById("listOfitems");
  const childElem = document.createElement("li");

  childElem.textContent = obj.name + "- " + obj.email + "- " + obj.ph_no;

  const deleteButt = document.createElement("input");
  deleteButt.type = "button";
  deleteButt.value = "Delete";
  deleteButt.onclick = () => {
    localStorage.removeItem(obj.name);
    parentElem.removeChild(childElem);
  };

  const editButt = document.createElement("input");
  editButt.type = "button";
  editButt.value = "Edit";
  editButt.onclick = () => {
    localStorage.removeItem(obj.email);
    parentElem.removeChild(childElem);
    document.getElementById("usernameInputTag").value = obj.name;
    document.getElementById("emailIdInputTag").value = obj.email;
  };

  childElem.appendChild(deleteButt);
  childElem.appendChild(editButt);

  parentElem.appendChild(childElem);
}

window.addEventListener('DOMContentLoaded',()=>{
axios.get("https://crudcrud.com/api/3ee372af1e60455e8fad7568fdea73f5/appointmentdata")
.then((response)=>{
  console.log(response)
for(var i=0;i<response.data.length;i++){
  showUSersonScreen(response.data[i])
}


})
.catch(err=>console.log(err))
})

