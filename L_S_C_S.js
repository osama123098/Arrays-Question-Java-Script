//Brute Force
function largest_sum_substring(a){
    n = a.length
    sum=-Infinity
    for(i=0;i<n;i++){
        for(j=i,temp=0;j<n;j++){
            temp +=a[j]
             sum = Math.max(sum,temp)
        }
    }
    return sum
}
let arr = [-5,4,6,-3,4,-1]
console.log(largest_sum_substring(arr))

// Kadane`s Algorithms
function K_algorithm(a){
    max_sum = a[0],cur_sum = 0 
    for(t of a){
        if(cur_sum<0)cur_sum=0
        cur_sum+=t
        max_sum = Math.max(max_sum,cur_sum)
    }
    return max_sum
}
console.log(K_algorithm(arr))

// Kadane`s Algorithms without if statement
function K_algorithm(a){
    max_sum = a[0],cur_sum = 0 
    for(t of a){
        
        cur_sum=Math.max(t,t+cur_sum)
        max_sum = Math.max(max_sum,cur_sum)
    }
    return max_sum
}
console.log(K_algorithm(arr))