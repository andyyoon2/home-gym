use std::sync::{Arc, Mutex, mpsc};
use std::thread;

fn main() {
    // https://doc.rust-lang.org/book/ch16-02-message-passing.html
    let (tx, rx) = mpsc::channel();

    thread::spawn(move || {
        tx.send("Hello there").unwrap();
    });

    let msg = rx.recv().unwrap();
    println!("Got message: {}", msg);

    // https://doc.rust-lang.org/book/ch16-03-shared-state.html
    let counter = Arc::new(Mutex::new(0));
    let mut handles = vec![];

    for _ in 0..10 {
        let counter = Arc::clone(&counter);
        let handle = thread::spawn(move || {
            let mut num = counter.lock().unwrap();
            *num += 1;
        });
        handles.push(handle);
    }

    for handle in handles {
        handle.join().unwrap();
    }

    println!("The count is {}", counter.lock().unwrap());
}
