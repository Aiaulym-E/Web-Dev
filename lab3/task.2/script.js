const form = document.querySelector('.list');   
const input = document.querySelector('.input'); 
const list = document.querySelector('#list');   

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (input.value.trim() === "") return; 

  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const span = document.createElement('span');
  const btn = document.createElement('button');

  checkbox.type = 'checkbox';
  span.textContent = input.value;
  btn.textContent = '🗑️'; 

  checkbox.addEventListener('change', () => {
    span.classList.toggle('done');
  });

  btn.addEventListener('click', () => {
    list.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(btn);
  list.appendChild(li);

  input.value = '';
});