class SortRenderer{
    constructor(){
        this.canvas = document.getElementById('graph')
        this.width = this.canvas.width = 800
        this.height = this.canvas.height = 600
        this.context = this.canvas.getContext('2d')

        this.barSize = 5
        this.animationSpeed = 5
        this.barColor = '#333333'
        this.bgColor = 'rgb(100,100,100)'
        this.barWidth = 10
        this.barGap = 0.5
        this.toSortListSize = 50
        this.toSortListMaxValue = 100
        this.toSortlist = []
    }

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
                this.drawNumberList(nums, j)
            }, this.animationSpeed*j)
            }
        }, i*this.animationSpeed*nums.length)
    }
    
    drawNumberBar(num, pos){
        pos = (pos*(this.barWidth+this.barGap))
        this.context.fillStyle = this.barColor;
        this.context.fillRect(pos, this.barSize*100+20, this.barWidth, this.barSize*-num)          
    }
    
    drawNumberList(nums, j){
        for(let i = 0; i<nums.length; i++)
        this.drawNumberBar(nums[i], i, this.barColor)
    }
    
    renderSort(){
        this.toSortlist = this.generateListRand(this.toSortListSize)
        this.bubbleSort()
    }
}

const a = new SortRenderer()
a.renderSort()