const containerEl = document.getElementById("container");

let hardnessValue = 160;

function check(){

    switch(true){
        case hardnessValue>=300:
            result = "Very hard water";
            break;
        case hardnessValue>=150:
            result = "Hard water";
            break;
        case hardnessValue>=50:
            result = "Moderately hard water";
            break;
        case hardnessValue>=50:
            result = "Soft water";
            break;
        default:
            result = "Not a number";
    }
    return result;

}

function display(){
    let output = check();
    containerEl.innerText = "The sample is "+output;
}

display();