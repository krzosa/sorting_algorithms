import * as util from "../render-functions"

export function selectionSort(nums, config){
    let minIndex = 0
    let temp = 0
    for(let i = 0; i<nums.length;i++){
        setTimeout(() => {
        minIndex = i
        for(let j = i+1; j<nums.length;j++){
            if(nums[minIndex] > nums[j])
                minIndex = j
            
            util.clear(config)
            util.draw(nums, config)
            util.drawSelected(nums, i, minIndex, config)
        }
        
        // swap elements
        temp = nums[i]
        nums[i] = nums[minIndex]
        nums[minIndex] = temp
        }, config.animationSpeed*i)
    }

    // to render sorted list properly at the end, clear colored bars
    setTimeout(() => {
        util.clear(config)              
        util.draw(nums, config)
    },config.animationSpeed*nums.length) 
}