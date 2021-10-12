


var btn = document.querySelector('.js-btn-get-date');
var alert = document.querySelector('.js-response-get-date')

btn.addEventListener('click', function(e){
    e.preventDefault();
    disableButton(this);
    var that = this;
    alert.classList = 'alert';
    axios.get('/getDate')
    .then(function (response) {
        alert.classList.add('alert--success');
        alert.innerHTML = response.data;
        enabledButton(that);
    })
    .catch(function (error) {
        alert.classList.add('alert--error');
        alert.innerHTML = "Wystąpił błąd! Spróbuj później.";
        enabledButton(that);
    });

});

function disableButton(btn){
    btn.disabled = true;
}

function enabledButton(btn){
    btn.disabled = false;
}