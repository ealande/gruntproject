document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-raffle').addEventListener('submit',function(event){
        event.preventDefault();
        let maxNumber = document.getElementById('maxNumber').value;
        maxNumber = parseInt(maxNumber);

        let randomNumber = Math.random() * maxNumber;

        //document.getElementById('valueResult').innerText = Math.ceil(randomNumber);
        //document.getElementById('valueResult').innerText = Math.round(randomNumber);
        document.getElementById('valueResult').innerText = Math.floor(randomNumber+1);
        document.querySelector('.result').style.display='block';
    })
})