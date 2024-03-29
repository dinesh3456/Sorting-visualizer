const generateButton = document.getElementById("generate-button");
const visualizationContainer = document.getElementById("visualization-container");
const speedSlider = document.getElementById("speed-slider");

let sortingSpeed = 100
speedSlider.addEventListener("input",function(){
    sortingSpeed = 900-parseInt(speedSlider.value);
})

function generateBars(){
    const array=[];
    for(let i=0;i<70;i++){
        array.push(Math.floor(Math.random()*401));
    }
    visualizationContainer.innerHTML="";
    array.forEach(height=>{
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${height}px`;
        visualizationContainer.append(bar);
    })

}
generateBars();
generateButton.addEventListener("click",function(){
    if(sortingInProgress){
        sortingInProgress = false;
    }
    generateBars();
});



document.addEventListener("DOMContentLoaded", function() {
    const algorithm = document.getElementById("sorting-algorithm");
    const startButton = document.getElementById("start-button");

    startButton.addEventListener("click", function() {
        if (sortingInProgress) {
            alert("Sorting is already in progress. Please wait.");
            return;
        }

        const selectedAlgorithm = algorithm.value;
        sortingInProgress = true;
        switch(selectedAlgorithm) {
            case "bubble":
                bubbleSort();
                break;
            case "selection":
                selectionSort();
                break;
            case "insertion":
                insertionSort();
                break;
            case "quick":
                quickSort();
                break;
            case "merge":
                mergeSort();
                break;
            default:
                console.log("Invalid sorting algorithm selected.");
        }
    });

    algorithm.addEventListener("change", function() {
        sortingInProgress = false;
        generateBars();
    });
});


