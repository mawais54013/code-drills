//  YOUR WORK HERE
function impact(arr, num)
{
    var array2 = [];
    
    for(var i = 0; i < arr.length; i += num)
    {
        myChunk = arr.slice(i, i+num);
        array2.push(myChunk);
    }
    console.log(array2);
}
var array1 = [1,2,3,4];
impact(array1, 2);