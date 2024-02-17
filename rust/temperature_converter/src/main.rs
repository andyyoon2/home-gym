use std::io;

#[derive(Debug)]
enum TemperatureUnit {
    Celsius,
    Fahrenheit,
}

fn main() {
    loop {
        let value = read_temp_value();
        let unit = read_temp_unit();
        println!("You entered: {} {:?}", value, unit);
        match unit {
            TemperatureUnit::Celsius => {
                let converted_value = 1.8 * value + 32.0;
                println!(
                    "{} degrees {:?} is {} degrees {:?}",
                    value,
                    unit,
                    converted_value,
                    TemperatureUnit::Fahrenheit
                )
            }
            TemperatureUnit::Fahrenheit => {
                let converted_value = (value - 32.0) / 1.8;
                println!(
                    "{} degrees {:?} is {} degrees {:?}",
                    value,
                    unit,
                    converted_value,
                    TemperatureUnit::Celsius
                )
            }
        }
    }
}

fn read_temp_value() -> f64 {
    loop {
        let mut value = String::new();
        println!("Enter temperature degrees:");
        io::stdin()
            .read_line(&mut value)
            .expect("Failed to read line");
        let _: f64 = match value.trim().parse() {
            Ok(num) => break num,
            Err(_) => {
                println!("Enter a valid number!");
                continue;
            }
        };
    }
}

fn read_temp_unit() -> TemperatureUnit {
    loop {
        let mut unit = String::new();
        println!("Enter temperature units:");
        io::stdin()
            .read_line(&mut unit)
            .expect("Failed to read line");
        let s = unit.trim();
        if s == "C" {
            break TemperatureUnit::Celsius;
        } else if s == "F" {
            break TemperatureUnit::Fahrenheit;
        } else {
            println!("Enter C for Celsius or F for Fahrenheit.");
        }
    }
}
