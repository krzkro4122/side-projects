use std::f64::consts;

fn main() {
    let x = 2.0 * consts::PI;

    let absolute_difference = (x.cos() - 1.0).abs();

    assert!(absolute_difference < 1e-10);
}
