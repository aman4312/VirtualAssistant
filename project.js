
    responsiveVoice.speak("Hello I am Your Personal Assistant How May I help you?" );
    var nm=prompt("What is your name?");
    while(nm == null || nm == "") 
{
nm = prompt("What is your name?")
}
alert("Make sure volume is turned on.And ignore console error due to API.")
function submit()
{
    var date=new Date();
    document.getElementById("answers").innerHTML=date;
    responsiveVoice.speak("today date and time is"+document.getElementById("answers").textContent);
}
function speak()
{
    const btn = document.querySelector('.talk');
        const content = document.querySelector('.content');

     
        const YouTube = [
            'opening youtube sir'
     ];
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition =  new SpeechRecognition();

        recognition.onstart = function(){
            console.log('How Can I Help You ?')
        }
        recognition.onresult = function (event) {
            const current = event.resultIndex;

            const transcript = event.results[current][0].transcript;
            content.textContent = transcript;
            readOutLoud(transcript);

        };

        btn.addEventListener('click', () =>{
            recognition.start();
        });


        function readOutLoud(message){
            const speech = new SpeechSynthesisUtterance();

            speech.text = 'I am not able to understand ,sir';


            if(message.includes('YouTube')){
                const finalText = 
                    YouTube[Math.floor(Math.random()*YouTube.length)];
                speech.text = finalText; 
                window.open('https://www.youtube.com/')
                }
            speech.volume = 1;
            speech.rate = 1.1;
            speech.pitch = 1;

            window.speechSynthesis.speak(speech);
        }
}