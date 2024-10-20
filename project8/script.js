var a;
function pass()
{
    if(a==1)
    {
        document.getElementById('password').type='password';
        document.getElementById('pass-icon').src='assets/images/img_1.png';
        a=0;
    }
    else{
        document.getElementById('password').type='text';
        document.getElementById('pass-icon').src='assets/images/img_2.png';
        a=1;
    }
}
