//A list of all the albums
//Have to return the 22 character hex code from the share link
let currentKey = 0;
export const albums = [
    //{albumCode: "", key: currentKey++},
    {albumCode: "2NBVxjZcbH5H1N1Ab2ExDH", key: currentKey++},
    {albumCode: "5vkqYmiPBYLaalcmjujWxK", key: currentKey++},
    {albumCode: "7rSZXXHHvIhF4yUFdaOCy9", key: currentKey++},
    {albumCode: "2widuo17g5CEC66IbzveRu", key: currentKey++},
    {albumCode: "2QLp07RO6anZHmtcKTEvSC", key: currentKey++},
    {albumCode: "19bQiwEKhXUBJWY6oV3KZk", key: currentKey++},
    {albumCode: "6X1x82kppWZmDzlXXK3y3q", key: currentKey++},
    {albumCode: "4RzYS74QxvpqTDVwKbhuSg", key: currentKey++},
    {albumCode: "6kf46HbnYCZzP6rjvQHYzg", key: currentKey++},
    {albumCode: "0YvYmLBFFwYxgI4U9KKgUm", key: currentKey++},
    {albumCode: "0bUTHlWbkSQysoM3VsWldT", key: currentKey++},
    {albumCode: "4eLPsYPBmXABThSJ821sqY", key: currentKey++},
    {albumCode: "5ll74bqtkcXlKE7wwkMq4g", key: currentKey++},
    {albumCode: "35s58BRTGAEWztPo9WqCIs", key: currentKey++},
    {albumCode: "79dL7FLiJFOO0EoehUHQBv", key: currentKey++},
    {albumCode: "4VFG1DOuTeDMBjBLZT7hCK", key: currentKey++},
    {albumCode: "3xybjP7r2VsWzwvDQipdM0", key: currentKey++},
    {albumCode: "5zi7WsKlIiUXv09tbGLKsE", key: currentKey++},
    {albumCode: "3Wv4X8OA65pGpFzBkuUgAh", key: currentKey++},
    {albumCode: "1l9d1Zj9Iv2eOcdObVhdMy", key: currentKey++},
    {albumCode: "74gSdSHe71q7urGWMMn3qB", key: currentKey++},
    {albumCode: "12rfrkN4eZOpmJUmVzE84M", key: currentKey++},
    {albumCode: "5CNckxfLf4TCoMOoxgAU8l", key: currentKey++},
    {albumCode: "2S8AWAM0nxyFy66YnUfIs3", key: currentKey++},
    {albumCode: "4kkVGtCqE2NiAKosri9Rnd", key: currentKey++},
    {albumCode: "6rsQnwaoJHxXJRCDBPkBRw", key: currentKey++},   
    {albumCode: "7xV2TzoaVc0ycW7fwBwAml", key: currentKey++},
    {albumCode: "69g3CtOVg98TPOwqmI2K7Q", key: currentKey++},
    {albumCode: "2c7gFThUYyo2t6ogAgIYNw", key: currentKey++},
    {albumCode: "07w0rG5TETcyihsEIZR3qG", key: currentKey++},
    {albumCode: "7eed9MBclFPjjjvotfR2e9", key: currentKey++},
    {albumCode: "4yP0hdKOZPNshxUOjY0cZj", key: currentKey++},
    {albumCode: "7dAm8ShwJLFm9SaJ6Yc58O", key: currentKey++},
    {albumCode: "7viNUmZZ8ztn2UB4XB3jIL", key: currentKey++},
    {albumCode: "31qVWUdRrlb8thMvts0yYL", key: currentKey++},
    {albumCode: "5dOpbgAmJeyoakKQ0QLWkR", key: currentKey++},
    {albumCode: "1xpGyKyV26uPstk1Elgp9Q", key: currentKey++},
    {albumCode: "7H814Cg8HV0qpoMheYbhNn", key: currentKey++},
    {albumCode: "4EK8gtQfdVsmDTji7gBFlz", key: currentKey++},
    {albumCode: "4Carzsnpd6yvuHZ49I0oz8", key: currentKey++},
    {albumCode: "3euz4vS7ezKGnNSwgyvKcd", key: currentKey++},
    {albumCode: "392p3shh2jkxUxY2VHvlH8", key: currentKey++},
    {albumCode: "0ndGMh4twJNzPpr5XtHTR2", key: currentKey++},
    {albumCode: "78bpIziExqiI9qztvNFlQu", key: currentKey++},
    {albumCode: "0vb1g018puu47StlIi9wxC", key: currentKey++},
    {albumCode: "7n8NJkGKAl2np1bXiRn0CY", key: currentKey++},
    {albumCode: "0Y7qkJVZ06tS2GUCDptzyW", key: currentKey++},
    {albumCode: "4uG8q3GPuWHQlRbswMIRS6", key: currentKey++},
    {albumCode: "0KtCYuGdVD2uBE6uTYQIwu", key: currentKey++},
    {albumCode: "50o7kf2wLwVmOTVYJOTplm", key: currentKey++},
    {albumCode: "1bt6q2SruMsBtcerNVtpZB", key: currentKey++},
    {albumCode: "4LH4d3cOWNNsVw41Gqt2kv", key: currentKey++},
    {albumCode: "6GphKx2QAPRoVGWE9D7ou8", key: currentKey++},
    {albumCode: "58MQ0PLijVHePUonQlK76Y", key: currentKey++},
    {albumCode: "6dVIqQ8qmQ5GBnJ9shOYGE", key: currentKey++},
    {albumCode: "35UJLpClj5EDrhpNIi4DFg", key: currentKey++},
    {albumCode: "5XpEKORZ4y6OrCZSKsi46A", key: currentKey++},
    {albumCode: "1T7A6Dt7KktX7pOw4I4Jzj", key: currentKey++},
    {albumCode: "6fUVptFdeOgcqDvCZzM2kC", key: currentKey++},
    {albumCode: "42cH7mrkfljkqkxA2Ip9Xq", key: currentKey++},
    {albumCode: "5z090LQztiqh13wYspQvKQ", key: currentKey++},
    {albumCode: "3uFZf8rykoHo7XMIQVYW6r", key: currentKey++},
    {albumCode: "2noRn2Aes5aoNVsU6iWThc", key: currentKey++},
    {albumCode: "6D9urpsOWWKtYvF6PaorGE", key: currentKey++},
    {albumCode: "3yx8gEFlojRtt2WBhmxwfg", key: currentKey++},
    {albumCode: "20r762YmB5HeofjMCiPMLv", key: currentKey++},
    {albumCode: "4PWBTB6NYSKQwfo79I3prg", key: currentKey++},
    {albumCode: "4v3LUnHL01HzJC6Jol6FCv", key: currentKey++},
    {albumCode: "0bCAjiUamIFqKJsekOYuRw", key: currentKey++},
    {albumCode: "0ETFjACtuP2ADo6LFhL6HN", key: currentKey++},
    {albumCode: "6QaVfG1pHYl1z15ZxkvVDW", key: currentKey++},
    {albumCode: "7f6xPqyaolTiziKf5R5Z0c", key: currentKey++},
    {albumCode: "2nkto6YNI4rUYTLqEwWJ3o", key: currentKey++},
    {albumCode: "3PRoXYsngSwjEQWR5PsHWR", key: currentKey++},
    {albumCode: "0PHMNbcgHfzSUALlfk7wGg", key: currentKey++},
    {albumCode: "3Ks0eeH0GWpY4AU20D5HPD", key: currentKey++},
    {albumCode: "3IhDL1HDvlujs6ZcIfL9gE", key: currentKey++},
    {albumCode: "20ku6CzcC5hFmNxoCaOzzJ", key: currentKey++},
    {albumCode: "2Y9IRtehByVkegoD7TcLfi", key: currentKey++},
    {albumCode: "03gwRG5IvkStFnjPmgjElw", key: currentKey++},
    {albumCode: "6s84u2TUpR3wdUv4NgKA2j", key: currentKey++},
    {albumCode: "30ly6F6Xl0TKmyBCU50Khv", key: currentKey++},
    {albumCode: "1FZKIm3JVDCxTchXDo5jOV", key: currentKey++},
    {albumCode: "5r36AJ6VOJtp00oxSkBZ5h", key: currentKey++},
    {albumCode: "14eK347GdWO4mBBx78tsut", key: currentKey++},
    {albumCode: "2HaqChIDc5go3qxVunBDK0", key: currentKey++},
    {albumCode: "6r7LZXAVueS5DqdrvXJJK7", key: currentKey++},
    {albumCode: "6FKP2O0oOvZlDkF0gyTjiJ", key: currentKey++},
    {albumCode: "2guirTSEqLizK7j9i1MTTZ", key: currentKey++},
    {albumCode: "5L6fAzbz2x5oF8l0qluSKm", key: currentKey++},
    {albumCode: "3usnShwygMXVZB4IV5dwnU", key: currentKey++},
    {albumCode: "7a35UzxXYuKQGMGImyB0Un", key: currentKey++},
    {albumCode: "1BubKJqf6Uc4fNae5kLJJ7", key: currentKey++},
    {albumCode: "2yI4m5Yu2tl8v0It5P9WVz", key: currentKey++},
    {albumCode: "3sGENYCDR3UaIfFwWMJWrY", key: currentKey++},
    {albumCode: "5Zxv8bCtxjz11jjypNdkEa", key: currentKey++},
    {albumCode: "1Sur33x6g7tvdd9GQnHhhu", key: currentKey++},
    {albumCode: "4Gh6pRaXqXTtJx4plAJbBw", key: currentKey++},
    {albumCode: "7ycBtnsMtyVbbwTfJwRjSP", key: currentKey++},
    {albumCode: "4GNIhgEGXzWGAefgN5qjdU", key: currentKey++},
    {albumCode: "2xg7iIKoSqaDNpDbJnyCjY", key: currentKey++},
    {albumCode: "57ystaP7WpAOxvCxKFxByS", key: currentKey++},
    {albumCode: "5EyIDBAqhnlkAHqvPRwdbX", key: currentKey++},
    {albumCode: "1J8QW9qsMLx3staWaHpQmU", key: currentKey++},
    {albumCode: "7kjLKy9JLbwM9F7eDQEnd2", key: currentKey++},
    {albumCode: "1CvVSn2MtKDBR6aWMkNkem", key: currentKey++},
    {albumCode: "6uSnHSIBGKUiW1uKQLYZ7w", key: currentKey++},
    {albumCode: "4TJUrdwbeKC9qcouPlBuLe", key: currentKey++},
    {albumCode: "247KCXJJqEGxii7kfI4NZ2", key: currentKey++},
    {albumCode: "3mH6qwIy9crq0I9YQbOuDf", key: currentKey++},
    {albumCode: "0QnWm07An8WyO3eupjBDoP", key: currentKey++},
    {albumCode: "0P3oVJBFOv3TDXlYRhGL7s", key: currentKey++},
    {albumCode: "51B7LbLWgYLKBVSpkan8Z7", key: currentKey++},
    {albumCode: "2nLOHgzXzwFEpl62zAgCEC", key: currentKey++},
    {albumCode: "3kEtdS2pH6hKcMU9Wioob1", key: currentKey++},
    {albumCode: "0zXeZw0oFC2Db99RqlfHur", key: currentKey++}, 
    {albumCode: "2v6ANhWhZBUKkg6pJJBs3B", key: currentKey++},
    {albumCode: "4pG3bKkbmReDt5QTDn3JDz", key: currentKey++},
    {albumCode: "12n11cgnpjXKLeqrnIERoS", key: currentKey++},

    //Chat GPT Generated codes:
    //     { albumCode: "0530hyl3GtZKWPebWVMZkK", key: currentKey++ }, // Arcade Fire - Funeral
    // { albumCode: "3ZJJdnvxztzpOvwvzUzUxC", key: currentKey++ }, // Rufus & Chaka Khan - Ask Rufus
    // { albumCode: "6LLZjIp5G4LZFS2lNXHyUw", key: currentKey++ }, // Suicide - Suicide
    // { albumCode: "6WLmBbgb0rhWAAqgLS82hC", key: currentKey++ }, // Shakira - Dónde Están los Ladrones?
    // { albumCode: "1iVf41qWHZsAk9DwY43WnV", key: currentKey++ }, // Marvin Gaye - Here, My Dear
    // { albumCode: "0CoNLgOwcZGBUSwd9fAZuy", key: currentKey++ }, // The Ronettes - Presenting the Fabulous Ronettes Featuring Veronica
    // { albumCode: "6mC2t5jHnWv6m2mYq2t3vZ", key: currentKey++ }, // Phil Spector and Various Artists - Back to Mono (1958-1969)
    // { albumCode: "4cVZf2XJ2n9X8m6m3J9s7A", key: currentKey++ }, // The Stooges - The Stooges
    // { albumCode: "3b6B7Qe7v5G8Q6m9Y2k8hF", key: currentKey++ }, // Black Flag - Damaged
    // { albumCode: "3yY2j6b8v9Qx5m2L7N4s1C", key: currentKey++ }, // John Mayer - Continuum
    // { albumCode: "5V8n9Q2p7L3m6X1b4C0aDz", key: currentKey++ }, // Richard and Linda Thompson - I Want to See the Bright Lights Tonight
    // { albumCode: "2KkM7a9D3Qx6V5n8B1cR4P", key: currentKey++ }, // Lady Gaga - Born This Way
    // { albumCode: "4oW8r7P2m5N6Q1c9L3dK0H", key: currentKey++ }, // Muddy Waters - The Anthology
    // { albumCode: "3p7X9m2Q5v8K1c6L4dN0Bz", key: currentKey++ }, // The Pharcyde - Bizarre Ride II the Pharcyde
    // { albumCode: "6r4T9m2P7Q1c5V8N3dK0Hx", key: currentKey++ }, // Belle and Sebastian - If You're Feeling Sinister
    // { albumCode: "1w8C5m7Q3V9p2L6N4dK0Rx", key: currentKey++ }, // Miranda Lambert - The Weight of These Wings
    // {albumCode: "3zR3d2c6JxKQ1bJtFQ5Q2B", key: "currentKey++"}, // The Rolling Stones - Some Girls
    //   {albumCode: "6K3uX0w9g1dY0w7n0nQ9qP", key: "currentKey++"}, // Maxwell - BLACKsummers'night
    //   {albumCode: "5bR1a3qWQx8yT9yQ5Qv2kH", key: "currentKey++"}, // Black Uhuru - Red
    //   {albumCode: "3Jk8b8d9vJQwY8t6f3n2Lm", key: "currentKey++"}, // King Sunny Adé - The Best of the Classic Years
    //   {albumCode: "1d3QxYpY2w0pV9a6c8n4Rt", key: "currentKey++"}, // The Isley Brothers - 3 + 3
    //   {albumCode: "5H6J7K8L9M0N1P2Q3R4S5T", key: "currentKey++"}, // Laura Nyro - Eli and the 13th Confession
    //   {albumCode: "4m8q2rT9vW1xY3zA5bC7dE", key: "currentKey++"}, // The Flying Burrito Brothers - The Gilded Palace of Sin
    //   {albumCode: "1E5oYvR7p4bX9nQ3sL6dK8", key: "currentKey++"}, // Bon Iver - For Emma, Forever Ago
    //   {albumCode: "2kJ6vM8xP3qR9sT1wY4zA7", key: "currentKey++"}, // Lorde - Melodrama
    //   {albumCode: "1L0y2p3q4r5s6t7u8v9wX0", key: "currentKey++"}, // Kid Cudi - Man on the Moon: The End of Day
    //    {albumCode: "1JGfS7h1xQ8QWnY9V6cP4D", key: "currentKey++"}, // Yes - Close to the Edge
    //   {albumCode: "7wY0dY7XwZ6z9Q9X7J2v8M", key: "currentKey++"}, // Fiona Apple - Extraordinary Machine
    //   {albumCode: "5jgI8Eminx9MmTKm5X9l5z", key: "currentKey++"}, // David Bowie - Scary Monsters
    //   {albumCode: "25t2J7S7Y8Q7v3Q9x6mP1L", key: "currentKey++"}, // The Weeknd - Beauty Behind the Madness
    //   {albumCode: "6sZfZ8Y8x5p4K7Q1n3mL9V", key: "currentKey++"}, // Britney Spears - Blackout
    //   {albumCode: "4xkZ5n8Q2Y7v1L9m3P6R0T", key: "currentKey++"}, // Loretta Lynn - Coal Miner's Daughter
    //   {albumCode: "2q7L8n9Y4v5X6m1P3R0K8T", key: "currentKey++"}, // James Brown - Sex Machine
    //   {albumCode: "1H4Z7K9Q3X8m5V2L6P0R1T", key: "currentKey++"}, // Blur - Parklife
    //   {albumCode: "0bUTHlWbkSQysoM3mX9wW", key: "currentKey++"}, // Gorillaz - Demon Days
    //   {albumCode: "3a3t8K4Q9X7v5L2m1P6R0Y", key: "currentKey++"}, // 2Pac - All Eyez on Me
    //   { albumCode: "4eU0umEy7D37LTfRctnrku", key: "currentKey++" }, // 403 Ghostface Killah - Supreme Clientele
    //   { albumCode: "1L4HE00En7eNK74voVZums", key: "currentKey++" }, // 400 The Go-Go's - Beauty And The Beat
    //   { albumCode: "3WjlA46lsd12TSYrrpSZU4", key: "currentKey++" }, // 399 Brian Wilson - Smile
    //   { albumCode: "190Tx9jPHndq0qUlq79BJJ", key: "currentKey++" }, // 398 The Raincoats - The Raincoats
    //   { albumCode: "0S0KGZnfBGSIssfF54WSJh", key: "currentKey++" }, // 397 Billie Eilish - When We All Fall Asleep, Where Do We Go?
    //   { albumCode: "5pNzs0yJU8BU40iWoSszG1", key: "currentKey++" }, // 396 Todd Rundgren - Something/Anything?
    //   { albumCode: "5fy0X0JmZRZnVa2UEicIOl", key: "currentKey++" }, // 393 Taylor Swift - 1989
    //   { albumCode: "2UCdfQEDgzWtbzpaD4Mo47", key: "currentKey++" },  // 392 Ike & Tina Turner - Proud Mary: The Best Of Ike & Tina Turner
    //     { albumCode: "33viW1sFm3sCCmzs7FZ9MI", key: "currentKey++" }, // 391: Kelis - Kaleidoscope
    //   { albumCode: "2fv7PQkt5BZqwGx21wiSc1", key: "currentKey++" }, // 390: Pixies - Surfer Rosa
    //   { albumCode: "6ek7Y68IlB6CoFkkc2gEQb", key: "currentKey++" }, // 389: Mariah Carey - The Emancipation of Mimi
    //   { albumCode: "5vkqYmiPBYLaalcmjujWxK", key: "currentKey++" }, // 387: Radiohead - In Rainbows
    //   { albumCode: "3WBB77ZEYHvQiwNDZg5y15", key: "currentKey++" }, // 386: J Dilla - Donuts
    //   { albumCode: "0MkJivXLu87uvEwVZxARQs", key: "currentKey++" }, // 384: The Kinks - The Kinks Are the Village Green Preservation Society
    //   { albumCode: "0rxKf57PZvWEoU8v3m5W2q", key: "currentKey++" },  // 382: Tame Impala - Currents
    //   { albumCode: "19tdWmYzgg7W8Yh0n3zG5S", key: "currentKey++" }, // 366: Aerosmith - Rocks
    //   { albumCode: "6TzU11bbiLxGQqA7e6tY6K", key: "currentKey++" }, // 365: Madvillain - Madvillainy
    //   { albumCode: "5TSWfFf8a2o0W2Wz9p6m8J", key: "currentKey++" }, // 364: Talking Heads - More Songs About Buildings and Food
    //   { albumCode: "5f9sY4r0zqW0b3p2K7x1Qa", key: "currentKey++" }, // 363: Parliament - Mothership Connection
    //   { albumCode: "3jR2m9sQ9mW2x1J6F8d4Kp", key: "currentKey++" }, // 362: Luther Vandross - Never Too Much
    //   { albumCode: "0FZK97MXMm5mUQ8MTq5bTQ", key: "currentKey++" }, // 361: My Chemical Romance - The Black Parade
    //   { albumCode: "6Dq6m8Y2Gx9rV5sK0p3JtL", key: "currentKey++" }, // 360: Funkadelic - One Nation Under a Groove
    //   { albumCode: "3lZ7Q2mV6Y8rT5xN9p4KcD", key: "currentKey++" }, // 359: Big Star - Radio City
    //   { albumCode: "3e9HZxeyfWwjeyPAMmWSSQ", key: "currentKey++" }, // 358: Olivia Rodrigo - SOUR
    //   { albumCode: "6VDd2sY5aQJmX8zR3pL0Nc", key: "currentKey++" }, // 357: Tom Waits - Rain Dogs
    //   { albumCode: "2m5f6D8xW7qT9pL1V3zK0A", key: "currentKey++" }, // 356: Dr. John - Gris-Gris
    //   { albumCode: "2p1UQKz7K9s4vX6mN3cT8L", key: "currentKey++" }, // 355: Black Sabbath - Black Sabbath
    //   { albumCode: "5bJ9qK4xL8m2V7nP3rT0Ds", key: "currentKey++" }, // 354: X-Ray Spex - Germfree Adolescents
    //   { albumCode: "3x4Q5nY7mL9pT2vK8dR1Cs", key: "currentKey++" }, // 353: The Cars - The Cars
    //   { albumCode: "3vR3mZ8qW2xK6pL9T1sD4F", key: "currentKey++" }, // 352: Eminem - The Slim Shady LP
    //   { albumCode: "07w0rG5T6k8j3Q1m9L2pXs", key: "currentKey++" }, // 351: SZA - SOS
    //   { albumCode: "5jgI8Emin7gaQZ4fV6Yz3K", key: "currentKey++" }, // 350: Stevie Wonder - Music of My Mind
    //   { albumCode: "6sJ7Q2vP9mL4xT1K8dR3Nc", key: "currentKey++" }, // 349: MC5 - Kick Out the Jams
    //   { albumCode: "4s5Q6mT8xV2pL9K1dR3NcB", key: "currentKey++" }, // 348: Gillian Welch - Time (The Revelator)
    //   { albumCode: "1Q7rT9xK3mV5pL8dC2sN4A", key: "currentKey++" },  // 347: GZA - Liquid Swords
    //   { albumCode: "3MYdhuC5Uj42L3JbVc7Had", key: "currentKey++" }, // 299: B.B. King - Live at the Regal
    //   { albumCode: "7ihweYjA1ck66NTB4bujGl", key: "currentKey++" }, // 298: Tom Petty - Full Moon Fever
    //   { albumCode: "3k9I6Ns1RDwH1RMyCbLSkH", key: "currentKey++" }, // 297: Peter Gabriel - So
    //   { albumCode: "4m2880jivSbbyEGAKfITCa", key: "currentKey++" }, // 295: Daft Punk - Random Access Memories
    //   { albumCode: "57F44c0MTziVzHPEuJtH9A", key: "currentKey++" }, // 293: The Breeders - Last Splash
    //   { albumCode: "0dIZu3PnqPOxyp4k41N9Ep", key: "currentKey++" },  // 291: Destiny's Child - The Writing's On The Wall
    //     { albumCode: "7ycBtnsMtyVbbwTfJwRjSP", key: "currentKey++" }, // 269: Kanye West - Yeezus
    //   { albumCode: "1A2GTWGtFfWp7KSQTwWOyo", key: "currentKey++" }, // 268: Randy Newman - Sail Away
    //   { albumCode: "5S0A0K0mXq3H0lK1mX9dYF", key: "currentKey++" }, // 267: Minutemen - Double Nickels on the Dime
    //   { albumCode: "0PTQnMZcfID3e2oH4c9OZ6", key: "currentKey++" }, // 266: The Beatles - Help!
    //   { albumCode: "6L6n9YQ4xv7H5kM3p8R2dC", key: "currentKey++" }, // 265: Pavement - Wowee Zowee
    //   { albumCode: "0bCAjiUamIFqKJsekOYuRw", key: "currentKey++" }, // 264: Pink Floyd - Wish You Were Here
    //   { albumCode: "6wCttLq0ADzkPzjYV7H0dU", key: "currentKey++" }, // 263: The Beatles - A Hard Day's Night
    //   { albumCode: "0RkXJQe5bW7vK2mT9pL4Ds", key: "currentKey++" }, // 262: New Order - Power, Corruption & Lies
    //   { albumCode: "4s9e9L5tX6wQ7rP8nM2dK", key: "currentKey++" }, // 261: Beastie Boys - Check Your Head
    //   { albumCode: "5Z9m8Q4vR7tK2pL1dN3Xs", key: "currentKey++" }, // 260: The Slits - Cut
    //   { albumCode: "4v4H2R7mL8qT1xP5nK3Ds", key: "currentKey++" }, // 259: Janis Joplin - Pearl
    //   { albumCode: "6m4f8xQ2T9pL3vK1dR7Ns", key: "currentKey++" }, // 258: Joni Mitchell - The Hissing of Summer Lawns
    //   { albumCode: "1k6Xw7R2pQ9mT4vL3nD8Cs", key: "currentKey++" }, // 257: Dolly Parton - Coat of Many Colors
    //   { albumCode: "2f9Qm7X4vL1T8pK3dR6Ns", key: "currentKey++" }, // 256: Tracy Chapman - Tracy Chapman
    //   { albumCode: "6Y9L0aJ8Q3pV5mK2dR7Ts", key: "currentKey++" }, // 255: Bob Dylan - The Freewheelin' Bob Dylan
    //   { albumCode: "1oH2z8mK6Q4pV9T3dR7Ls", key: "currentKey++" }, // 254: Herbie Hancock - Head Hunters
    //   { albumCode: "4W7Y0mQ9T3pL2vK6dR8Ns", key: "currentKey++" }, // 253: Pink Floyd - The Piper at the Gates of Dawn
    //   { albumCode: "2Z5Q8mK1T7pV3dR9Ls4Nx", key: "currentKey++" }, // 252: Devo - Q: Are We Not Men? A: We Are Devo!
    //   { albumCode: "6R7mQ2T9pL3vK1dN8Xs4", key: "currentKey++" }, // 251: Elton John - Honky Château
    //   { albumCode: "4k8Q1mT7pL3vR9dN2Xs5", key: "currentKey++" }, // 250: Buzzcocks - Singles Going Steady
    //   { albumCode: "5F5D6W7Q8T9P0L1K2M3N4", key: "currentKey++" }, // 249: Whitney Houston - Whitney Houston
    //   { albumCode: "1L9ZQ7T5pK3vR8dN2Xs4M", key: "currentKey++" }, // 248: Green Day - American Idiot
    //   { albumCode: "4X8W0Y9Q2T7pL3vK5dR1N", key: "currentKey++" }, // 247: Sade - Love Deluxe
]
