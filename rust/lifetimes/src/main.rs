fn main() {
    let s1 = String::from("abcd");
    let s2 = "xyz";

    let result = longest(s1.as_str(), s2);
    println!("The longest string is {}", result);
}

// Wrong way
// fn longest(s1: &str, s2: &str) -> &str {

// Right way with lifetime annotations
// This means that the returned reference is valid for as long as either of the
// references to s1 and s2, i.e. it is valid for the smaller of the 2 scopes.
// As soon as s1 or s2 go out of scope, the returned reference is now invalid.
fn longest<'a>(s1: &'a str, s2: &'a str) -> &'a str {
    if s1.len() > s2.len() {
        s1
    } else {
        s2
    }
}
