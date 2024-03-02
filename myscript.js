var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 50 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.05em solid #fff; animation: blink-caret 0.3s step-end infinite; } @keyframes blink-caret { from, to { border-color: transparent; } 50% { border-color: #fff; } }";
    document.body.appendChild(css);
};

document.addEventListener("DOMContentLoaded", function() {
    const love = document.getElementById("problem");
  
    love.addEventListener('mouseenter', function() {
      love.textContent = 'P̷̺͚̪͔̀r̸̹͎͙̝̼̻̗͗̌͛͂͘o̶̳̯̫͎̙̦͕̒b̵̨̮̥̹̖͚̂̈́̉̿l̴͇̩̍ͅȩ̶̹̩͇̿̓̾̚m̴̢̢͇̥̒̈̋͆̕͘̚͜';
    });
    
    love.addEventListener('mouseleave', function() {
      love.textContent = 'Problem';
    });
  });