//enums
const enum Size { Small="s", Medium="m", Large="l" };
const mySize = Size.Medium;
console.log(mySize);


const enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}

function getMedia(mediaName: string) : PrintMedia{
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
    else{
        return PrintMedia.Book;
    }
 }

let mediaType : PrintMedia= getMedia('Forbes'); // returns 3 i.e Magazine
console.log(mediaType);

//computed enums
enum PrintMediaType {
    Newspaper = 1,
    Newsletter = getPrintMediaTypeCode('newsletter'),
    Magazine = Newsletter * 3,
    Book = 10
}

function getPrintMediaTypeCode(mediaName: string): number {
    if (mediaName === 'newsletter') {
        return 5;
    }else{
        return 4;
    }
}

console.log(PrintMediaType.Newsletter); // returns 5
console.log(PrintMediaType.Magazine); // returns 15