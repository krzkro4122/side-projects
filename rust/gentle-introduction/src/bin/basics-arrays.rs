fn main() {
    let array = [10, 20, 30, 40];
    let first = array[0];
    println!("First {first}");

    for i in 0..4 {
        println!("[{i}] = {}", array[i]);
    }

    println!("Length = {}", array.len());
}