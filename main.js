class SortRenderer{
    constructor(){
        /* Settings */
        this.barSize = 5
        this.animationSpeed = 100
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
    clearCanvas(){
        this.context.fillStyle = this.bgColor
        this.context.fillRect(0,0,this.width,this.height)
    }
    
    generateListRand(){
        let numbers = []
        for(let i = 0;i<this.toSortListSize;i++)
            numbers.push(Math.floor(Math.random()*this.toSortListMaxValue))
        return numbers
    }

    drawNumberBar(num, pos, color){
        pos = (pos*(this.barWidth+this.barGap))
        this.context.fillStyle = color;
        this.context.fillRect(pos, this.height, this.barWidth, this.barSize*-num)          
    }
    
    drawList(){
        let nums = this.toSortlist
        for(let i = 0; i<nums.length; i++)
        this.drawNumberBar(nums[i], i, this.barColor)
    }

    drawCurrentBars(nums, i){
        this.drawNumberBar(nums[i], i, this.currentBarColor)
        this.drawNumberBar(nums[i+1], i+1, this.currentBarColor)
    }
    
    render(){
        this.toSortlist = this.generateListRand(this.toSortListSize)
        this.selectionSort()
    }

    /* Sorting algorithms */
    bubbleSort(){
        let nums = this.toSortlist
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
                    this.drawCurrentBars(nums, j)
            }, this.animationSpeed * j)
            }
        }, i*this.animationSpeed*nums.length)  
    }

    selectionSort(){
        let nums = this.toSortlist
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
            }
            
            // swap elements
            temp = nums[i]
            nums[i] = nums[minIndex]
            nums[minIndex] = temp
            }, this.animationSpeed*i)
        }
        console.log(nums);
        
    }
    
}

const a = new SortRenderer()
a.render()