const container = document.getElementById('container');
colors = ['blue', 'grey', 'yellow', 'purple', 'orange']
for (let i=0; i < 5; i++) {
  const divs = document.createElement('div');
  divs.classList.add('element');
  divs.style.color = colors[i + 0];
  divs.textContent = `Element ${i+1}`;
  container.appendChild(divs);
}
