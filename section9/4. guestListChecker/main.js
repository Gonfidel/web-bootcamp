var guestList = "phil;steve;joe;bob;dan;nic;Mark Jones".split(";");
function listCheck(guest){
  if(guestList.includes(guest)){
    return true;
  }
  return false;
}
function alertListCheck(guest){
  if(listCheck(guest)){
    alert(`You're on the list, welcome.`);
  }else{
    alert(`You're not on the list.`)
  }
}

let name = document.getElementById('name');
document.getElementById('check-list').onclick=()=>alertListCheck(name.value);