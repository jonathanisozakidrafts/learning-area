const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

const alice1Promise = alice1.animate(aliceTumbling, aliceTiming).finished;


// This approach uses a chain of promises.
/* alice1Promise.then(function(response) {

    return alice2.animate(aliceTumbling, aliceTiming).finished;

}).then(function(response) {

    return alice3.animate(aliceTumbling, aliceTiming).finished;

}); */

async function animateAlices() {

    const result1 = await alice1Promise;
    const result2 = await alice2.animate(aliceTumbling, aliceTiming).finished;
    const result3 = await alice3.animate(aliceTumbling, aliceTiming).finished;;

}

animateAlices();