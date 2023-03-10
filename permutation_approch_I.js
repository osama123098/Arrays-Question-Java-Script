//Find the next permutation with Brute Force
// Recursive Approch
function next_permutation(arr,ds,ans,freq){
    if(ds.length ==arr.length){
        ans.push(new Array(...ds))
        return ans 
    }
    for(let i=0;i<arr.length;i++){
        if(!freq[i]){
            freq[i]=true
            ds.push(arr[i])
            ans =    next_permutation(arr,ds,ans,freq)
            ds.pop()
            freq[i]=false
        }
    }
    return ans
}
let lst = new Array()//ds
let arr = new Array()
let freq  = []
arr = next_permutation([1,2,1],lst,arr,freq)
console.log(arr)
