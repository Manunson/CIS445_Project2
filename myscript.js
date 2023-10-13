
 function changeImage(){
        if(document.getElementById('mara-image').getAttribute('src') == 'public/class2.jpeg'){
            document.getElementById('mara-image').src='public/mara.jpg';
        }
        else{
             document.getElementById('mara-image').src='public/class2.jpeg';
        }
    }

function funFunction(){
    if(document.getElementById('fun-button').style.color == 'rgb(230, 173, 236)'){
        let sections = document.getElementsByTagName('section');

        for(let i=0; i< sections.length; i++){
            sections[i].style.backgroundColor = '#1c1717';
        }
        
        let anchor = document.getElementsByTagName('a');
    
        for(let i=0; i< anchor.length; i++){
            anchor[i].style.backgroundColor = null;
            anchor[i].style.color = '#846A6A';
        }
        
        let paragraph = document.getElementsByTagName('p');
    
        for(let i=0; i< paragraph.length; i++){
            paragraph[i].style.backgroundColor = '#1c1717';
            paragraph[i].style.color = '#B4C292';
        }
        
        let header = document.getElementsByTagName('h1');
    
        for(let i=0; i< header.length; i++){
            header[i].style.color = '#B4C292';
        }

        let button = document.getElementsByTagName('button');

    for(let i=0; i< button.length; i++){
        button[i].style.color = '#1c1717';
        button[i].style.backgroundColor = '#B4C292';
    }
    }
else{
    let sections = document.getElementsByTagName('section');

    for(let i=0; i< sections.length; i++){
        sections[i].style.backgroundColor = '#E6ADEC';
    }
    
    let anchor = document.getElementsByTagName('a');

    for(let i=0; i< anchor.length; i++){
        anchor[i].style.backgroundColor = 'rgb(85, 68, 68)';
        anchor[i].style.color = '#B4C292';
    }
    
    let paragraph = document.getElementsByTagName('p');

    for(let i=0; i< paragraph.length; i++){
        paragraph[i].style.backgroundColor = 'rgb(85, 68, 68)';
        paragraph[i].style.color = '#B4C292';
    }
    
    let header = document.getElementsByTagName('h1');

    for(let i=0; i< header.length; i++){
        header[i].style.color = 'rgb(85, 68, 68)';
    }

    let button = document.getElementsByTagName('button');

    for(let i=0; i< button.length; i++){
        button[i].style.color = '#E6ADEC';
        button[i].style.backgroundColor = 'rgb(85, 68, 68)';
    }
}
}