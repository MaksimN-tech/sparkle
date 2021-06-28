let plusBed = document.getElementById('plusBed');
    minusBed = document.getElementById('minusBed');
    bed = document.getElementById('bed');
    plusBath = document.getElementById('plusBath');
    minusBath = document.getElementById('minusBath');
    bath = document.getElementById('bath');
    parseBed = parseInt(bed.textContent);
    parseBath = parseInt(bath.textContent);
    res = document.getElementById('res');
    com = document.getElementById('com');
    num = 1;
    

    plusBed.addEventListener('click',() => {
        if(parseBed == 10) {
            parseBed == parseBed;
        } else {
            parseBed++;
            bed.textContent = parseBed;
        }
    });

    minusBed.addEventListener('click',() => {
        if(parseBed == 0) {
            parseBed == parseBed;
        } else {
            parseBed--;
            bed.textContent = parseBed;
        }
    });

    minusBath.addEventListener('click',() => {
        if(parseBath == 0) {
            parseBath == parseBath;
        } else {
            parseBath--;
            bath.textContent = parseBath;
        }
    });

    plusBath.addEventListener('click',() => {
        if(parseBath == 10) {
            parseBath == parseBath;
        } else {
            parseBath++;
            bath.textContent = parseBath;
        }
    });

    res.addEventListener('click',() => {
        res.style.backgroundColor = "#FFA07A";
        com.style.backgroundColor = "grey";
    });
    
    com.addEventListener('click',() => {
        com.style.backgroundColor = "#FFA07A";
        res.style.backgroundColor = "grey";
    }); 