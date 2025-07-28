

// condition ? do something true the condition : do something when it false

// it can make normal if else into the short formate let see

// see one part keeping other part as comment

const age = 17;

if(age>=18)
{
    console.log('eligable for voting');
}
else
{
    console.log('not eligable for voting');
}

age>=18 ? console.log('eligable') : console.log('not eligable');

// use of let

let price = 1500;
const isLeader = false;

if(isLeader)
//     // no need to write isLeader==true because it automatically take it
{
    price = 0;
    console.log(price);
}
else
{
    price = price + 100;
    console.log(price);
}

// it ternary format

isLeader==true ? console.log(price=0) : console.log(price = price+100);

if(isLeader)
{
    if(price>=2000)
    {
        price /=2;
        console.log(price);
    }

    else
    {
        price = 0;
        console.log(price);
    }
}
else
{
    price +=100;
    console.log(price);
}

// its ternary format

isLeader==!true ?price>=2000?console.log(price/=2):console.log(price=0):console.log(price+=100);
isLeader==!!true ?price>=2000?console.log(price/=2):console.log(price=0):console.log(price += 100);

// !true =false;
//!!true = true it comes to the original format