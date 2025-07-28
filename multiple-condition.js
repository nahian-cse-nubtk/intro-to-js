const salary = 24000;
const isBcs = true;
const height = 4.5;

if(salary>=25000 && height<=5.5)
{
    console.log('not selected');
}

else if(salary>=25000 && height>=5.5)
{
    console.log('ok selected');
}

else if(salary>=25000 || height<=5.5)
{
    console.log('selected');
}

// complex-condition

const Salary = 3000;
const hasCar = false;
const isbcs = true;

if((Salary>=2500&& hasCar==true)||isbcs==true){
    console.log('ok for marrige');
}


