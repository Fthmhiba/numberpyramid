
let str = ""
let n = 8
for (let i = 1; i <= n;  i++) {
    for (let x = 0; x < i; x++) {
        if (i === n) {
            str += "*"
        }else{
            if (x === 0 || x === i-1) {
                str += "*"
            } else {
                str += " "
                
            }
        }
        
    }
    str +="\n"
}
console.log(str);
