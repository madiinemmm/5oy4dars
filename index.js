const btn = document.getElementById('btn');
const name = document.getElementById('name');
const age = document.getElementById('age');
const car = document.getElementById('car');
const desc = document.getElementById('description');

function validate() {
  if (!name.value) {
    name.focus();
    name.style.outlineColor = 'red';
    return false;
  } else {
    name.style.outlineColor = 'lightgray';
  }

  if (!age.value) {
    age.focus();
    age.style.outlineColor = 'red';
    return false;
  } else {
    age.style.outlineColor = 'lightgray';
  }
  if (age.value <= 0 || age.value >= 150) {
    alert("can't be that young!❌");
    age.focus();
  }
   if (!Number(age.value) ){
    alert("must be entered as a young number!");
    age.focus();
    return false;
   }  else {
    age.style.outlineColor = 'lightgray';
  }

  if (!car.value) {
    car.focus();
    alert("select a car✅");
    return false;
  }
  if (!desc.value) {
    desc.focus();
    desc.style.outlineColor = 'red';
    alert("enter a comment❗")
    return false;
  }else {
    desc.style.outlineColor = 'lightgray';
  }

    return true;
}
function clear() {
  name.value = '';
  age.value = '';
  car.value = '';
  desc.value = '';
}




 btn && btn.addEventListener('click', function() {

   if (validate()) {
     const user = {
      name: name.value,
      age: age.value,
      car: car.value, 
      desc: desc.value
     }

  let dataLocalStorage = [];
  if (localStorage.getItem('users')) {
    dataLocalStorage = JSON.parse(localStorage.getItem('users'));
  }
  dataLocalStorage.push(user);
  localStorage.setItem('users',JSON.stringify(dataLocalStorage));
  const tr = createRowOptimised(user, dataLocalStorage.length + 1);
  tbody.innerHTML += tr;

     clear();

   }


}) 
function createRow(user, index) {
  const tr = document.createElement('tr');

  const tdNo = document.createElement('td');
  tdNo.innerHTML = index;

  const tdName = document.createElement('td');
  tdName.innerHTML = user.name;

  const tdAge = document.createElement('td');
  tdAge.innerHTML = user.age;

  const tdCar = document.createElement('td');
  tdCar.innerHTML = user.car;

  const tdDesc = document.createElement('td');
  tdDesc.innerHTML = user.desc;

  tr.appendChild(tdNo);
  tr.appendChild(tdName);
  tr.appendChild(tdAge);
  tr.appendChild(tdCar);
  tr.appendChild(tdDesc);
  return tr;

}
function createRowOptimised(user, index) {
  return `
  <tr>
    <td>${index}</td>
    <td>${user.name}</td>
    <td>${user.age}</td>
    <td>${user.car}</td>
    <td>${user.desc}</td>
    <td>
    <span>Update</span>
    <span>Delete</span>
    </td>

</tr>
  `
};

document.addEventListener('DOMContentLoaded', function() {
  let data = [];
  if (localStorage.getItem('users')) {
    data = JSON.parse(localStorage.getItem('users'));
  };

  if (data.length && tbody) {
    data.forEach((element, index) => {
    const tr =  createRow(element, index + 1);
    tbody.appendChild(tr); 

    });
  }

});