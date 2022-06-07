/* Write a function that takes a string as an argument and returns a list of all the
words inflected by "-ing". Your function should also exclude all the mono-syllabic
words ending in "-ing" (e.g. bing, sing, sling, ...). Although these words end in "-ing",
the "-ing" is not an inflection affix.
Notes:
• Mono-syllabic means a word containing just one syllable.
• It is probably best to use RegEx for this challenge.

examples: 
1- ingExtractor("coming bringing Letting sing") ➞ ["coming",
"bringing", "Letting"]
2- ingExtractor("going Ping, king sHrink dOing") ➞ ["going",
"dOing"]
3- ingExtractor("zing went ring, ding wing SINk") ➞ [] */

function ingExtractor(str) {
    return str.replace(/[^a-zA-Z ]/g, "").split(" ")
    .filter((word) => {
        let temp = word.toLowerCase().replace("ing", "")
        if (temp.length === temp.replace(/[aeiou]/g, "").length ) {
            return false
        }
        if (word.toLowerCase().includes("ing")) {
            return true
        }
    })
}

console.log(ingExtractor("coming bringing Letting sing"))
console.log(ingExtractor("going Ping, king sHrink dOing"))
console.log(ingExtractor("zing went ring, ding wing SINk"))