const generateListRand = (listSize) => {
    let numbers = []
    for(let i = 0;i<listSize;i++)
        numbers.push(Math.floor(Math.random()*100))
    return numbers
}

const bubbleSort = (numb) => {
    for(let i = 0; i<numb.length-1; i++)
        for(let j = 0;j<numb.length-1;j++)
            if(numb[j+1] < numb[j]){
                // swap elements
                let temp = numb[j]
                numb[j] = numb[j+1]
                numb[j+1] = temp
            }
    return numb
}

const canvavs = document.querySelector('.graph');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;


numbers = generateListRand(50)
console.log(numbers, numbers.length);
numbers = bubbleSort(numbers)
console.log(numbers, numbers.length);
numbers.s