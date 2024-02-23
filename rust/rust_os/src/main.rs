#![no_std]
#![no_main]

use core::panic::PanicInfo;

// Manually-defined entry point (linker looks for _start by default)
#[no_mangle]
pub extern "C" fn _start() -> ! {
    loop {}
}

// Called on panic
#[panic_handler]
fn panic(_info: &PanicInfo) -> ! {
    loop {}
}
