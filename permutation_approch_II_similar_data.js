//Recursive approch with similar data
function recursive_permutation(index,arr,ans){
    if(index==arr.length){
        ans.push(new Array(...arr))
        return ans
    }
    for(let i=index;i<arr.length;i++){
        
        //Condition to no duplicate of array
        if(i!=index && arr[i]==arr[index])
            continue;
        
        //swaping with destruction method    
        [arr[i],arr[index]]=[arr[index],arr[i]];
        ans = recursive_permutation(index+1,arr,ans);
        [arr[i],arr[index]]=[arr[index],arr[i]];

    }
    return ans
}
let given_arr = [1,2,1]

//we need to sort the array first
given_arr.sort((a,b)=>{return a-b})
let ans = recursive_permutation(0,given_arr,new Array())
console.log(ans)