use std::error::Error;
use std::fs;

pub struct Config {
    pub query: String,
    pub file_path: String,
}

impl Config {
    // Unsure of why 'static is used, review lifetimes
    pub fn build(args: &[String]) -> Result<Config, &'static str> {
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

// Box<dyn Error> = The error will be some type that implements the Error trait
pub fn run(config: Config) -> Result<(), Box<dyn Error>> {
    // Recall the ? returns the inner Result to the caller if it's an Err
    let contents = fs::read_to_string(config.file_path)?;

    for line in search(&config.query, &contents) {
        println!("{line}");
    }

    // Idiomatic way to return a Result of nothing from a fn
    Ok(())
}

pub fn search<'a>(query: &str, contents: &'a str) -> Vec<&'a str> {
    let mut v: Vec<&str> = vec![];
    for line in contents.lines() {
        if line.contains(query) {
            v.push(line);
        }
    }
    v
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn one_result() {
        let query = "duct";
        let contents = "\
Rust:
safe, fast, productive.
Pick three.";

        assert_eq!(vec!["safe, fast, productive."], search(query, contents))
    }
}
