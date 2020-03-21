class SortRenderer{

    constructor(config, sort){
        this.config = config
        this.sort = sort

        this.canvas = document.getElementById('graph')
        this.context = this.canvas.getContext('2d')

        this.canvas.width = config.width
        this.canvas.height = config.height
    }

    clearCanvas(){
        this.context.fillStyle = this.config.bgColor
        this.context.fillRect(0,0,this.width,this.height)
    }

    drawNumberBar(num, pos, color){
        pos = (pos*(this.barWidth+this.barGap))
        this.context.fillStyle = color;
        this.context.fillRect(pos, this.height, this.barWidth, this.barSize*-num)          
    }
    
    drawCurrentBars(i, j){
        let nums = this.toSortlist
        this.drawNumberBar(nums[i], i, this.currentBarColor)
        this.drawNumberBar(nums[j], j, this.currentBarColor)
    }

    drawList(){
        let nums = this.toSortlist
        for(let i = 0; i<nums.length; i++)
        this.drawNumberBar(nums[i], i, this.barColor)
    }

    generateListRand(){
        let numbers = []
        for(let i = 0;i<this.toSortListSize;i++)
            numbers.push(Math.floor(Math.random()*this.toSortListMaxValue))
        return numbers
    }

    render(){
        this.toSortlist = this.generateListRand(this.toSortListSize)
        this.selectionSort()
    }
}