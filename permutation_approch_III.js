//all possible permutation without recursion 
function next_permutation(arr,check){

    check = Array.from(check)
    let i = arr.length-2
    let j = 0
    //Finding first element which are smaller to next ones
    while(i>=0 && arr[i]>=arr[i+1])i--;
    // check the position  
    if(i>=0){
        //find the smaller number
        j=arr.length-1;
        while(arr[j]<=arr[i])j--;
        //swap the number 
        swap(arr,i,j);
    }
    //change the location
    reverse(arr,i+1,arr.length-1);
    console.log(arr)
    
    if(campare_array(arr,check))
        return ;
    next_permutation(arr,check)
    
}
function swap(arr,i,j){
    let t=arr[i];
    arr[i]=arr[j];
    arr[j]=t;
}
function reverse(arr,i,j){
    while(i<j){
        swap(arr,i,j);
        i++;
        j--;
    }   
}
function campare_array(a,c){
    let n=a.length
    for(let i=0;i<n;i++){
        if(!(a[i]==c[i]))return false;
    }
    return true;

}

arr=[1,2,3]
next_permutation(arr,arr)
