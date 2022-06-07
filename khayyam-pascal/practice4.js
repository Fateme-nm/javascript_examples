/* Write a program that takes the number n from the input and n represents the first line of Khayyam Pascal */

function pascal(rows){
    let arr=[]                      // 2D array
    for(let row=0;row<rows;row++){
        arr.push([])                // add new row
        let str=""
        for(let col=0;col<=row;col++){
            if(col===0 || col===row){  // add the number one to first and last
                arr[row].push(1)        
            }
            else{
                arr[row].push(arr[row-1][col-1]+arr[row-1][col]) // sum the previous row numbers together
            }
            str+=arr[row][col]+" "   // add to str for print   
        }
        console.log(str)
    }
}
pascal(5)