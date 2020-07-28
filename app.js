const scriptURL = 'https://script.google.com/macros/s/AKfycbw0N33ndxuqj7bZLrY5rThMiDBQL8ulU6p9CfMTW22v-OSRsDE/exec'
const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    // setTimeout(target.style.opacity = '0', 3000);
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => window.location="thanks.html")
      .catch(error => console.error('Error!', error.message))
  })