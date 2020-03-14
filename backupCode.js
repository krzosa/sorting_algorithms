const clearCanvas = () => {
    context.fillStyle = 'rgb(100,100,100)'
    context.fillRect(0,0,width,height)
}

const generateListRand = (listSize) => {
    let numbers = []
    for(let i = 0;i<listSize;i++)
        numbers.push(Math.floor(Math.random()*100))
    return numbers
}

let bubbleSort = (nums) => {
    for(let i = 0; i<nums.length-1; i++)
        for(let j = 0;j<nums.length-1;j++){
            if(nums[j+1] < nums[j]){
                // swap elements
                let temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
            clearCanvas()
            drawNumberList(nums)
        }
    return nums
}

const drawNumberBar = (num, pos) => {
    pos = (pos*10)+200
    context.fillStyle = '#333333';
    context.fillRect(pos, 50, 10, 5*num)      
}

const drawNumberList = (nums) => {
    for(let i = 0; i<nums.length; i++){
        drawNumberBar(nums[i], i)
    }
}


const canvas = document.getElementById('graph');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight/1.5;
const context = canvas.getContext('2d');


let coolVisual = () => {
    clearCanvas()
    numbers = generateListRand(50)
    numbers = bubbleSort(numbers)
    requestAnimationFrame(mainLoop)
}