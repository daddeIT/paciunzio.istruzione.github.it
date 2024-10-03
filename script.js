// Dati del questionario con domande, opzioni e immagini di sfondo
const questions = [
    {
        question: "Cosa utilizzi per bere durante la mattinata di lezione a scuola?",
        options: ['Una borraccia fighissima', 'Una bottiglietta d’acqua o di altre bibite in plastica che ho buttato nel carrello quando mia madre mi ha costretto ad accompagnarla al Conad', 'Quello che capita e che trovo in casa all’ultimo minuto (lattine, ecc)'],
        backgroundImage: 'images/sfondo1.jpg'
    },
    {
        question: "Sei una persona che utilizza le scale per muoverti all’interno di un edificio da un piano all’altro?",
        options: ['Sì, sono un tipo atletico e mi iscriverò all’indirizzo sportivo del Paciolo – D’Annunzio', 'Non ci penso neanche, c’è l’ascensore', 'Dipende da come mi sono svegliato… sul fatto che era tardi, non ci sono dubbi!'],
        backgroundImage: 'images/sfondo2.jpg'
    },
    {
        question: "Ti ritieni efficiente nella gestione delle questioni di casa? Per esempio, spegni la luce nelle stanze appena esci?",
        options: ['Certo! Non sono per lo spreco (mi ricordo ancora la sberla di mio padre qualche giorno fa)', 'Eh…mi capita di essere al telefono, muovermi da una stanza all’altra… dai, tanto pagano la bolletta i miei!', 'Se mi impegno e mi ricordo, sì. Altrimenti… apprezzate l’impegno!'],
        backgroundImage: 'images/sfondo3.jpg'
    },
    {
        question: "Sei il supereroe del risparmio energetico e devi spiegare ai bambini della scuola primaria come risparmiare energia e preservare la vita del loro amato computer, raccontando cosa fai tu:",
        options: ['Quando finisci di giocare, scolleghi l’alimentazione o il caricabatteria, spegnendo correttamente il Pc', 'Schiacci il pulsante di spegnimento, stacchi la spina brutalmente e magari butti anche contro al muro qualche componente per sfogarti: qualcuno si è appropriato della tua casa su Roblox o Minecraft', 'Ti proponi di spegnere tutto secondo l’esatta procedura, staccare correttamente l’alimentazione… ops! Era il cavo di Alexa che teneva il tempo di cottura della cena…'],
        backgroundImage: 'images/sfondo4.jpg'
    },
    {
        question: "Sta arrivando l’inverno…com’è la situazione a casa tua?",
        options: ['Fantastica! Tutto orientato all’efficienza energetica, termostato al massimo a 18 gradi, classe A+++++++ di qualsiasi cosa sia entrato in casa mia', 'Mia mamma mette il maglione anche d’estate. D’inverno non basta il riscaldamento a 25 gradi ma accende anche la stufetta vicino ai piedi perché dice che non si scalda (io sto in maniche corte, cos’ha che non va quella donna?)', 'La mia casa non è di ultima generazione in termini di efficienza energetica, ma in famiglia stiamo attenti: impostiamo il termostato al livello consentito, chiudiamo le persiane al calar del sole per isolarci meglio dal freddo e ci ingegniamo per risparmiare energia.'],
        backgroundImage: 'images/sfondo5.jpg'
    },
    {
        question: "Stai preparando la tesina per l’esame:",
        options: ['Stampo solo la versione finale, quando sono certo che non ci siano più errori, refusi e l’impaginazione sia definitiva. Ormai potrei preparare la tesi di laurea senza problemi', 'Stampo mille versioni perché tutte le volte trovo degli errori o vorrei cambiare tutto (siamo sicuri che ho scelto l’argomento giusto?! )', 'Cerco di stampare il meno possibile, poi se devo rifare qualche pagina…errare è umano!'],
        backgroundImage: 'images/sfondo6.jpg'
    },
    {
        question: "Per festeggiare il tuo compleanno:",
        options: ['Utilizzi le posate in argento della tua bis bis nonna e litri di detersivo per lavarle', 'Compri bicchieri e posate in carta riciclata', 'Compri fuochi pirotecnici che rilasciano gas nocivi'],
        backgroundImage: 'images/sfondo7.jpg' // Puoi aggiungere un'immagine di sfondo appropriata
    }
];

// Variabili per il tracking delle risposte
let currentQuestionIndex = 0;
let responses = { A: 0, B: 0, C: 0 };

// Mostra la domanda corrente e aggiorna le opzioni e l'immagine di sfondo
function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById('question-text').innerText = currentQuestion.question;

        // Aggiorna l'immagine di sfondo per la domanda corrente
        document.body.style.backgroundImage = `url(${currentQuestion.backgroundImage})`;

        // Aggiorna le opzioni di risposta
        const optionButtons = document.getElementsByClassName('option-btn');
        optionButtons[0].innerText = currentQuestion.options[0]; // Opzione A
        optionButtons[1].innerText = currentQuestion.options[1]; // Opzione B
        optionButtons[2].innerText = currentQuestion.options[2]; // Opzione C
    } else {
        showResult();
    }
}

// Funzione chiamata quando l'utente seleziona una risposta
function selectOption(option) {
    responses[option] += 1;
    currentQuestionIndex++;
    loadQuestion();
}

// Mostra il risultato alla fine del questionario
function showResult() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';

    const maxResponse = Object.keys(responses).reduce((a, b) => responses[a] > responses[b] ? a : b);

    let resultTitle = "";
    let resultDescription = "";
    let resultImage = "";

    if (maxResponse === 'A') {
        resultTitle = "Profilo: ECO-FRIENDLY";
        resultDescription = "Batti il 5 bro! Sei un tipo eco-friendly: amico dell’ambiente, sai mettere in pratica tutta una serie di azioni il cui obiettivo è quello di diminuire il tuo impatto ambientale. Azioni “amichevoli” nei confronti del Pianeta riguardano diversi campi e aree d’azione: dall’agricolo all’industriale, dalla pesca ai consumi energetici. Essere eco-friendly vuol dire principalmente adottare comportamenti quotidiani che mettano al centro l’uso di materie prime naturali, il riciclo e il risparmio energetico. Ti vogliamo a scuola con noi!!";
        resultImage = "images/profileA.jpg";
    } else if (maxResponse === 'B') {
        resultTitle = "Profilo: NOT ECO-FRIENDLY";
        resultDescription = "Boooooooooo!!! L’impronta tu la lasci ma non ci cresce più niente sulla terra che calpesti! Dai, cerca di fare la tua parte anche tu con noi: puoi riciclare correttamente, stare attento alle luci che accendi in casa o a scuola, non sprecare energia inutilmente insomma e non essere un peso per il Pianeta! Vieni da noi al Paciolo e ti spieghiamo noi il da farsi!";
        resultImage = "images/profileB.jpg";
    } else if (maxResponse === 'C') {
        resultTitle = "Profilo: SULLA BUONA STRADA";
        resultDescription = "Sei sulla buona strada! Vivere in modo eco-friendly significa salvaguardare il Pianeta che ci ospita. Sono diverse le azioni quotidiane ed i comportamenti da seguire per essere veramente eco-friendly: occorre riciclare correttamente, diminuire i consumi di energia spegnendo i dispositivi elettrici in standby, consumare cibo biologico, evitare lo spreco degli alimenti, spostarsi in bici o a piedi invece che in auto. Piccole e semplici azioni quotidiane che, messe in pratica con costanza, aiutano a migliorare la Terra e, al tempo stesso, la qualità della nostra vita. Sei a buon punto ma puoi fare ancora di più per lasciare la tua impronta…non nel corridoio della scuola, altrimenti la Lucia e l’Antonella ti fanno fuori!";
        resultImage = "images/profileC.jpg";
    }

    document.getElementById('result-title').innerText = resultTitle;
    document.getElementById('result-description').innerText = resultDescription;

    // Aggiorna e mostra l'immagine del profilo
    const resultImageElement = document.getElementById('result-image');
    resultImageElement.src = resultImage;
    resultImageElement.style.display = 'block';

    // Cambia l'immagine di sfondo alla pagina dei risultati
    document.body.style.backgroundImage = `url(${resultImage})`; // Usa l'immagine del profilo come sfondo
}

// Inizializza il questionario
loadQuestion();
