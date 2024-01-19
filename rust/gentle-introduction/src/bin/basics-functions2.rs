fn abs(x: f64) -> f64 {
    if x > 0.0 {
        x
    } else {
        -x
    }
}

fn clamp(x: f64, start: f64, end: f64) -> f64 {
    if x < start {
        start
    } else if end < x {
        end
    } else {
        x
    }
}

fn factorial(n: u64) -> u64 {
    if n == 0 {
        1
    } else {
        n * factorial(n - 1)
    }
}

fn main() {
    let input = 2.0;
    let output = abs(input);
    println!("|{input}| = {output}");

    let input = -4.0;
    let output = abs(input);
    println!("|{input}| = {output}");

    let input = 6.0;
    let start = 2.0;
    let end = 10.0;
    let output = clamp(input, start, end);
    println!("input={input}\tstart={start}\tend={end}\toutput={output}");

    let input = 11.0;
    let start = 2.0;
    let end = 10.0;
    let output = clamp(input, start, end);
    println!("input={input}\tstart={start}\tend={end}\toutput={output}");

    let input = -2.0;
    let start = 2.0;
    let end = 10.0;
    let output = clamp(input, start, end);
    println!("input={input}\tstart={start}\tend={end}\toutput={output}");

    let input = 2;
    let output = factorial(input);
    println!("{input}! = {output}");

    let input = 10;
    let output = factorial(input);
    println!("{input}! = {output}");

    let input = 20;
    let output = factorial(input);
    println!("{input}! = {output}");
}
