//div by 3 => Fizz
//div by 5 => Buzz
//div by both => FizzBuzz
//Not div by 3 or 5 => input
//Not a number => 'Not a number'



function fizzbuzz(input) {
    if (typeof (input) == 'number') {
        if (input % 3 == 0 && input % 5 == 0)
            return 'FizzBuzz';
        else if (input % 3 == 0)
            return 'Fizz';
        else if (input % 5 == 0)
            return 'Buzz';
        else
            return input;
    }
    else
        return NaN;
}

const output = fizzbuzz('7');
console.log(output);
