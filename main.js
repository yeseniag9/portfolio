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


const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "gonz.yesenia10@gmail.com",
        Password: "AA7719A48C65B75FDF7C16FFA327ED51E6BC",
        To: 'gonz.yesenia10@gmail.com',
        From: "gonz.yesenia10@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});