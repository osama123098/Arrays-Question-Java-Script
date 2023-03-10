arr = [7,6,4,4,9]
let ans = -Infinity
for(let i =0 ;i <arr.length-1;i++){
    let cur_ans = arr[i+1]-arr[i]
    ans = Math.max(ans,cur_ans)
}
console.log(ans)
