/* WRAPPERS */

export function clear(config){
    clearCanvas(config.context, config.width, 
                config.height, config.bgColor)
}

export function draw(nums, config){
    drawList(config.context, nums, 
        config.height, config.barWidth, 
        config.barHeight, config.barGap, 
        config.barColor)
    }

export function drawSelected(nums, i, j, config){
    drawCurrentBars(config.context, nums, i, j, 
        config.height, config.barWidth, 
        config.barHeight, config.barGap, 
        config.currentBarColor)
}

/* UTILS */

export function generateList(size, maxValue){
    let numbers = []
    for(let i = 0;i<size;i++)
        numbers.push(Math.floor(Math.random()*maxValue))
    return numbers
}

/* LOWER LEVEL FUNCTIONS */

export function clearCanvas(context, width, height, bgColor){
    context.fillStyle = bgColor
    context.fillRect(0,0,width,height)
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