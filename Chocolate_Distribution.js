function chocolate_dis(a,n){
    
    ans = Infinity
    for(i =0;i< a.length-n;i++){
        min = a[i]
        max = a[i+n-1]
        temp = max-min
        if(ans>temp)ans=temp
    }
    return  ans
}
let arr = [56,3,4,7,9,9,12,1]
arr.sort(function(a,b){return a-b})
console.log(chocolate_dis(arr,5))