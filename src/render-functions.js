export function clearCanvas(context, bgColor, width, height){
    context.fillStyle = bgColor
    context.fillRect(0,0,width,height)
}

export function generateListRand(size, maxValue){
    let numbers = []
    for(let i = 0;i<size;i++)
        numbers.push(Math.floor(Math.random()*maxValue))
    return numbers
}

export function drawNumberBar(context, num, 
                              x, y, width, height, 
                              gap, color = '#333333'){
    x = (x*(width+gap))
    context.fillStyle = color;
    context.fillRect(x, y, width, height*-num)          
}

export function drawList(context, nums, 
                        width, height, 
                        gap, color = '#333333'){
    for(let i = 0; i<nums.length; i++)
        drawNumberBar(context, nums[i], i, width, height, gap, color)
}

export function drawCurrentBars(context, nums, x1, x2, y, 
                                width, height, 
                                gap, color = '#c12c54'){
    drawNumberBar(context, nums[x1], x1, y, width, height, gap, color)
    drawNumberBar(context, nums[x2], x2, y, width, height, gap, color)
}