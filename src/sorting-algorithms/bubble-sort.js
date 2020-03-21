class BubbleSort extends Sort{
    constructor(animationSpeed){
        this.animationSpeed = animationSpeed
    }

    sort(nums){
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
                this.clearCanvas()
                this.drawList()
                if(i!=nums.length-2 && j!=nums.length-2)
                    this.drawCurrentBars(j, j+1)
            }, this.animationSpeed * j)
            }
        }, i*this.animationSpeed*nums.length)  
    }

}