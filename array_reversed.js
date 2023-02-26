//Normal Way
let temp = [1,2,3,4]
let s = 0,n=temp.length-1 
for(s;s<n;s++,n--){
    let t = temp[s]
    temp[s]=temp[n]
    temp[n]=t
}
console.log(temp)
s=0,n=temp.length-1 
//Recursive way 
function reverseArray(arr,s,n){
   
    let t = arr[s]
    arr[s]=arr[n]
    arr[n]=t
    
   //Recursive calling
   if(s<n)reverseArray(arr,s+1,n-1) 
}
reverseArray(temp,s,n)
console.log(temp)
