// Raderna
for (i=1; i<6; i++){
    let hue = 120 + i * 15;
    let size = i;
    let h1Text = `Rad ${i}`;
    let h1El = document.createElement('h1');

    h1El.innerText = h1Text;
    h1El.style.color = '#cdb7f6';
    h1El.style.backgroundColor = `hsl(${hue}, 50%, 80%)`;
    h1El.style.textAlign = 'center';
    h1El.style.fontSize = `${size}em`;

    document.body.appendChild(h1El);
};

// Huvud boxen till nummer boxarna
let div = document.createElement('div');

div.style.border = '2px solid black';
div.style.height = '400px';
div.style.display = 'flex';
div.style.alignItems = 'center';
div.style.justifyContent = 'space-evenly';

document.body.appendChild(div);

// Nummer boxarna
for (i=1; i<4; i++){
    let box = document.createElement('div');

    box.style.border = '1em solid #cdb7f6';
    box.style.height = '60%';
    box.style.width = '5%';

    div.appendChild(box);
    
    // Nummer box 1
    if (i==1){
        for (y=0; y<10; y++){
            let pEl = document.createElement('p');
    
            pEl.innerText = y;
            pEl.style.height = '10%';
            pEl.style.margin = '0px';
    
            box.appendChild(pEl);

            if (y%2==0){
                pEl.style.backgroundColor = 'black';
                pEl.style.color = 'white';
                
                if (y==4){
                    pEl.style.backgroundColor = '#cdb7f6';
                };
            };
        };
    }
    
    // Nummer box 2
    else if (i==2){
        for (y=9; y>=0; y--){
            let pEl = document.createElement('p');
    
            pEl.innerText = y;
            pEl.style.height = '10%';
            pEl.style.margin = '0px';
            pEl.style.textAlign = 'center';
    
            box.appendChild(pEl);

            if (y%2==0){
                pEl.style.backgroundColor = 'black';
                pEl.style.color = 'white';
                
                if (y==8){
                    pEl.style.backgroundColor = '#cdb7f6';
                };
            };
        };
    }

    // Nummer box 3
    else if (i==3){
        for (y=0; y<10; y++){
            let pEl = document.createElement('p');
            let numbersText = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
    
            pEl.innerText = numbersText[y];
            pEl.style.height = '10%';
            pEl.style.margin = '0px';
            pEl.style.textAlign = 'end';
    
            box.appendChild(pEl);

            if (y%2==0){
                pEl.style.backgroundColor = 'black';
                pEl.style.color = 'white';
            };

            if (y==5){
                pEl.style.backgroundColor = '#cdb7f6';
            };
        };
    };
};