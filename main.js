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
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

   // sendEmail();
});