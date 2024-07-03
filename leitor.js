function lerTexto() {


    var paragrafo = document.getElementById("1").textContent;
    var synth = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(paragrafo);
    synth.speak(utterance);


    var paragrafo2 = document.getElementById("2").textContent;
    var synth2 = window.speechSynthesis;
    var utterance2 = new SpeechSynthesisUtterance(paragrafo2);
    synth2.speak(utterance2);

    var paragrafo3 = document.getElementById("3").textContent;
    var synth3 = window.speechSynthesis;
    var utterance3 = new SpeechSynthesisUtterance(paragrafo2);
    synth3.speak(utterance3);
    
    }