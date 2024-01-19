fn square(x: f64) -> f64 {
    x * x
}

fn main() {
    let input = 2.0;
    let result = square(input);
    println!("Square of {input} is {result}");

    let input = 6969.0;
    let result = square(input);
    println!("Square of {input} is {result}");
}