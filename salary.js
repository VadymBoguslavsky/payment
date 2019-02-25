var card = document.getElementById('card');
for (var i in ['input']) {
    card.addEventListener('input', addCardNumber, addCardTime, addCardCode);
}
var card1 = document.getElementById('card1');
for (var i in ['input']) {
    card1.addEventListener('input', addCardTime);
}
var card2 = document.getElementById('card2');
for (var i in ['input']) {
    card2.addEventListener('input', addCardCode);
}

function addCardNumber() {
    var cardNumber = this.value.replace(/[^\d]/g, '').substring(0, 16);
    cardNumber = cardNumber != '' ? cardNumber.match(/.{1,4}/g).join('-') : '';
    this.value = cardNumber;
}
function addCardTime() {
    var cardTime = this.value.replace(/[^\d]/g, '').substring(0, 4);
    cardTime = cardTime != '' ? cardTime.match(/.{1,2}/g).join('/') : '';
    this.value = cardTime;
}
function addCardCode() {
    var cardCode = this.value.replace(/[^\d]/g, '').substring(0, 3);
    cardCode = cardCode != '' ? cardCode.match(/.{1,4}/g).join('') : '';
    this.value = cardCode;
}


function validPopup() {
    var showInfo = document.querySelector(".popup.info");
    var btnInfo = document.querySelector(".payment__bottom__button");
    function Dialog(popup) {
        this.showPopup = function () {
            var main = document.querySelector(".wrapper");
            var overlay = document.createElement("div");
            var popups = popup;
            overlay.classList.add("overlay", "show-overlay");
            popups.classList.add("show-popup");
            overlay.appendChild(popups);
            main.appendChild(overlay);
            var hide = document.querySelectorAll(".btn-closePopup");
            hide.forEach(el => {
                el.addEventListener("click", hidePopup)
            });
        }
    }
    var submitForm = function(){
        var form = document.querySelector('form')
        form.submit()
    }
    var generateCloseBtn = function (popup) {
        var closeBtn = document.createElement("button");
        closeBtn.classList.add("btn-closePopup");
        var mainPopup = popup;
        closeBtn.innerHTML = "X";
        mainPopup.appendChild(closeBtn);
        closeBtn.addEventListener('click', function(){
            submitForm()
        })
    }

    var hidePopup = function () {
        var overlay = document.querySelectorAll(".overlay");
        var popup = document.querySelectorAll(".popup");
        overlay.forEach(el => el.classList.remove("show-overlay"));
        popup.forEach(el => el.classList.remove("show-popup"));
    }
    btnInfo.addEventListener("click", function (evt) {
        var x = document.getElementById('card').value;
        var x1 = document.getElementById('card1').value;
        var x2 = document.getElementById('card2').value;
        if (x == "" || x.length < 19 || x1 == "" || x1.length < 5 || x2 == "" || x2.length < 3 ) {
          return false;
        } else {
            evt.preventDefault();
            new Dialog(showInfo).showPopup()
            generateCloseBtn(showInfo)
        }
    })
}
validPopup()