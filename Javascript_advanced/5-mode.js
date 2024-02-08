//

function changeMode(size, weight, transform, background, color,){
    return ()=>{
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;        
    };

};


function main(){
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    document.getElementById('spookyBtn').addEventListener('click', spooky);
    document.getElementById('darkModeBtn').addEventListener('click', darkMode);
    document.getElementById('screamModeBtn').addEventListener('click', screamMode);
};
main()