document.getElementById('generateBtn').addEventListener('click', () => {
  const name = document.getElementById('nameInput').value.trim();
  const age = parseInt(document.getElementById('ageInput').value);
  const colour = document.getElementById('colourInput').value.trim();
  const hobbies = document.getElementById('hobbiesInput').value.split(',').map(h => h.trim()).filter(Boolean);

  if (!name || !age || !colour || hobbies.length === 0) {
    alert('Please fill out all fields!');
    return;
  }

  const person = { name, age, favouriteColour: colour, hobbies };

  document.getElementById('name').textContent = person.name;
  document.getElementById('age').textContent = person.age + ' years old';
  document.getElementById('colour').textContent = person.favouriteColour;

  const hobbiesList = document.getElementById('hobbies');
  hobbiesList.innerHTML = '';
  person.hobbies.forEach(hobby => {
    const li = document.createElement('li');
    li.textContent = hobby;
    hobbiesList.appendChild(li);
  });

  let futureAge5 = person.age + 5;
  let futureAge10 = futureAge5 + 10;
  document.getElementById('future').textContent = `In 5 years, you will be ${futureAge5} years old. And in 10 more years, you'll be ${futureAge10}.`;

  let advice = '';
  if (person.age <= 18) {
    advice = "You’re still young — don’t rush decisions!";
  } else if (person.age <= 35) {
    advice = "You’re at the peak of your decision-making years — act smart!";
  } else {
    advice = "Time flies — but it’s never too late to start chasing your goals!";
  }
  document.getElementById('advice').textContent = advice;

  document.getElementById('dashboard').classList.remove('hidden');
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

document.getElementById('resetBtn').addEventListener('click', () => {
  document.getElementById('dashboard').classList.add('hidden');
  document.querySelector('form')?.reset();
  document.getElementById('nameInput').value = '';
  document.getElementById('ageInput').value = '';
  document.getElementById('colourInput').value = '';
  document.getElementById('hobbiesInput').value = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
