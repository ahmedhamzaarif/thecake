function validatefun()
{
    var vname = document.getElementById('name').value;
    var vitcode = document.getElementById('itcode').value;
    var vemail = document.getElementById('email').value;
    var vdate = document.getElementById('date').value;
    var vnumber = document.getElementById('num').value;
    var vdaddress = document.getElementById('daddress').value;


    var checkname = /^[A-Za-z]{3,20}$/; // Name Validation
    var checkitcode =/^[A-Za-z_0-9]{8}$/; // Last Name validation
    var checkemail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // Email Validation
    var checknumber = /^\d{11}$/; // Number Validation
    var checkdate = /^((0?[1-9]|1[012])[-](0?[1-9]|[12][0-9]|3[01])[-](19|20)?[0-9]{2})*$/; //Date Validation
    var checkldaddress =/^[A-Za-z]{3,20}$/;//address
    // MM-DD-YY
    // 05-31-2007
   // zulfiqarali@aptechgd.net

    //Name validation
    if(checkname.test(vname))
    {
      //  document.getElementById('ename').innerHTML = "";
    }
    else
    {
        document.getElementById('ename').innerHTML = "minum chracter 3 and miximum chracter 20";
    }
    //LastName validation
    if(checkitcode.test(vitcode))
    {
        document.getElementById('eitcode').innerHTML = "";
    }
    else
    {
        document.getElementById('eitcode').innerHTML = "Example:Tccs1001";
    }
    //Email validation
    if(checkemail.test(vemail))
    {
        document.getElementById('eemail').innerHTML = "";
    }
    else
    {
        document.getElementById('eemail').innerHTML = "abc123@aptechgdn.net";
    }
    //Number validation
    if(checknumber.test(vnumber))
    {
        document.getElementById('enum').innerHTML = "";
    }
    else
    {
        document.getElementById('enum').innerHTML = "03111234567";
    }
    //Date validation
    if(checkdate.test(vdate))
    {
        document.getElementById('edate').innerHTML = "";
    }
    else
    {
        document.getElementById('edate').innerHTML = "MM-DD-YY";
    }
    //address validation
    if(checkldaddress.test(vdaddress))
    {
        document.getElementById('edaddress').innerHTML = "";
    }
    else
    {
        document.getElementById('edaddress').innerHTML = "MM-DD-YY";
    }
}