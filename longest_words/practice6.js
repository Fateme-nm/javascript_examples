/* Write a function that retrieves the top 3 longest words of a newspaper headline and 
transforms them into hashtags. If multiple words tie for the same length, retrieve the
word that occurs first. */

function getHashTags(str){
    let arr=str.split(" ")
    for(let i=0;i<arr.length;i++){           // bubble sort
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j][arr[j].length-1]==','){  // check for exist ','
                let temp=arr[j].split("")
                temp.pop()
                arr[j]=temp.join("")
            }
            if(arr[j].length<arr[j+1].length){  // compare
              let temp = arr[j]
              arr[j] = arr[j + 1]
              arr[j+1] = temp
            }
        }
    }
    let result=[]
    for(let i in arr){
        result.push('#'+arr[i].toLowerCase())
        if(i==2){
            break
        }
    }
    return result
}

console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"))
console.log(getHashTags("Why You Will Probably Pay More Your Christmas Tree This Year"))
console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"))
console.log(getHashTags("Visualizing Science"))