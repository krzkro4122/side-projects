fn main() {
    for i in 1..10 {
        let even_odd = if i % 2 == 0 { "even" } else { "odd" };
        println!("{}\t{}", even_odd, i);
    }
}
