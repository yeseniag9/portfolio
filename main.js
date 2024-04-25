window.onscroll = () => {
  const nav = document.querySelector('#nav');
  if(this.scrollY <= 109) nav.className = ''; else nav.className = 'scroll';

  const a = document.querySelector('a')
  if(this.scrollY <= 109) a.className = ''; else a.className = 'scroll';

  const drop1 = document.querySelector('#drop1')
  if(this.scrollY <= 109) drop1.className = ''; else drop1.className = 'scroll';

  const drop2 = document.querySelector('#drop2')
  if(this.scrollY <= 109) drop2.className = ''; else drop2.className = 'scroll';

  const i = document.querySelector('#i')
  if(this.scrollY <= 109) i.className = ''; else i.className = 'scroll';
}

function validateForm(){
  let name = document.forms['contact-form']['name'].value;
  let email = document.forms['contact-form']['email'].value;
  let message = document.forms['contact-form']['message'].value;

  if (name == '' || hasNumber(name)){
      alert('Name must be filled out and must only contain letters');
      return false;
  } else if (email == ''){
      alert('Email or phone must be filled out');
      return false;
  } else if (!(email.includes('@'))){
      alert('Email does not seem to be valid');
      return false;
  } else if (message == ''){
      alert('Message must be filled out');
      return false;
  } else {
      // confirm or cancel
      return confirm('Do you really want to sent the message?')
  }
}

function hasNumber(myString) {
  return /\d/.test(myString);
}