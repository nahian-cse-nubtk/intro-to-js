const salary =24000;
const isBcs =false;
const hasGovtJob = false;

if(salary>=25000)
{
    if(isBcs==true)
    {
        console.log('selected for marrage');
    }

    else if(hasGovtJob == true)
    {
        console.log('can be selected for marrige');
    }
    else
    {
        console.log('not elligable');
    }
}

else if(salary>=20000&& salary<25000)
{
    if(hasGovtJob == true)
    {
        console.log('selected normally');
    }
    else
    {
        console.log('not selected')
    }


}
else{
    console.log('not selected');
}