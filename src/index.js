"use strict"
import { Config } from "./config"
import { generateList, clearCanvas } from "./render-functions"
import { bubbleSort}  from "./sorting-algorithms/bubble-sort"
import { selectionSort } from "./sorting-algorithms/selection-sort"


let config = new Config()
let list = generateList(config.toSortListSize, config.toSortListMaxValue)
console.log(config.context);

bubbleSort(list, config) 





