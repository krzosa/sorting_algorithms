export class Config{
    /* Settings */
    animationSpeed = 1;
    toSortListSize = 50;
    toSortListMaxValue = 150;
    barGap = 0.5;
    barWidth = 10;
    barHeight = 5;
    currentBarColor = '#c12c54';
    barColor = '#333333';
    bgColor = '#666666';
    constructor(){

        /* Canvas init */
        this.canvas = document.getElementById('graph')
        this.context = this.canvas.getContext('2d')
        /* Calculating canvas width and height so that it fits bars perfectly */
        this.width = this.canvas.width = this.toSortListSize*(this.barWidth+this.barGap)
        this.height = this.canvas.height = this.barSize*this.toSortListMaxValue
    }
    
    
    
}