//  YOUR WORK HERE
function create(r)
{
    for(var i = 1; i <= r; i++) {
       
        console.log(' '.repeat(r - i) +' #'.repeat(i) )
    }  

}

create(5);