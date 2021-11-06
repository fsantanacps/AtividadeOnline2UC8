let dataatual = 05112021;

let datadoevento = 04112021

let idade = 19;

let listapalestrantesevento1 = ["Dalai Lama"];

let listapalestrantesevento2 = ["Billy Graham"];

let listapalestrantesevento3 = ["Papa Franciso"];

let listaparticipantes = [" " + "Barack Obama", "Angela Merkel", "Queen Elizabeth II", "Emmanuel Macron", "Boris Johnson", "Michelle Bachelet"];

if (dataatual < datadoevento) {
    console.log("Data para evento disponível")

    if (idade > 18) {
        console.log("Você pode prosseguir com o cadastro")

        if (listaparticipantes.length <=99) {
            console.log("Quantidade de participantes permitida")

            if (listaparticipantes.length <=99) {
                console.log("Palestrante do evento 1" + " " + listapalestrantesevento1)
                console.log("Palestrante do evento 2" + " " + listapalestrantesevento2)
                console.log("Palestrante do evento 3" + " " + listapalestrantesevento3)
                console.log("Participantes" + " " + listaparticipantes)
            }

        } else {
            console.log("Cadastro de evento não permitido, total de participantes deve ser inferior à 100 pessoas")
        }
        
    } else {
        console.log("Cadastro não permitido, você precisa ser maior de 18 anos")
    }
    
} else {
    console.log("Data para evento não disponível, por favor insira uma data futura")
}

