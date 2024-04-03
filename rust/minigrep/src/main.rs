use std::{env, error::Error, fs, process};

fn main() {
    // main should be responsible for parsing args, then handing off execution
    // to the lib entry-point.
    let args: Vec<String> = env::args().collect();

    let config = Config::build(&args).unwrap_or_else(|err| {
        println!("Problem parsing arguments: {err}");
        process::exit(1);
    });

    println!("Searching for {}", config.query);
    println!("In file {}", config.file_path);

    // Another syntax for handling errors
    if let Err(e) = run(config) {
        println!("Application error: {e}");
        process::exit(1);
    }
}

// Box<dyn Error> = The error will be some type that implements the Error trait
fn run(config: Config) -> Result<(), Box<dyn Error>> {
    // Recall the ? returns the inner Result to the caller if it's an Err
    let contents = fs::read_to_string(config.file_path)?;

    println!("Text:\n{}", contents);

    // Idiomatic way to return a Result of nothing from a fn
    Ok(())
}

struct Config {
    query: String,
    file_path: String,
}

impl Config {
    // Unsure of why 'static is used, review lifetimes
    fn build(args: &[String]) -> Result<Config, &'static str> {
        if args.len() < 3 {
            return Err("not enough arguments");
        }

        // We will learn more efficient ways to do this, but for now we're calling
        // clone so that we can return a new Config which owns its member Strings.
        let query = args[1].clone();
        let file_path = args[2].clone();

        Ok(Config { query, file_path })
    }
}
