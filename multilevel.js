let price = 4500;
if (price>=5000)
{
    const discount = price*10/100;
    price -=discount;
    console.log(discount);
    console.log(price);
}

else if (price<=5000 && price>=4000)
{
    const discount = price*5/100;
    console.log(discount);
    price = price - discount;
    console.log(price);
}
else
{
    console.log('no discount');
}

