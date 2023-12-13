var nums = [1,2,3,4,5,6,7]

for (let i = 0; i < nums.length; i++) {
    var max = Math.max(...nums)
}

document.write(max)