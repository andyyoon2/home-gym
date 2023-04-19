window.onload = initForm;

function initForm() {
  const form = document.querySelector('form#my-form');
  const firstName = form.querySelector('input#firstName');
  const lastName = form.querySelector('input#lastName');
  const email = form.querySelector('input#email');
  const values = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
  };
  firstName.addEventListener('change', (event) => updateValue(event, 'firstName'));
  lastName.addEventListener('change', (event) => updateValue(event, 'lastName'));
  email.addEventListener('change', (event) => updateValue(event, 'email'));

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
    console.log('hello', values);
  });

  function updateValue(event, value) {
    console.log(event);
    values[value] = event.target.value;
  }
}

