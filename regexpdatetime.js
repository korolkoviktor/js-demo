{/* 1.Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression 
that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b' */

    let str = 'ahb acb aeb aeeb adcb axeb';
    let re = /a.b/gi;
    console.log('Matches a string by pattern:');
    console.log(str.match(re));
};
{// 2. Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
    let str = '2 + 3 223 2223';
    let re = /^\d\s\+\s\d/;
    let findresult=re.exec(str).toString();
    console.log('\nFinde a line:');
    console.log(findresult);
};
{// 3. Get the day, month and year of the current date and output it to the console separately
    let dateNow = new Date();
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    console.log('\nGet the date, month and year of the current date:');
    console.log('Current date is ' + dateNow.getDate());
    console.log('Current month is ' + monthNames[dateNow.getMonth()]);
    console.log('Current year is ' + dateNow.getFullYear());
}