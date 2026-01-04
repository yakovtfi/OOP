export class MediaItem {
    constructor(title, year, genre) {
        this.title = title;
        this.year = year;
        this.genre = genre

    }
    getSummary() {
        return `${this.title} ${this.year}- ${this.genre}`;
    }
}

export class Book extends MediaItem {
    constructor(title, year, genre, author, pageCount) {
        super(title, year, genre);
        this.author = author;
        this.pageCount = pageCount

    }
    getSummary() {
        return `Book: '${this.title}' by ${this.author}, ${this.pageCount} pages`;
    }
}

export class Movie extends MediaItem {
    constructor(title, director, year, genre, durationMinutes) {
        super(title, year, genre);
        this.director = director;
        this.durationMinutes = durationMinutes;
    }

    getSummary() {
        return `Movie: '${this.title}' directed by ${this.director}, ${this.durationMinutes} min`;
    }
}

export class Library{
    constructor(){
        this.items = []
    }
    addItem(item){
        this.items.push(item)
    }
     search(term) {
        return this.items.filter(item => 
            item.title.toLowerCase().includes(term.toLowerCase())
        );
    }

    listByGenre(genre) {
        return this.items.filter(item => 
            item.genre === genre
        );
    }

}
