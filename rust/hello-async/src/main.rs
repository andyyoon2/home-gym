use trpl::{Either, Html};

async fn page_title(url: &str) -> Option<String> {
    let response = trpl::get(url).await;
    let text = response.text().await;
    Html::parse(&text)
        .select_first("title")
        .map(|title| title.inner_html())
}

// https://doc.rust-lang.org/book/ch17-01-futures-and-syntax.html
fn main() {
    let args: Vec<String> = std::env::args().collect();

    trpl::block_on(async {
        let (Some(url1), Some(url2)) = (args.get(1), args.get(2)) else {
            panic!("Provide 2 page urls!");
        };
        let title_fut1 = page_title(url1);
        let title_fut2 = page_title(url2);
        let maybe_title = match trpl::select(title_fut1, title_fut2).await {
            Either::Left(left) => left,
            Either::Right(right) => right,
        };
        match maybe_title {
            Some(title) => println!("The faster page title is {}", title),
            None => println!("The faster page had no title"),
        }
    })
}
