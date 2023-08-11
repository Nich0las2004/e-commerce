const BooksAPI = [
  {
    title: "A Game of Thrones",
    text: "A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by American author George R. R. Martin. It was first published on August 1, 1996. In the novel, recounting events from various points of view, Martin introduces the plot-lines of the noble houses of Westeros, the Wall, and the Targaryens.",
    url: "https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg",
    genre: "fantasy",
    id: 1,
  },
  {
    title: "A Clash of Kings",
    text: "A Clash of Kings is the second of seven planned novels in A Song of Ice and Fire, an epic fantasy series by American author George R. R. Martin. It was first published on November 16, 1998 in the United Kingdom; A Clash of Kings depicts the Seven Kingdoms of Westeros in civil war, while the Night's Watch mounts a reconnaissance to investigate the mysterious people known as wildlings. Meanwhile, Daenerys Targaryen continues her plan to conquer the Seven Kingdoms. ",
    url: "https://upload.wikimedia.org/wikipedia/en/3/39/AClashOfKings.jpg",
    genre: "fantasy",
    id: 2,
  },
  {
    title: "A Storm of Swords",
    text: "A Storm of Swords is the third of seven planned novels in A Song of Ice and Fire, a fantasy series by American author George R. R. Martin. It was first published on August 8, 2000, in the United Kingdom. The Seven Kingdoms of Westeros are still in the grip of the War of the Five Kings, wherein Joffrey Baratheon and his uncle Stannis Baratheon compete for the Iron Throne, while Robb Stark of the North and Balon Greyjoy of the Iron Islands declare their independence (Stannis's brother Renly Baratheon, the fifth 'king', has already been killed).",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/AStormOfSwords.jpg/220px-AStormOfSwords.jpg",
    genre: "fantasy",
    id: 3,
  },
  {
    title: "A Feast for Crows",
    text: "A Feast for Crows is the fourth of seven planned novels in the epic fantasy series A Song of Ice and Fire by American author George R. R. Martin. The novel was first published on October 17, 2005, in the United Kingdom; The War of the Five Kings is slowly coming to its end. The secessionist kings Robb Stark and Balon Greyjoy are dead. One claimant to the throne, Stannis Baratheon, has gone to fight off invading wildling tribes at the northern Wall, where Robb's half-brother Jon Snow has become the 998th Lord Commander of the Night's Watch, the order responsible for guarding the Wall. The eight-year-old King Tommen Baratheon now rules in King's Landing under the regency of his mother, Cersei Lannister. The warrior woman Brienne of Tarth has been sent by Cersei's brother (and lover) Jaime Lannister on a mission to find Robb's sister Sansa Stark. Sansa is hiding in the Vale, protected by her mother's childhood friend Petyr “Littlefinger” Baelish, who has murdered his wife (and her aunt) Lysa Arryn, and named himself Protector of the Vale and guardian of Lysa's son, the eight-year-old Lord Robert Arryn.",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/AFeastForCrows.jpg/220px-AFeastForCrows.jpg",
    genre: "fantasy",
    id: 4,
  },
  {
    title: "A Dance with Dragons",
    text: "A Dance with Dragons is the fifth novel of seven planned in the epic fantasy series A Song of Ice and Fire by American author George R. R. Martin. In some areas, the paperback edition was published in two parts, titled Dreams and Dust and After the Feast. As the Seven Kingdoms struggle for power, Daenerys Targaryen, the last surviving member of her family, seeks to reclaim the Iron Throne. Meanwhile, Jon Snow, the Lord Commander of the Night's Watch, grapples with the complexities of leadership while facing challenges from both wildlings and internal strife.The narrative introduces new characters and delves deeper into the fates of familiar ones. Bran Stark embraces his supernatural abilities as a warg, navigating a mystical journey beyond the Wall. Tyrion Lannister, fleeing Westeros, ventures into the dangerous lands of Essos.With dragons soaring above and winter descending, the fate of Westeros hangs in the balance. 'A Dance with Dragons' weaves a tapestry of suspense, deception, and destiny, immersing readers in a world of political intrigue, fantastical creatures, and moral dilemmas, as each character's actions shape the future of the realm.",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/A_Dance_With_Dragons_US.jpg/220px-A_Dance_With_Dragons_US.jpg",
    genre: "fantasy",
    id: 5,
  },
  {
    title: "Frankenstein",
    text: "Frankenstein; or, The Modern Prometheus is an 1818 novel written by English author Mary Shelley. Frankenstein tells the story of Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment. The creature, rejected and tormented by society, seeks revenge on his creator. As Victor's life unravels, the novel delves into themes of ambition, responsibility, and the consequences of playing God. Narrated through multiple perspectives, 'Frankenstein' explores the human psyche, the search for identity, and the power of compassion. The novel remains a seminal work in literature, reflecting on the ethical implications of scientific advancement and the consequences of alienation and societal rejection.",
    url: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982146160/frankenstein-9781982146160_hr.jpg",
    genre: "classics",
    id: 6,
  },
  {
    title: "The Odyssey",
    text: "The Odyssey is one of two major ancient Greek epic poems attributed to Homer. It is one of the oldest extant works of literature still widely read by modern audiences.",
    url: "https://m.media-amazon.com/images/I/819IxwjBa9L._AC_UF1000,1000_QL80_.jpg",
    genre: "classics",
    id: 7,
  },
  {
    title: "Jane Eyre",
    text: "Jane Eyre is a classic novel written by Charlotte Brontë and first published in 1847. The story follows the life of Jane Eyre, an orphaned girl who endures a difficult and lonely childhood. After being mistreated by her aunt and cousins, Jane is sent to the Lowood School, a harsh and strict institution for orphans.",
    url: "https://3.bp.blogspot.com/-bSuuuAZm4-U/TfKxOsj4cRI/AAAAAAAAEOY/MenhZVkWc18/s1600/jane-eyre.jpg",
    genre: "classics",
    id: 8,
  },
  {
    title: "Robinson Crusoe",
    text: "Robinson Crusoe is a classic novel written by Daniel Defoe and first published in 1719. The story is a fictional autobiography narrated by the titular character, Robinson Crusoe. Inspired by real-life accounts of shipwrecks and survival, the novel is considered one of the earliest examples of realistic fiction.",
    url: "https://mpd-biblio-covers.imgix.net/9781466805347.jpg",
    genre: "adventure",
    id: 9,
  },
  {
    title: "Adventures of Huckleberry Finn",
    text: "The Adventures of Huckleberry Finn is a classic novel written by Mark Twain and first published in 1885. The story is narrated by Huckleberry Finn, a young boy who embarks on a series of adventures along the Mississippi River.",
    url: 'https://images.ucpress.edu/covers/isbn13/9780520343641.jpg',
    genre: "adventure",
    id: 10,
  },
  {
    title: "The Three Musketeers",
    text: "The Three Musketeers is a classic historical novel written by Alexandre Dumas and first published in 1844. Set in 17th-century France, the story follows the adventures of d'Artagnan, a young and ambitious Gascon who travels to Paris to join the prestigious Musketeers of the Guard.",
    url: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781681776880/the-three-musketeers-9781681776880_hr.jpg",
    genre: "adventure",
    id: 11,
  },
  {
    title: "Children of Time",
    text: 'Children of Time is a science fiction novel written by Adrian Tchaikovsky and published in 2015. The novel is set in a distant future where humanity faces extinction due to its own folly and environmental disasters. In a desperate bid to preserve their legacy, a group of scientists embarks on a bold project to terraform a distant planet and introduce a carefully selected cargo of Earth"s life.',
    url: "https://upload.wikimedia.org/wikipedia/en/1/1f/Children_of_Time_%28novel%29.jpg",
    genre: "science fiction",
    id: 12,
  },
  {
    title: "Nineteen Eighty-Four",
    text: '"Nineteen Eighty-Four" is a dystopian novel written by George Orwell and published in 1949. Set in a totalitarian society, the story takes place in the year 1984, where the world is under the rule of the Party led by Big Brother. The novel follows the life of Winston Smith, a low-ranking Party member working for the Ministry of Truth.',
    url: "https://cdn.kobo.com/book-images/f9a7ae94-563e-43c6-8a59-f41bf8d65c2c/353/569/90/False/w6KNNZ4nxzSUmDrMgxBTXQ.jpg",
    genre: "science fiction",
    id: 13,
  },
  {
    title: "Dune",
    text: 'The story follows Paul Atreides, the young heir of House Atreides, who moves to Arrakis with his family to take control of the planet"s spice mining operations. As the political intrigue and power struggles unfold, Paul finds himself embroiled in a dangerous web of conspiracies and rivalries.',
    url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
    genre: "science fiction",
    id: 14,
  },
  {
    title: "Don Quixote",
    text: 'Don Quixote is a Spanish epic novel by Miguel de Cervantes. It was originally published in two parts, in 1605 and 1615. Considered a founding work of Western literature, it is often labelled as the first modern novel and one of the greatest works ever written. Don Quixote is also one of the most-translated books in the world and one of the best-selling novels of all time.The plot revolves around the adventures of a member of the lowest nobility, a hidalgo from La Mancha named Alonso Quijano, who reads so many chivalric romances that he loses his mind and decides to become a knight-errant (caballero andante) to revive chivalry and serve his nation, under the name Don Quixote de la Mancha. He recruits as his squire a simple farm labourer, Sancho Panza, who brings a unique, earthy wit to Don Quixote"s lofty rhetoric. In the first part of the book, Don Quixote does not see the world for what it is and prefers to imagine that he is living out a knightly story meant for the annals of all time. However, as Salvador de Madariaga pointed out in his Guía del lector del Quijote (1972 [1926]), referring to "the Sanchification of Don Quixote and the Quixotization of Sancho", as Sancho"s spirit ascends from reality to illusion, Don Quixote"s declines from illusion to reality".',
    url: "https://m.media-amazon.com/images/I/411WFSFEMJL._AC_UF1000,1000_QL80_.jpg",
    genre: "adventure",
    id: 15,
  },
  {
    title: "The Hobbit",
    text: 'The Hobbit, or There and Back Again is a children"s fantasy novel by English author J. R. R. Tolkien. It was published in 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction. The book is recognized as a classic in children"s literature, and is one of the best-selling books of all time with over 100 million copies sold. The Hobbit is set in Middle-earth and follows home-loving Bilbo Baggins, the hobbit of the title, who joins the wizard Gandalf and thirteen dwarves that make up Thorin Oakenshield"s Company, on a quest to reclaim the dwarves" home and treasure from the dragon Smaug. Bilbo"s journey takes him from his peaceful rural surroundings into more sinister territory.',
    url: "https://i.pinimg.com/1200x/27/cf/91/27cf91f605923223613909c7b9d2219f.jpg",
    genre: "fantasy",
    id: 16,
  },
  {
    title: "The Last Wish",
    text: 'The Last Wish is the third published short story collection in Polish fantasy writer Andrzej Sapkowski"s The Witcher series. Published by SuperNowa in 1993, it was preceded by 1992"s Sword of Destiny, but is officially considered the first entry in the series and Sword of Destiny the second. The collection contains seven short stories interspersed with a continuing frame story: Geralt of Rivia, after having been injured in battle, rests in a temple. During that time he has flashbacks to recent events in his life, with each flashback forming a short story. The Last Wish was first published in English on 7 June 2007 by Gollancz, and has also been translated into several other languages. In 2003, it won the Premio Ignotus for Best Anthology',
    url: "https://anylang.net/sites/default/files/styles/book_image/public/covers/witcher-last-wish.jpg?itok=gAbjn5cr",
    genre: "fantasy",
    id: 17,
  },
  {
    title: "Treasure Island",
    text: `"Treasure Island" is a classic adventure novel by Robert Louis Stevenson, first published in 1882. The story follows young Jim Hawkins as he embarks on a perilous journey to find the legendary pirate Captain Flint's buried treasure. Set amidst treacherous seas, hidden maps, and a crew of swashbuckling pirates led by the cunning Long John Silver, the novel is a timeless tale of greed, bravery, and the allure of the unknown. With vivid characters, thrilling escapades, and a captivating portrayal of life on the high seas, "Treasure Island" has captured the imaginations of readers for generations. The novel's themes of morality, trust, and the duality of human nature continue to resonate, making it a beloved classic in the realm of adventure literature.`,
    url: "https://cdn.kobo.com/book-images/08bb082e-e9d4-492e-b2ae-ee04233dbc33/1200/1200/False/treasure-island-450.jpg",
    genre: "adventure",
    id: 18,
  },
  {
    title: "Pride and Prejudice",
    text: `"Pride and Prejudice" is a timeless romantic novel by Jane Austen, published in 1813. Set in Regency-era England, the story revolves around Elizabeth Bennet, an intelligent and spirited young woman, and Mr. Darcy, a wealthy and reserved gentleman. Their initial misunderstandings and societal pressures create a backdrop of wit, humor, and social commentary. As the plot unfolds, Austen masterfully explores themes of class, marriage, and personal growth. The novel's sharp characterizations, witty dialogue, and intricate relationships make it a delightful exploration of human nature. Through Elizabeth's journey of self-discovery and Mr. Darcy's transformation, "Pride and Prejudice" remains a cherished classic that continues to captivate readers with its enduring charm and exploration of love, family, and the complexities of societal expectations.`,
    url: "https://almabooks.com/wp-content/uploads/2016/10/9781847493699.jpg",
    genre: "classics",
    id: 19,
  },
  {
    title: "The Great Gatsby",
    text: `"The Great Gatsby" is a classic novel by F. Scott Fitzgerald, published in 1925. Set during the Roaring Twenties, the story follows the enigmatic millionaire Jay Gatsby and his obsession with the elusive Daisy Buchanan. Through the eyes of Nick Carraway, the narrator and Daisy's cousin, the novel delves into themes of wealth, social status, and the American Dream. Gatsby's extravagant parties and his unrequited love for Daisy reveal a world of excess and disillusionment.
    Fitzgerald's evocative prose captures the extravagance and decadence of the Jazz Age, while also exposing the emptiness that can lie beneath the surface. The characters' desires and aspirations clash with the reality of their lives, highlighting the fragility of dreams and the complexities of human relationships.
    "The Great Gatsby" is a poignant exploration of the pursuit of happiness, the seductive allure of the past, and the inevitable collision of dreams with reality. Its exploration of wealth, love, and the human condition has cemented its place as a quintessential American novel that continues to resonate with readers today.`,
    url: "https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1",
    genre: "classics",
    id: 20,
  },
  {
    title: "Fahrenheit 451",
    text: `"Fahrenheit 451" is a dystopian novel written by Ray Bradbury and published in 1953. Set in a future society where books are banned and "firemen" burn them to suppress dissenting ideas, the story follows Guy Montag, a fireman who begins to question the oppressive regime. As Montag seeks knowledge and meaning, he encounters a group of rebels who preserve books and aim to revive critical thinking.
    Bradbury's thought-provoking exploration of censorship, conformity, and the power of literature is a chilling commentary on the potential dangers of a society that suppresses intellectual freedom. The novel's title refers to the temperature at which paper ignites, symbolizing the destructive forces that threaten to consume knowledge and individuality.
    Through Montag's transformation from enforcer to advocate for intellectual freedom, "Fahrenheit 451" serves as a cautionary tale about the importance of preserving ideas and challenging societal norms. The novel's themes and warnings remain relevant in our modern world, making it a powerful and enduring work of speculative fiction.`,
    url: "https://i.pinimg.com/originals/8c/09/d9/8c09d9fcb63e9bee8b462ffe27d7de18.png",
    genre: "science fiction",
    id: 21,
  },
  {
    title: "The Martian Chronicles",
    text: `"The Martian Chronicles" is a science fiction classic written by Ray Bradbury and published in 1950. It is a collection of interconnected short stories that chronicle humanity's attempts to colonize and interact with Mars. Set in a future where Earthlings seek to escape a troubled world, the stories reveal the complex relationship between humans and the enigmatic Martians.
    Bradbury's poetic and evocative prose captures the wonder, mystery, and challenges of space exploration. The stories touch on themes of colonization, cultural clashes, loneliness, and the human desire for exploration and connection. As the settlers grapple with their own desires and the legacy of their species, they come to realize that Mars is both a physical and metaphorical frontier.
    "The Martian Chronicles" offers a blend of science fiction, fantasy, and social commentary, inviting readers to reflect on the consequences of human actions and the potential for both triumph and tragedy in our quest for discovery. Bradbury's exploration of Mars becomes a mirror through which we examine our own humanity and the impact we have on the worlds we encounter.`,
    url: "https://m.media-amazon.com/images/I/71L+jk0eCuL._AC_UF1000,1000_QL80_.jpg",
    genre: "science fiction",
    id: 22,
  },
];

export default BooksAPI;
