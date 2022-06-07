/* We have a program that contains two buttons like and dislike that allow the user to comment on
Show us content. The program works in such a way that you can not like and dislike a content at the same time
Dislike. According to the following two rules, write a function that takes a presentation of the button inputs and gives us the final state.
Show.
* If we press the button that is currently active, it will be deactivated
** If we press the Like button after pressing the Dislike button, the Like button will be deactivated
The button is disliked and the result is the activation of the like button alone and vice versa.
*** If no button is active (second output mode) return "" Nothing.
**** Return "" Nothing if the array is empty

likeOrDislike(["Dislike"]) ➞ "Dislike"
likeOrDislike(["Like", "Like"]) ➞ "Nothing"
likeOrDislike(["Dislike", "Like"]) ➞ "Like"
likeOrDislike(["Like", "Dislike", "Dislike"]) ➞ "Nothing"
*/

function likeOrDislike (arr){
    if(arr.length===0) return "Nothing"
    let result=arr[0]
    const likeOrDis={
        Like: 0,
        Dislike: 0
    }
    for (let i=1; i<arr.length; i++){
        if (arr[i]!==arr[i-1]){
            [likeOrDis.Like , likeOrDis.Dislike]=[0,0]
            result=arr[i]
        }
        else
            likeOrDis[arr[i]]++ % 2 ===0 ? result="Nothing" : result=arr[i]
    }
    return result
}

console.log(likeOrDislike(["Dislike"]))
console.log(likeOrDislike(["Like", "Like"]))
console.log(likeOrDislike(["Dislike", "Like"]))
console.log(likeOrDislike(["Like", "Dislike", "Dislike"]))