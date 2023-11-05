let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}





let sections = document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');

window.onscroll=()=>{
sections.forEach(sec=>{
    let top = window.scrollY;
    let offset = sec.offsetTop-100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top>=offset && top<offset+height){
        navLinks.forEach(links=>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    }
});

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
}




function sendEmail(){

    var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };
    Email.send({
        Host : "smtp.gmail.com",
        Username : "sankhadiproy8@gmail.com",
        Password : "wetpussy#404#notfound",
        To : 'beluhecker8@gmail.com',
        From : document.getElementById("email").value,
        Body: "Name: "+ document.getElementById("name").value
               + "<br> Email: "+document.getElementById("email").value
               + "<br> Phone no: "+document.getElementById("phone").value
               + "<br> Message: "+document.getElementById("message").value
    }).then(
      message => alert("Message Sent Succesfully")
    )
}