var db = firebase.database();
db.ref('books/').update({

    science: {

        book1: {
            like: false,
            heading: 'The Lord Of The Rings',
            writer: 'by J.R.R. Tolkien',
            text: "Tolkien's seminal three-volume epic chronicles the War of the Ring, in which Frodo the hobbit and his companions set out to destroy the evil Ring of Power and restore peace to Middle-earth. The beloved trilogy still casts a long shadow, having established some of the most familiar and enduring tropes in fantasy literature.",
            img: 'https://media.npr.org/assets/bakertaylor/covers/t/the-lord-of-the-rings/9780618640157_custom-bd5c36cb700fafac72208e5f622a6d1a9ca85489-s300-c85.webp',
        },

        book2: {
            like: false,
            heading: "The Hitchhiker's Guide To The Galaxy",
            writer: "by Douglas Adams",
            text: "In the first, hilarious volume of Adams' Hitchhiker's series, reluctant galactic traveler Arthur Dent gets swept up in some literally Earth-shattering events involving aliens, sperm whales, a depressed robot, mice who are more than they seem, and some really, really bad poetry.",
            img: 'https://media.npr.org/assets/bakertaylor/covers/t/the-hitchhikers-guide-to-the-galaxy/9780345391803_custom-94fb9d4ba936bf0e6dff52bf2b7ad8c866f82470-s300-c85.webp'
        },
        book3: {
            like: false,
            heading: "Ender's Game",
            writer: "by Orson Scott Card",
            text: 'Young Andrew "Ender" Wiggin, bred to be a genius, is drafted to Battle School where he trains to lead the century-long fight against the alien Buggers.',
            img: 'https://media.npr.org/assets/bakertaylor/covers/e/enders-game/9780812550702_custom-14b6b3e2b8be027acc868fa0aba0670be8900168-s300-c85.webp'


        },

        book4: {
            like: false,
            heading: "The Dune Chronicles",
            writer: "by Frank Herber",
            text: "Follows the adventures of Paul Atreides, the son of a betrayed duke given up for dead on a treacherous desert planet and adopted by its fierce, nomadic people, who help him unravel his most unexpected destiny.",
            img: 'https://media.npr.org/assets/bakertaylor/covers/d/dune/9780441013593_custom-0d82381c416fc2ad6567c9216193a5c39b4f0cdb-s300-c85.webp'

        }
    },

    human: {

        book1: {
            like: false,
            heading: 'Chariots of the Gods',
            writer: 'by Erich Von Daniken',
            text: "Discover the groundbreaking classic that introduced the theory that ancient Earth established contact with aliens.",
            img: 'https://images3.penguinrandomhouse.com/cover/9780451490032'

        },

        book2: {
            like: false,
            heading: "The Lives of Tao",
            writer: "by Wesley Chu",
            text: "IT technician Roen woke up with a passenger in his brain – an ancient alien life-form called Tao, whose race crash-landed on Earth before the first fish crawled out of the oceans. Now split into two opposing factions – the peace-loving, but under-represented Prophus, and the savage, powerful Genjix – the aliens have been in a state of civil war for centuries. Both sides are searching for a way off-planet, and the Genjix will sacrifice the entire human race, if that’s what it takes.",
            img: 'https://images1.penguinrandomhouse.com/cover/9780857663290'
        },
        book3: {
            like: false,
            heading: "UFOs",
            writer: "by Leslie Kean",
            text: 'The material presented throughout this landmark book is sobering, unflinching, and undeniably awe-inspiring, and moves us toward a goal of properly addressing this worldwide mystery.',
            img: 'https://images4.penguinrandomhouse.com/cover/9780307717085'


        },

        book4: {
            like: false,
            heading: "The War of the Worlds",
            writer: "by H. G. Wells",
            text: "The seminal masterpiece of alien invasion, The War of the Worlds  conjures a terrifying, tentacled race of Martians who devastate the Earth and feed on their human victims while their voracious vegetation, the red weed, spreads over the ruined planet.",
            img: 'https://images4.penguinrandomhouse.com/cover/9780525564164'

        }
    },

    adventure: {

        book1: {
            like: false,
            heading: 'Ivanhoe',
            writer: 'by Walter Scott',
            text: "It all starts here. One of the first true examples of a “historical novel” in Western literature, Ivanhoe is set in the 12th century and focuses on one of the few Saxon noble families still intact after the Norman Conquest. Wilfred of Ivanhoe supports King Richard and is disinherited for his trouble, joining the king on the crusades. The story includes jousts, kidnappings, and plain old-fashioned adventure, and was thrillingly unlike anything that came before it.",
            img: 'http://prodimage.images-bn.com/pimages/9781593082468.jpg'

        },

        book2: {
            like: false,
            heading: "The Three Musketeers",
            writer: "by Alexandre Dumas",
            text: "You can’t really discuss adventure stories without bringing Dumas into the conversation. His novels are still the gold standard when it comes to stories centered on a sense of esprit de corps and the origin of the idea people with a particular set of skills should not be mistreated. The story begins with aspiring Musketeer d’Artagnan offending legendary Musketeers Porthos, Athos, and Aramis and preparing—to their astonishment—to duel each of them in turn; when the illegal duel is interrupted by arresting soldiers, the four fight together and win the day—and that’s just the introductory chapter.",
            img: 'http://prodimage.images-bn.com/pimages/9781593081485.jpg'
        },
        book3: {
            like: false,
            heading: "20,000 Leagues Under the Sea",
            writer: " by Jules Verne",
            text: 'Sea monsters and the first steampunk submarine: it doesn’t get more adventurous than that. Verne’s classic work of adventure and sci-fi isn’t exactly scientifically rigorous—at one point Captain Nemo exits his submarine and strolls about on the floor of the ocean without difficulty—but its spirit of discovery, as Nemo and companions travel to various incredible places (including the lost city of Atlantis), is unparalleled.',
            img: 'http://prodimage.images-bn.com/pimages/9781593083021.jpg'


        },

        book4: {
            like: false,
            heading: "Treasure Island",
            writer: "by Robert Louis Stevenson",
            text: "Every kid (and everyone who has ever been a kid) should read Treasure Island at least once, just as every kid should spend at least one summer pretending to be a pirate hunting for secret treasure. At some point in every life, people dream of adventure finding them and forcing them into the world—just like the Old Buccaneer comes to Jim Hawkins, setting the boy on a path to (what else?) adventure.",
            img: 'http://prodimage.images-bn.com/pimages/9781593082475.jpg'

        }
    },

    fantasy: {

        book1: {
            like: false,
            heading: 'A Game of Thrones',
            writer: 'by George R. R. Martin',
            text: "The popularity of this series has exploded over the last several years, so what list wouldn’t include A Game of Thrones? If you like multiple, intricate story lines, a cast of characters where none is safe from death, and a world full of lords, knights, bastards, wizards, ladies, and more, then you’ll like this series. It has magic, intrigue, mystery, and lots of romance; in essence, a world unlike any you’ve ever encountered.",
            img: 'https://images.gr-assets.com/books/1436732693l/13496.jpg'

        },

        book2: {
            like: false,
            heading: "The Fellowship of the Ring",
            writer: "by J. R. R. Tolkien",
            text: "One ring rules them all. The Dark Lord put all of his powers in One Ring that was taken from him. After years in Middle-earth, Bilbo Baggins ends up with the ring. After he reaches his eleventy-first year, he disappears, and the ring becomes the property of Frodo, his cousin. Thus starts the epic quest to destroy the ring and everything it stands for.",
            img: 'https://images.gr-assets.com/books/1298411339l/34.jpg'
        },
        book3: {
            like: false,
            heading: "The Lion, the Witch and the Wardrobe",
            writer: "by C. S. Lewis",
            text: 'The land where children tumble out of a wardrobe, a secret country where only Lucy, Peter, Susan, and Edmund are known. Lucy finds it first, followed by Edmund and the others. There they discover magic and Aslan, the Great Lion. And it changes their lives forever.',
            img: 'https://images.gr-assets.com/books/1353029077l/100915.jpg'


        },

        book4: {
            like: false,
            heading: " The Colour of Magic ",
            writer: "by Terry Pratchett",
            text: "What would happen if characters in a fantasy world grew up and discovered they had modern anxieties and problems? What would be the best job for a troll in the city? The Colour of Magic explores the answers to questions everyone has but is afraid to ask about fantasy heroes.   ",
            img: 'https://images.gr-assets.com/books/1365691644l/601238.jpg'

        }
    },
    time: {

        book1: {
            like: false,
            heading: 'HERE AND NOW AND THEN',
            writer: 'BY MIKE CHEN',
            text: "Kin is a time-traveling agent from the year 2142 who gets stuck in 1990s San Francisco after a botched mission, and his rescue team shows up 18 years too late after he’s already built a life for himself. Here and Now and Then has all those warm and fuzzy sci-fi feels with just the right amount of Doctor Who level angst. Kin dealing with the circumstances of time travel and the consequences it brings about is super compelling and emotional and so, so worthy of a Murray Gold score.",
            img: 'https://s2982.pcdn.co/wp-content/uploads/2019/02/here-and-now-and-then-by-mike-chen-cover-199x300.jpg.webp'

        },

        book2: {
            like: false,
            heading: "ALICE PAYNE ARRIVES ",
            writer: "BY KATE HEARTFIELD",
            text: "Alice Payne Arrives is a quick romp through time with some truly amazing female characters. Alice Payne is a half-black queer woman in 1788 England living in her father’s deteriorating mansion. She’s also a notorious masked highway robber and her partner is an inventor. Prudence is a professional time traveler from the 22nd century working fruitlessly to try and change one small event in 1884. The two women cross paths and work together to put Prudence’s plan to end time travel in motion.",
            img: 'https://s2982.pcdn.co/wp-content/uploads/2019/11/alice-payne-arrives-cover-188x300.jpg.webp'
        },
        book3: {
            like: false,
            heading: "THIS IS HOW YOU LOSE THE TIME WAR",
            writer: "BY AMAL EL-MOHTAR",
            text: 'Blue and Red are fighting on opposite sides of an endless time war. They begin to exchange letters on the battlefield, first as a boast, then as an exploration of friendship across enemy lines, and finally as a romance. I have previously described this as “poetic sci-fi realness.” I could be more professional and say that this is an epistolary work of rival agents forming a bond despite their opposition, but like I can’t okay',
            img: 'https://s2982.pcdn.co/wp-content/uploads/2019/08/this-is-how-you-lose-the-time-war-cover-201x300.jpg.webp'


        },

        book4: {
            like: false,
            heading: "THE SHINING GIRLS",
            writer: "BY LAUREN BEUKES",
            text: "What if time travel fell into the hands of a criminal? The Shining Girls is the story of serial killer named Harper Curtis who stumbles upon an abandoned house in Depression-era Chicago that allows him to travel in time. He chooses his victims and visits them at different times of their lives before returning for the kill. Kirby survives Harper’s attack and, along with a former homicide reporter, tries to unravel the mystery before anyone else dies. This book is wild, W-I-L-D. There’s a lot of violence, so it might not be for everyone, but it’s such an interesting take on the time travel story.",
            img: 'https://s2982.pcdn.co/wp-content/uploads/2019/11/the-shining-girls-cover-193x300.jpg.webp'

        }
    },
    young: {

        book1: {
            like: false,
            heading: 'Harry Potter series',
            writer: 'by J.K. Rowling',
            text: "The adventures of Harry Potter, the Boy Who Lived, and his wand-wielding friends at the Hogwarts School of Witchcraft and Wizardry. Harry, Ron and Hermione must master their craft and battle the machinations of the evil wizard Voldemort and his Death Eaters.",
            img: 'https://media.npr.org/assets/bakertaylor/covers/manually-added/harry-potter_custom-61a3782c85bb56dfb89436be2ec11cfaf5b84201-s300-c85.webp'

        },

        book2: {
            like: false,
            heading: "The Hunger Games series",
            writer: "by Suzanne Collins",
            text: "In the ruins of a future North America, a young girl is picked to leave her impoverished district and travel to the decadent Capitol for a battle to the death in the savage Hunger Games. But for Katniss Everdeen, winning the Games only puts her deeper in danger as the strict social order of Panem begins to unravel.",
            img: 'https://media.npr.org/assets/bakertaylor/covers/t/the-hunger-games/9780439023528_custom-49e9c33a338d97f0abb78402bcdee9b1103f33a0-s300-c85.webp'
        },
        book3: {
            like: false,
            heading: "To Kill a Mockingbird",
            writer: "by Harper Lee",
            text: 'Author Harper Lee explores racial tensions in the fictional "tired old town" of Maycomb, Ala., through the eyes of 6-year-old Scout Finch. As her lawyer father, Atticus, defends a black man accused of rape, Scout and her friends learn about the unjust treatment of African-Americans — and their mysterious neighbor, Boo Radley.',
            img: 'https://media.npr.org/assets/bakertaylor/covers/t/to-kill-a-mockingbird/9780060935467_custom-b86b41b7267a0af1f40c1fed963206e49c03ad56-s300-c85.webp'


        },

        book4: {
            like: false,
            heading: "The Hobbit",
            writer: "by J.R.R. Tolkien",
            text: "Bilbo Baggins, a respectable, well-to-do hobbit, lives comfortably in his hobbit hole until the day the wandering wizard Gandalf chooses him to take part in an adventure from which he may never return.",
            img: 'https://media.npr.org/assets/bakertaylor/covers/h/hobbit-or-there-and-back-again/9780345339683_custom-70a1718cd320dd9557789bbb7a1a004349156b48-s300-c85.webp'

        }
    },
    love: {

        book1: {
            like: false,
            heading: 'Pride and Prejudice ',
            writer: 'by Jane Austen ',
            text: "Arguably the greatest romance novel of all time, Austen's Pride and Prejudice follows the opinionated heroine, Elizabeth Bennet, as she frequently finds herself at odds with her beau, the uptight Mr. Darcy. In 2006, Keira Knightley earned an Oscar nomination for her portrayal of Bennet on the big screen.",
            img: 'https://th.bing.com/th/id/R.2151975144f785a6f8b2361c2b35e38c?rik=9ETaVf9XfKE1dA&pid=ImgRa'

        },

        book2: {
            like: false,
            heading: "Jane Eyre",
            writer: "by Charlotte Brontë",
            text: "By exploring themes such as religion, sexuality, and classism, Jane Eyre was a groundbreaking novel during its 19th century release. Still revered as one of the genre's first novels, Brontë's story of the titular character, Jane, and her maturing emotions and love for her broody boss, Mr. Rochester, is one that readers still have a hard time putting down. ",
            img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1548887142-41oRRotv2KL.jpg?crop=0.958xw:1xh;center,top&resize=768:*'
        },
        book3: {
            like: false,
            heading: "Shanna",
            writer: "by E. Woodiwiss",
            text: "A disclaimer? An OG bodice ripper, The Wolf and the Dove was written in the 1970s, and it shows. Readers today may find it a little too long at over 600 pages—and back then, the foundations of consent that are now commonplace in the 21st century were not at the forefront. But with that said, Woodiwiss's work is one of the original historical romance classics, providing a pathway for many of today's favorite reads. Shanna follows its heiress namesake as she escapes to a Caribbean island after being promised in marriage to the lustful criminal, Ruark Beauchamp.",
            img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1611694526-51A9RBVnJ8L.jpg?crop=1.00xw:0.932xh;0,0.0200xh&resize=768:*'


        },

        book4: {
            like: false,
            heading: "Lord of Scoundrels",
            writer: "by Loretta Chase",
            text: "Notorious sinner Sebastian Ballister, Marquess of Dain, revels in his reputation as an unapologetic scoundrel. And he's perfectly content to live as such—until he comes across Jessica Trent. She's smart and head strong, determined to save her troubled brother from ruin, but she has to cross Sebastian to do so.",
            img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1611693124-519p5v6OLJL.jpg?crop=1.00xw:0.932xh;0,0.0340xh&resize=768:*'

        }
    },

    romance: {

        book1: {
            like: false,
            heading: 'It Ends With Us',
            writer: 'by Colleen Hoover',
            text: 'New to Boston, small-town girl Lily manages to get gorgeous neurosurgeon Ryle Kincaid to break his "no dating" rule. But his stubborn ways  make her wonder where that aversion came from. And when an old flame resurfaces, everything she has with Ryle is suddenly thrown into question.',
            img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1549386174-514wNQ0vMgL.jpg?crop=1.00xw:0.944xh;0,0&resize=768:*'

        },

        book2: {
            like: false,
            heading: "The Proposal",
            writer: "by Jasmine Guillory",
            text: "You really can't go wrong with any of Jasmine Guillory's fun, romantic romps, but this Reese's Book Club pick is especially great. Freelance writer Nik's boyfriend proposes at a Dodger's game, and the dude can't even spell her name right. She says no (duh), and the video goes viral. Handsome doctor Carlos sweeps her away from the frenzy, but he can't possibly be the real deal. Or can he? ",
            img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1581097994-41FddZoWzL.jpg?crop=1xw:0.999xh;center,top&resize=768:*'
        },
        book3: {
            like: false,
            heading: "The Hating Game",
            writer: "by Sally Thorne",
            text: "If you've ever carried a torch for a coworker (the scandal!) this 2016 novel will speak to you. Ccoworkers Lucy Hutton and her sworn nemesis Joshua Templeman have a rivalry as bitter as they come, especially as they compete for the same promotion. At least, it starts out that way. ",
            img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1549388634-5177RJNUAgL.jpg?crop=1xw:0.996xh;center,top&resize=768:*'


        },

        book4: {
            like: false,
            heading: "Vision In White",
            writer: "by Nora Roberts",
            text: 'The prolific Nora Roberts has penned more than 200 romance novels, but this one earned top marks from her fans as the first installment in The Bride Quartet. Wedding photographer Mackensie "Mac" Elliot operates a wedding planning company with three friends. When a day on the job introduces her to sweet and stable English teacher Carter Maguire, their casual fling might lead to her own happy ending.',
            img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1549389901-512Dk0Md54L.jpg?crop=1.00xw:0.932xh;0,0.00200xh&resize=768:*'

        }
    },

    frontier: {

        book1: {
            like: false,
            heading: "Redeeming Love",
            writer: "by Francine Rivers",
            text: `I come boldly trusting only
            Your redeeming love
            Flowing freely from Your side now
            Your atoning blood
            Like a river like a fountain
            Like a cleansing flood
            I pour out my worship to You
            For Your redeeming love`,
            img: "https://d3a7xcjwi1uszv.cloudfront.net/1590525132-M.jpg"

        },
        book2: {
            like: false,
            heading: "Dawn on a Distant Shore",
            writer: "by Sara Donati",
            text: `Award-winning author Sara Donati's debut novel, Into the Wilderness, was hailed as "one of those rare stories that let you breathe the air of another time" (Diana Gabaldon). Now, in an eloquent blend of fact and fiction, Donati re-creates her beloved characters from Into the Wilderness in an enthralling new tale of romance and adventure.Elizabeth and Nathaniel Bonner have settled into their life together at the edge of the New-York wilderness in the winter of 1794. But soon after Elizabeth gives birth to healthy twins, Nathaniel learns that his father has been arrested in British Canada. Forced to leave Hidden Wolf Mountain to help his father in Montreal, Nathaniel himself is imprisoned and in danger of being hanged as a spy.`,
            img: "https://d3a7xcjwi1uszv.cloudfront.net/0553578553-M.jpg"

        },
        book3: {
            like: false,
            heading: "A Time to Embrace",
            writer: "by Karen Kingsbury",
            text: "In this sequel to A Time to Dance, beloved evangelical Christian novelist Kingsbury brings readers up to date on the trials and tribulations of Abby and John Reynolds, who, after 20-plus years of marriage, are enjoying something of a second honeymoon.Religiously inclined readers will appreciate Kingsbury's deft and sophisticated treatment of prayer, as characters struggle to understand how and when God answers prayers. Less satisfying is Kingsbury's unsubtle insertion of hot-button evangelical social issues: a son delving into Internet porn, a mother-in-law repenting for a long-past abortion. There's even a passing potshot at sexual education in schools. Still, Kingsbury's hallmarks are in evidence: readers can expect lively dialogue, likable characters and a passionate witness to the commitments and obligations of marriage.",
            img: "https://m.media-amazon.com/images/I/519suyGd6gL.jpg"

        },
        book4: {
            like: false,
            heading: "Whence Came a Prince",
            writer: "by Liz Curtis Higgs",
            text: "amie McKie is determined to return to his ancestral home in Glen Trool and claim his inheritance—a harrowing journey that will test the depth of his courage and the strength of his sword. Haunted by a shameful past and wrestling with an uncertain future, Jamie must outwit his devious Uncle Lachlan and confront the two men he most fears: Evan, the brother whose inheritance he stole, and Alec, the father whom he blatantly deceived.",
            img: "https://images-na.ssl-images-amazon.com/images/I/51S+thkzJfL._SX330_BO1,204,203,200_.jpg"

        }
    },

    historical: {

        book1: {
            like: false,
            heading: "To Kill a Mockingbird",
            writer: "by Harper Lee",
            text: "he unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.",
            img: "https://images-na.ssl-images-amazon.com/images/I/51N5qVjuKAL._SX309_BO1,204,203,200_.jpg"

        },
        book2: {
            like: false,
            heading: "Memoirs of a Geisha",
            writer: "by Arthur Golden",
            text: "Speaking to us with the wisdom of age and in a voice at once haunting and startlingly immediate, Nitta Sayuri tells the story of her life as a geisha. It begins in a poor fishing village in 1929, when, as a nine-year-old girl with unusual blue-gray eyes, she is taken from her home and sold into slavery to a renowned geisha house. We witness her transformation as she learns the rigorous arts of the geisha: dance and music; wearing kimono, elaborate makeup, and hair; pouring sake to reveal just a touch of inner wrist; competing with a jealous rival for men's solicitude and the money that goes with it.",
            img: "https://d3a7xcjwi1uszv.cloudfront.net/0099771519-M.jpg"

        },
        book3: {
            like: false,
            heading: "Slaughterhouse 5",
            writer: "by Kurt Vonnegut",
            text: "Themes are overarching ideas and beliefs that the writers express in their texts including poetry, fiction, and plays.  Themes make the story appealing and persuasive and help readers to understand the hidden messages in a story or poem. Kurt Vonnegut has inserted various themes in Slaughterhouse-Five, his phenomenal novel. The novel deal with the dilemma of war and its impacts on the victims. Some of the major themes in Slaughterhouse-Five have been discussed below.",
            img: "https://d3a7xcjwi1uszv.cloudfront.net/0099800209-M.jpg"

        },
        book4: {
            like: false,
            heading: "The Count of Monte Cristo",
            writer: "by Alexandre Dumas",
            text: "The theme of The Count of Monte Cristo is one of vengeance and forgiveness, power and powerlessness.  When Dantes is unfairly given a life-prison sentence by his enemies (Villefort, Danglars, and Fernand), he spends every waking moment planning his revenge.  As soon as Dantes miraculously escapes and returns to the world with riches, he sees it as a sign that God has opened for him the door of revenge.",
            img: "https://d3a7xcjwi1uszv.cloudfront.net/0553213504-M.jpg"

        }
    },
    dystopias: {

        book1: {
            like: false,
            ra: 'adsasd11',
            heading: "The Giver",
            writer: "by Lois Lowry",
            text: `The Giver is a 1993 American young adult dystopian novel written by Lois Lowry. It is set in a society which at first appears to be utopian but is revealed to be dystopian as the story progresses.In the 2000s it was 23rd, just two spots below "To Kill a Mockingbird." ... The most frequently cited reasons to challenge "The Giver" have been “violence” and claims that the book is “unsuited to [the] age group”— or in other words that it's too dark for children.`,
            img: "https://d3a7xcjwi1uszv.cloudfront.net/0006748287-M.jpg"

        },
        book2: {
            like: false,
            heading: "Redeeming Love",
            writer: "",
            text: "",
            img: "",
            ra: "asda"
        },
        book3: {
            like: false,
            heading: "The Handmaid's Tale",
            writer: "by Margaret Atwood",
            text: "The Handmaid's Tale may be set in a totalitarian dystopia, but it's completely science fiction. Almost every aspect of the book is steeped in religious and political history. ... Its real-life origins are also largely why the book remains so relevant today, more than 30 years after its publication.",
            img: "https://d3a7xcjwi1uszv.cloudfront.net/0099740915-M.jpg"

        },
        book4: {
            like: false,
            heading: "Uglies",
            writer: "by Scott Westerfeld",
            text: 'One major theme of the novel "Uglies" by Scott Westerfeld is beauty comes from within, and not the outer appearance. This is primarily developed throughout the main character Tally Youngblood. This theme is also established throughout conflict, plot, characterization, and setting.',
            img: "https://d3a7xcjwi1uszv.cloudfront.net/1416911049-M.jpg"

        }
    },
    thrillers: {

        book1: {
            like: false,
            heading: "The Martian",
            writer: "by Andy Weir",
            text: "Perhaps the greatest credit to The Martian is the fact that the film is deeply rooted in hard science fiction, without pandering to the audience. While Mark Watney monologues for the camera, it's not to brag or be smug, it's to explain his thought processes while working a problem that's key to his survival.",
            img: "https://d3a7xcjwi1uszv.cloudfront.net/0804139024-M.jpg "

        },
        book2: {
            like: false,
            heading: "Crooked Kingdom: A Sequel to Six of Crows",
            writer: "by Leigh Bardugo",
            text: "Kaz Brekker and his crew of deadly outcasts have just pulled off a heist so daring even they didn't think they'd survive. But instead of divvying up a fat reward, they're right back to fighting for their lives.Double-crossed and badly weakened, the crew is low on resources, allies, and hope. As powerful forces from around the world descend on Ketterdam to root out the secrets of the dangerous drug known as jurda parem, old rivals and new enemies emerge to challenge Kaz's cunning and test the team's fragile loyalties.",
            img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1456172607l/22299763._SY475_.jpg"

        },
        book3: {
            like: false,
            heading: "The Silent Patient",
            writer: "by Alex Michaelides",
            text: "THE SILENT PATIENT is immersive and hypnotic—the kind of confidently drawn suspense story that doesn't need big, flashy twists to keep you hooked… but that delivers an exceptional twist or two anyway. Believe the hype: THE SILENT PATIENT may well be the debut crime novel of the season.",
            img: "https://d3a7xcjwi1uszv.cloudfront.net/1250301696-M.jpg"

        },
        book4: {
            like: false,
            heading: "Lock Every Door: A Novel",
            writer: "by Riley Sager",
            text: "No visitors. No nights spent away from the apartment. No disturbing the other residents, all of whom are rich or famous or both. These are the only rules for Jules Larsen's new job as an apartment sitter at the Bartholomew, one of Manhattan's most high-profile and mysterious buildings. Recently heartbroken and just plain broke, Jules is taken in by the splendor of her surroundings and accepts the terms, ready to leave her past life behind.",
            img: "https://d3a7xcjwi1uszv.cloudfront.net/1524745146-M.jpg"

        }
    }
})

var localKey = localStorage.getItem('keyword')
$('.q').on('click', function () {
    window.location.href = 'ccc.html'

    var subject = $(this).text().trim();
    db.ref(`users/${localKey}`).update({

        subject: subject

    })
})
// window.location.href = 'ccc.html'

db.ref(`users/${localKey}/subject`).on('value', function (snapshot) {
    var topic = snapshot.val();
    var newword = topic.split(' ')[0];

    db.ref(`books/${newword.toLowerCase()}`).once('value', function (snapshot) {

        var x = Object.values(snapshot.val());
        console.log(x)
        for (let i of x) {
            var z = $(`<div class="card card3 ddd" style="width: 13rem">
        <img src="${i.img}" class="card-img-top" alt="..." style="height:200px">
        <div class="card-body">
            
            <p>${i.writer}</p>
            <h4 class="card-title">${i.heading}</h4>
            <p class="card-text">${i.text}</p>
            <a href="#" class="btn btn-success btnblog">Read More</a>
            <div class = "iconsdiv">
            <span class = "iconsb" data-value="Like"><i class="far fa-thumbs-up"></i></span>
            <span class = "iconsb" data-value="Dislike"><i class="far fa-thumbs-down"></i></span>
            <span class = "iconsb" data-value="Planned"><i class="far fa-bookmark"></i></span>
            </div>
        </div>
        </div>`)
            $('.kitab').append(z);

        }
        return
    })

})


$(document).on('click', '.iconsb', function () {

    var a = $(this).attr('data-value');
    if (a === 'Like') {
        $(this).css('color','green')

        db.ref('users/' + localKey + '/likes').push({

            div: $(this).parent().parent().parent().html()


        })
    }

    else if (a === 'Dislike'){
    $(this).css('color','red')

        db.ref('users/' + localKey + '/dislikes').push({

            div: $(this).parent().parent().parent().html()


        })
    }
    else {

        db.ref('users/' + localKey + '/focuses').push({

            div: $(this).parent().parent().parent().html()


        })

    }


})


db.ref('users/' + localKey + '/likes').on('value', function (snapshot) {
    var y = snapshot.val();
    if (y) {
        $('.r3in').html('');
        $('.r3in').attr('class', 'card card3 ddd newlike')
        $('.newlike').css('width', '100px !important')
        for (let i in y) {

            var likeddiv = y[i].div;
            // return
            $('.newlike').prepend(likeddiv);
        }
    }
})


$('.r2in a').on('click', function () {
    var branch = $(this).attr('data-value');
    $('.r3 p span').html('Books I liked')
    $('.newlike').html('')
    if(branch==='likes'){

        $('.r3 p span').html('Books I liked')
        $('.r3 i').attr('class', 'far fa-thumbs-up')
    
    
        }
        else if(branch==='dislikes'){
    
    
        $('.r3 p span').html('Books I Disliked')
        $('.r3 i').attr('class', 'far fa-thumbs-down')
        
        }
    
        else{
        $('.r3 p span').html('Want to Read')
        $('.r3 i').attr('class', 'far fa-bookmark')
        }
    
    db.ref('users/' + localKey + `/${branch}`).on('value', function (snapshot) {
        var y = snapshot.val();
        if (y) {
            // $('.r3in').html('');
            // $('.r3in').attr('class', 'card card3 ddd newlike')

            for (let i in y) {

                var likeddiv = y[i].div;
                // return
                $('.newlike').append(likeddiv);
            }
        }
        else {
            var z = `<img src="https://dg0lpj0xiisq5.cloudfront.net/assets/v1/shared/not-found-e6021697f049bf878bc74c09e05eeb1fbdcbd0822af1d763440f3cae57f58982.svg"
            alt="" draggable="false">
            <span>There is no liked Book in list, yet!</span>`
            $('.newlike').append

        }
    })

})