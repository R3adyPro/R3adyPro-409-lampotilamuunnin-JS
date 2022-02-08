


function Muunna(){
    
    let x = 'juoma'
    let chart = x.substring(0, 3);
    console.log(chart);
    lampoMuutosJaDesimaali();
    document.getElementById('lampo').value = '';
}

function lampoMuutosJaDesimaali(){
    lampotila = document.getElementById('lampo').value;
    let valinta = document.getElementById('asteet');
    let valittuArvo = valinta.options[valinta.selectedIndex].value;
    if(document.getElementById('1').checked){
        if(valittuArvo == 'faren') {
            let x = lampotila*1.8+32;
            document.getElementById('demo').innerHTML = x + ' °F';
        }
        else if(valittuArvo == 'celcius'){
            let c = (lampotila-32)/1.8;
            document.getElementById('demo').innerHTML = c + ' °C';
        }
    }
    else if(document.getElementById('2').checked){

    }
    else if(document.getElementById('3').checked){

    }
}