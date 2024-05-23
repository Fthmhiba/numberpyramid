
let str = ""
let n = 5
for (let i = 1; i <= n; i++) {
    for (let x = 0; x < i; x++) {
        if (i === n) {

            if (x === 0 || x === i - 1) {
                str += "*"

            } else {

                for (let index = 1; index <= n; index++) {

                    str += index
                }
            }
        } else {
            if (x === 0 || x === 2 * i - 1) {
                str += "*"
                for (let index = 1; index < i; index++) {
                    str += index
                }
            } else {
                if (x === i - 1) {

                    str += "*"
                }
                // str += String.fromCharCode(x+65)        

            }
        }

    }
    str += "\n"

}
for (let i = 0; i <= n; i++) {
    for (let x = 0; x < n-i; x++) {

        if (x === 0 || x === 2 * i - 1) {
            str += "*"
            for (let index = 1; index < i; index++) {
                str += index
            }
        } else {
            if (x === i - 1) {

                str += "*"
            }

        }
    }

    str += "\n"
}
    



// 2*i-1

console.log(str);
