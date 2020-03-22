import * as util from "../render-functions"

export function bubbleSort(nums, config){
    for(let i = 0; i<nums.length-1; i++)
    setTimeout(() => {
        for(let j = 0;j<nums.length-1;j++){
            setTimeout(() => {
            if(nums[j+1] < nums[j]){
                // swap elements
                let temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }

            util.clear(config)
            util.draw(nums, config)
            util.drawSelected(nums, j, j+1, config)
        }, config.animationSpeed * j)
        }
    }, i*config.animationSpeed*nums.length)  

    // to render sorted list properly at the end, clear colored bars
    setTimeout(() => {
        util.clear(config)              
        util.draw(nums, config)
    },config.animationSpeed*nums.length*nums.length) 
}