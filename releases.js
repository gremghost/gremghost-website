//what i need to happen:g, Isn't it?
//enlarge image depending on whats been clicked
//"black out" the page (not really) to put focus only on whats been clicked
//show text and links for each release depending on whats clicked
//be able to then reset when outside element is clicked

const display = document.getElementsByClassName(".display");
const title = document.getElementById("title");
const description = document.getElementById("description");
const tracklist = document.getElementById("tracklist")
console.log("title var: " + title);

function test(element) {
    //used to hide all the elements on the page
    //there's also most likely a way easier way to do this
    //but it's more fun to curse out javascript for weeks lmao
    //also it didn't cross my mind until the work was already done 
    //and by that point why bother
    const releases = document.querySelectorAll('.imageRelease')
    console.log(releases);
    for (let i = 0; i < releases.length; i++) {
        releases[i].style.display = "none";
    }

    //strictly for being able to match what you've clicked with the objects
    var objectId = element.id;
    console.log(objectId);
    
    //ok hi these are all the "show these please" variables
    const image = new Image();
    const displayTitle = release_info[objectId]["title"];
    const displayCover = release_info[objectId]["cover"];
    const displayDesc = release_info[objectId]["description"];
    const displayTrack = release_info[objectId]["tracklist"];

    //now display everything in html
    image.src = displayCover;
    image.style.width = "700px";
    image.style.position = "absolute";
    image.style.top = "158px";
    image.style.left = "203px";
    document.body.appendChild(image);
    title.innerHTML = displayTitle;
    description.innerHTML = displayDesc;
    tracklist.innerHTML = "Tracks:<br>" + displayTrack;
}

//object list for all albums and other releases
const release_info = {
    "id1": {
        title: "<b>Shocking, Isn't it?</b>",
        cover: "images\\releases\\shockingalbumcover.jpg",
        description: "This is my very first album, made in 2017. I used to only use OpenMPT<br>before properly being able to use / understand FL Studio or any DAW in general.<br>My main goal was to make an album. I always wanted to but had never been able to. And it was a fun time for me. I was honestly struggling to get good at finishing the songs I came up with but this album and really the timeframe as a whole was when I finished my first song (Shock Confusion) and then was able to make enough to make this release.Some of the songs nowadays I'm not too proud of but some of these are still favorites of mine to listen to. It's also almost ten years old which is absolutely wild.",
        tracklist: "1. Ruins of Time<br>2. Worth It<br>3. Inevitable Fun<br>4. Lots of Bits<br>5. Shock Confusion<br>6. Life's Pathways<br>7. Translucive Worlds<br>8. Healing Powers",
        bandcamp: "https://gremghost.bandcamp.com/album/shocking-isnt-it-2",
    },
    "id2": {
        title: "There Is A Bottle Lodged In My Ass",
        cover: "images\\releases\\bottlealbumcover.jpg",
        description: "",
        tracklist: "1. The Fog Is Coming<br>2. Walmart in Ohio 2: The Frozen Aisle<br>3. The Hat Man Is Here (I Am Currently Overdosing On Benadryl)<br>4. There Is A Bottle Lodged In My Ass<br>5. How To Get Some Bitches (the complete guide)<br>6. Elevator Ride<br>7. Great News: Onion<br>8. Now Arriving At The Sixth Floor<br>9. What Were They Thinking<br>10. Bethesda Game Studios Took My Family Hostage After I Wouldn't Give Starfield A 10/10 On Metacritic/nBonus Track: The Hat Man's Funeral",
        youtube: "https://www.youtube.com/playlist?list=PLrsscNKgNwwzQ6zwnSFpeJPpbDE2xBpXY",
        bandcamp: "https://gremghost.bandcamp.com/album/there-is-a-bottle-lodged-in-my-ass",
    },
    "id3": {
        title: "Computerized Destruction",
        cover: "images\\releases\\computerizedsinglecover.jpg",
        description: "",
        youtube: "",
        bandcamp: "https://gremghost.bandcamp.com/track/computerized-destruction",
    },
    "id4": {
        title: "Haircut or Lobotomy? (ft. roach)",
        cover: "images\\releases\\haircutsinglecover.jpg",
        description: "",
        youtube: "",
        bandcamp: "https://gremghost.bandcamp.com/album/haircut-or-lobotomy",
    },
    "id5": {
        title: "I Have A Chronic Illness: My Fat Dumpy (Part 2)",
        cover: "images\\releases\\chronicsinglecover.jpg",
        description: "",
        youtube: "",
        bandcamp: "https://gremghost.bandcamp.com/album/i-have-a-chronic-illness-part-2",
    },
    "id7": {
        title: "Get Out Of My House",
        cover: "images\\releases\\getoutsinglecoverfinal.png",
        description: "",
        youtube: "",
        bandcamp: "https://gremghost.bandcamp.com/album/get-out-of-my-house",
    },
    "id6": {
        title: "grog",
        cover: "images\\releases\\grogalbumcover.png",
        description: "",
        tracklist: "",
        youtube: "",
        bandcamp: "https://gremghost.bandcamp.com/album/grog",
    },
    "id8": {
        title: "I Got A Subscriber On YouTube",
        cover: "images\\releases\\subscriber1albumcover.png",
        description: "",
        youtube: "",
        bandcamp: "https://gremghost.bandcamp.com/track/i-got-a-subscriber-on-youtube-2",
    },                           
}