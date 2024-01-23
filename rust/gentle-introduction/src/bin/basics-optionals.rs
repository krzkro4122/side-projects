fn main() {
    let ints = [1, 2, 3, 4];

    let slice = &ints;
    let first = slice.get(0);
    let last = slice.get(slice.len());

    println!("first {:?}", first);
    println!("last {:?}", last);

    println!("First {} {}", first.is_some(), first.is_none());
    println!("Last {} {}", last.is_some(), last.is_none());

    println!("first value {}", first.unwrap());
    println!("last value {}", last.unwrap());
}
