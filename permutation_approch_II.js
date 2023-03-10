//Recursive Approch II
function recursive_permutation(index,arr,ans){
    if(index==arr.length){
        // Base Case
        ans.push(new Array(...arr))
        return ans
    }

    for(let i =index;i<arr.length;i++){

        swap(i, index, arr)
        ans= recursive_permutation(index+1,arr,ans)
        swap(i,index,arr)

    }
    function swap(i,j,a){
        let t = a[i]
        a[i]=a[j]
        a[j]=t
    }
    return ans
}
let ans_arr = new Array(),given_array = [1,2,3]
ans_arr=recursive_permutation(0,given_array,ans_arr)
console.log(ans_arr)