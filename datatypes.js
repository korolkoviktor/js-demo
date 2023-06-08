// 1. Perform addition of various types 
{//string + boolean
    console.log('Perform addition of various types');
    console.log('string + boolean = ' + typeof ('text' + true) + '   ("text"+true="' + ('tetxt' + true) + '")');
    console.log('string + boolean = ' + typeof ('24' + false) + '   ("24"+false="' + ('24' + false) + '")');
};
{//string + number
    console.log('string + number = ' + typeof ('text' + 5) + '   ("text"+5="' + ('text' + 5) + '")');
    console.log('string + number = ' + typeof ('24' + 5) + '   ("24"+5="' + ('24' + 5) + '")');
};
{//number + boolean
    console.log('number + boolean = ' + typeof (5 + true) + '   (5+true=' + (5 + true) + ')', '\n');
};


// 2. Perform multiplication of various types 
{//string * boolean
    console.log('Perform multiplication of various types');
    console.log('string * boolean = ' + typeof ('text' * true) + '   ("text"*true=' + ('tetxt' * true) + ')');
    console.log('string * boolean = ' + typeof ('24' * false) + '   ("24"*false=' + ('24' * false) + ')');
};
{//string * number
    console.log('string * number = ' + typeof ('text' * 5) + '   ("text"*5=' + ('text' * 5) + ')');
    console.log('string * number = ' + typeof ('24' * 5) + '   ("24"*5=' + ('24' * 5) + ')');
};
{//number * boolean
    console.log('number * boolean = ' + typeof (NaN * true) + '   (NaN*true=' + (NaN * true) + ')');
    console.log('number * boolean = ' + typeof (5 * false) + '   (5*false=' + (5 * false) + ')', '\n');
}

// 2. Divide different types 
{//string / boolean
    console.log('Perform division of different types');
    console.log('string / boolean = ' + typeof ('24' / true) + '   ("24"/true=' + ('24' / true) + ')');
    console.log('string / boolean = ' + typeof ('text' / false) + '   ("text"/false=' + ('text' / false) + ')');
};
{//string / number
    console.log('string / number = ' + typeof ('text' / 5) + '   ("text"/5=' + ('text' / 5) + ')');
    console.log('string / number = ' + typeof ('24' / 5) + '   ("24"/5=' + ('24' / 5) + ')');
};
{//number / Boolean
    console.log('number / boolean = ' + typeof (NaN / true) + '   (NaN/true=' + (NaN / true) + ')');
    console.log('number / boolean = ' + typeof (5 / false) + '   (5/false=' + (5 / false) + ')', '\n');
};

// 4. Perform explicit conversion (number, string, boolean)
console.log('Perform explicit conversion');
{ //conversion from Undefined to Number
    let und;
    und = Number(und);
    console.log(und + '  type ' + typeof (und));
}
{ //conversion from Boolean to String
    bool = true;
    bool = String(bool);
    console.log((bool) + '  type ' + typeof (bool));
};
{ //conversion from Number to Boolean
    let num = NaN;
    num = Boolean(num);
    console.log((num) + '  type ' + typeof (num));
}
