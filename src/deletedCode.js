class SortRenderer{
    constructor(){
        /* Settings */
        this.barSize = 5
        this.animationSpeed = 1
        this.barColor = '#333333'
        this.currentBarColor = '#c12c54'
        this.bgColor = '#666666'
        this.barWidth = 10
        this.barGap = 0.5
        this.toSortListSize = 50
        this.toSortListMaxValue = 150
        
        this.toSortlist = []
        this.canvas = document.getElementById('graph')
        this.context = this.canvas.getContext('2d')
        this.width = this.canvas.width = this.toSortListSize*(this.barWidth+this.barGap)
        this.height = this.canvas.height = this.barSize*this.toSortListMaxValue
    }

    /* utility functions */
    clearCanvas(bgColor, width, height){
        this.context.fillStyle = bgColor
        this.context.fillRect(0,0,width,height)
    }
    
    generateListRand(size, maxValue){
        let numbers = []
        for(let i = 0;i<size;i++)
            numbers.push(Math.floor(Math.random()*maxValue))
        return numbers
    }

    drawNumberBar(num, x, y, width, height, gap, color = '#333333'){
        x = (x*(width+gap))
        this.context.fillStyle = color;
        this.context.fillRect(x, y, width, height*-num)          
    }
    
    drawList(nums, width, height, gap, color = '#333333'){
        for(let i = 0; i<nums.length; i++)
            this.drawNumberBar(nums[i], i, width, height, gap, color)
    }

    drawCurrentBars(nums, x1, x2, y, width, height, gap, color = '#c12c54'){
        this.drawNumberBar(nums[x1], x1, y, width, height, gap, color)
        this.drawNumberBar(nums[x2], x2, y, width, height, gap, color)
    }
    
    render(){
        this.toSortlist = this.generateListRand(this.toSortListSize, this.toSortListMaxValue)
        this.bubbleSort(this.toSortlist)
    }

    /* Sorting algorithms */
    bubbleSort(nums){
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
                this.clearCanvas(this.bgColor, this.width, this.height)
                this.drawList(nums, this.height, this.barWidth, this.barSize, this.barGap, this.barColor)
                if(i<nums.length-2 && j<nums.length-2)
                this.drawCurrentBars(nums, j,j+1, this.height, this.barWidth, this.barSize, this.barGap, this.currentBarColor)
            }, this.animationSpeed * j)
            }
        }, i*this.animationSpeed*nums.length)  
    }

    selectionSort(nums){
        let minIndex = 0
        let temp = 0
        for(let i = 0; i<nums.length;i++){
            setTimeout(() => {
            minIndex = i
            for(let j = i+1; j<nums.length;j++){
                if(nums[minIndex] > nums[j])
                    minIndex = j
                
                this.clearCanvas(this.bgColor, this.width, this.height)
                this.drawList(nums, this.height, this.barWidth, this.barSize, this.barGap, this.barColor)
                this.drawCurrentBars(nums, i, minIndex, this.height, this.barWidth, this.barSize, this.barGap, this.currentBarColor)
            }
            
            // swap elements
            temp = nums[i]
            nums[i] = nums[minIndex]
            nums[minIndex] = temp
            }, this.animationSpeed*i)

            // to render sorted list properly at the end, clear colored bars
            setTimeout(() => {
                this.clearCanvas(this.bgColor, this.width, this.height)
                this.drawList(nums, this.height, this.barWidth, this.barSize, this.barGap, this.barColor)
            },this.animationSpeed*nums.length)
        } 
    }
    
}

const a = new SortRenderer()
a.render()