//what i need to happen:
//enlarge image depending on whats been clicked
//"black out" the page (not really) to put focus only on whats been clicked
//show text and links for each release depending on whats clicked
//be able to then reset when outside element is clicked

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

    var objectId = element.id;
    console.log(objectId);
    
    const displayDetails = document.createElement("div");
    const displayTitle = release_info[objectId]["title"];
    const displayCover = release_info[objectId]["cover"];
    const displayDesc = release_info[objectId]["description"];
    const displayTrack = release_info[objectId]["tracklist"];

    console.log("displayTitle: " + displayTitle);
    displayDetails.innerHTML = displayTitle;  

    displayDetails.style.width = "90vw";
    displayDetails.style.height = "90vh";

    displayDetails.style.color = "white";
    displayDetails.style.fontSize = "large";


    document.body.appendChild(displayDetails);
    console.log(release_info[objectId]["title"]);
}

//object list for all albums and other releases
const release_info = {
    "id1": {
        title: "Shocking, Isn't it?",
        cover: "images\releases\shockingalbumcover.jpg",
        description: "",
        tracklist: "1. Ruins of Time\n2. Worth It\n3. Inevitable Fun\n4. Lots of Bits\n5.Shock Confusion\n6. Life's Pathways\n7. Translucive Worlds\n8. Healing Powers",
        bandcamp: "https://gremghost.bandcamp.com/album/shocking-isnt-it-2",
    },
    "id2": {
        title: "There Is A Bottle Lodged In My Ass",
        cover: "images\releases\bottlealbumcover.jpg",
        description: "",
        tracklist: "1. The Fog Is Coming\n2. Walmart in Ohio 2: The Frozen Aisle\n3. The Hat Man Is Here (I Am Currently Overdosing On Benadryl)\n4. There Is A Bottle Lodged In My Ass\n5. How To Get Some Bitches (the complete guide)\n6. Elevator Ride\n7. Great News: Onion\n8. Now Arriving At The Sixth Floor\n9. What Were They Thinking\n10. Bethesda Game Studios Took My Family Hostage After I Wouldn't Give Starfield A 10/10 On Metacritic/nBonus Track: The Hat Man's Funeral",
        youtube: "https://www.youtube.com/playlist?list=PLrsscNKgNwwzQ6zwnSFpeJPpbDE2xBpXY",
        bandcamp: "https://gremghost.bandcamp.com/album/there-is-a-bottle-lodged-in-my-ass",
    },
    "id3": {
        title: "Computerized Destruction",
        cover: "images\releases\computerizedsinglecover.jpg",
        description: "",
        youtube: "",
        bandcamp: "https://gremghost.bandcamp.com/track/computerized-destruction",
    },
    "id4": {
        title: "Haircut or Lobotomy? (ft. roach)",
        cover: "images\releases\haircutsinglecover.jpg",
        description: "",
        youtube: "",
        bandcamp: "https://gremghost.bandcamp.com/album/haircut-or-lobotomy",
    },
    "id5": {
        title: "I Have A Chronic Illness: My Fat Dumpy (Part 2)",
        cover: "images\releases\chronicsinglecover.jpg",
        description: "",
        youtube: "",
        bandcamp: "https://gremghost.bandcamp.com/album/i-have-a-chronic-illness-part-2",
    },
    "id7": {
        title: "Get Out Of My House",
        cover: "images\releases\getoutsinglecoverfinal.png",
        description: "",
        youtube: "",
        bandcamp: "https://gremghost.bandcamp.com/album/get-out-of-my-house",
    },
    "id6": {
        title: "grog",
        cover: "images\releases\grogalbumcover.png",
        description: "",
        tracklist: "",
        youtube: "",
        bandcamp: "https://gremghost.bandcamp.com/album/grog",
    },
    "id8": {
        title: "I Got A Subscriber On YouTube",
        cover: "images\releases\subscriber1albumcover.png",
        description: "",
        youtube: "",
        bandcamp: "https://gremghost.bandcamp.com/track/i-got-a-subscriber-on-youtube-2",
    },                           
}