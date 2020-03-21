class SelectionSort{
    constructor(config, renderer){
        this.animationSpeed = config.animationSpeed
        this.renderer
    }

    sort(nums){
        let minIndex = 0
        let temp = 0
        for(let i = 0; i<nums.length;i++){
            setTimeout(() => {
            minIndex = i
            for(let j = i+1; j<nums.length;j++){
                if(nums[minIndex] > nums[j])
                    minIndex = j
                
                this.clearCanvas()
                this.drawList()
                this.drawCurrentBars(i,minIndex)
            }
            
            // swap elements
            temp = nums[i]
            nums[i] = nums[minIndex]
            nums[minIndex] = temp
            }, this.animationSpeed*i)
        }
    
        // to render sorted list properly at the end, clear colored bars
        setTimeout(() => {
            this.clearCanvas()
            this.drawList()
        },this.animationSpeed*nums.length)
    }
}