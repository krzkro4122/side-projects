use std::time::Instant;

fn prime_siv(n: u32) -> Vec<u32> {
    let mut numbers = Vec::from_iter(2..n);
    numbers.reverse();
    let mut primes = Vec::new();

    while numbers.len() > 0 {
        let num = numbers.pop().unwrap();
        primes.push(num);
        numbers = numbers.iter().filter(|&n| n % num != 0).cloned().collect();
    }

    return primes;
}

fn parse_n() -> u32 {
    let args: Vec<String> = std::env::args().collect();
    let n = args[1]
        .trim_end()
        .parse::<u32>()
        .expect("Wrong number format!");
    return n;
}

fn main() {
    let n = parse_n();
    let start = Instant::now();
    prime_siv(n);
    // let result = prime_siv(n);
    println!("Prime siv up to {} took: {:?}s", n, start.elapsed());
    // println!("Result: {:?}", result);
}
