fn sum(values: &[i32]) -> i32 {
    let mut result = 0;
    for i in 0..values.len() {
        result += values[i];
    }

    result
}

fn main() {
    let input = [2, 14, 3, 29, 8, 0 ];

    let result = sum(&input);

    println!("Sum of {:?} is {}", input, result);
}