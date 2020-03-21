class Config{
    constructor(){
        this.barSize = 5
        this.animationSpeed = 100
        this.barColor = '#333333'
        this.currentBarColor = '#c12c54'
        this.bgColor = '#666666'
        this.barWidth = 10
        this.barGap = 0.5
        this.toSortListSize = 50
        this.toSortListMaxValue = 150
        this.width = this.toSortListSize * (this.barWidth + this.barGap)
        this.height = this.barSize * this.toSortListMaxValue
    }


}