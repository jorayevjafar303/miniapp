const links = document.querySelectorAll('footer a');
const sections = document.querySelectorAll('section');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.dataset.section;
    sections.forEach(s => s.classList.remove('active'));
    document.getElementById(target).classList.add('active');
  });
});

// Admin login
function loginAdmin() {
  const pass = document.getElementById('adminPass').value;
  if(pass === '1234'){ // oddiy parol misol
    document.getElementById('adminPanel').style.display='block';
    alert('Admin panel ochildi');
  } else {
    alert('Parol xato');
  }
}

// Bo‘lim matnini yangilash
function updateSection(id){
  const newText = document.getElementById(id+'Text').value;
  document.getElementById(id).innerText = newText;
  alert(id+' bo‘limi yangilandi');
}
