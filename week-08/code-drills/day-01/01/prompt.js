//  YOUR WORK HERE

function checker(input)
{
    var sum = 0;
    while(input)
    {
        sum += input % 10;
        input = Math.floor(input/10);
    }
    return sum;
}
console.log(checker(100));