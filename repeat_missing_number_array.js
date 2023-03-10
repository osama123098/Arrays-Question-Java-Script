arr = [1,1,2,3,4,5,7]
function repeat_missing_array(a){
    let i=0
    while(i<a.length){
        let temp_0 =a[i]
        let temp_1 =a[a[i]-1]
        if(a[i]!=a[a[i]-1]){
            let j = a[i]-1;
            [a[i],a[j]]=[a[j],a[i]];
        }
        else
            i++;
    }        
    for(i=0;i<a.length;i++){
        if(a[i]!=i+1){
            return [a[i],i+1]
        }
    }        

}
console.log( repeat_missing_array(arr))