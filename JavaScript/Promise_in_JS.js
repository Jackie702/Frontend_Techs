/*
 * Example 1
 */
let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
})

p.then((message) => {
    console.log("This is in then:" + message);
}).catch((message) => {
    console.log("This is in catch:" + message);
})

/*
 * Example 2, not using Promise, vanilla callback
 */
const userLeft = false;
const userWatchingCatMeme = false;

function watchTheVideo(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        });
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: "User watching cat meme",
            message: "StudyVideo < Cat"
        });
    } else {
        callback("Thumbs up and sub");
    }
}

//each argument is an arrow function
watchTheVideo((message) => {    
    console.log("Success: " + message);
}, (error) => {
    console.log(error.name + ' ' + error.message);
})

/**
 * Example 3, return Promise
 */
const userLeft = false;
const userWatchingCatMeme = false;

function watchTheVideoPromise(){
    return new Promise((resolve, reject) => {
        if(userLeft){
            reject({
                name: "User left",
                message: ":("
            });
        } else if(userWatchingCatMeme){
            reject({
                name: "User watching cat meme",
                message: "Study video < cat"
            });
        } else {
            resolve("Thumbs up and subscribe");
        }
    })
}

watchTheVideoPromise().then((message) => {
    console.log("Success: " + message);
}).catch((error) => {
    console.log(error.name + ' ' + error.message);
})

/**
 * Example 4, multiple Promises
 */
const recordVideoOne = new Promise((resolve, reject) => {
    resolve("Video 1 recorded");
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve("Video 2 recorded");
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve("Video 3 recorded");
})

//Get all Promise returns
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
})

//Only get the fastest Promise return
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message)
})