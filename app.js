const scriptURL = 'https://script.google.com/macros/s/AKfycbw0N33ndxuqj7bZLrY5rThMiDBQL8ulU6p9CfMTW22v-OSRsDE/exec'
const form = document.forms['submit-to-google-sheet']
const fadeForm = document.getElementById("survey-form")


  form.addEventListener('submit', e => {
    e.preventDefault()
    document.getElementById("submit-div").style.display="none";
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(() => fadeForm.reset())
      .then(response => window.location="thanks.html")
      .catch(error => console.error('Error!', error.message))
      console.log("hello")
  })