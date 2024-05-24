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


const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const mess = document.getElementById("message");


function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "username",
        Password: "password",
        To: 'them@website.com',
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});