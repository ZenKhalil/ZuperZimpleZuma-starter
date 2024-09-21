// animations.js
import * as view from "./view.js";
import * as controller from "./controller.js";

export { animateNewBall, animateCannonBall, animateRemoveBalls };

// *********************************
// *         ANIMATIONS            *
// *********************************

function animateNewBall(model, newBall) {
    console.log("Animating new ball", newBall);
    view.updateDisplay(model);

    const visualBall = view.getVisualBallForModelNode(newBall);
    const onlyImg = visualBall.firstElementChild;

    const startRect = document.querySelector("#chain").getBoundingClientRect().right;
    const endRect = onlyImg.getBoundingClientRect().left;
    const distance = startRect - endRect;

    onlyImg.style.setProperty("--delta-x", `${distance}px`);
    onlyImg.classList.add("animate-add");

    onlyImg.addEventListener("animationend", function doneAnimateNewBall() {
        onlyImg.removeEventListener("animationend", doneAnimateNewBall);
        onlyImg.classList.remove("animate-add");
    });
}

function animateExpandSpaceForBall(visualBall) {
    visualBall.classList.add("animate-expand");

    visualBall.addEventListener("animationend", function doneExpanding() {
        visualBall.removeEventListener("animationend", doneExpanding);
        visualBall.classList.remove("animate-expand");
    });
}

function animateCannonBall(model, newBall) {
    view.updateDisplay(model);

    const visualBall = view.getVisualBallForModelNode(newBall);
    animateExpandSpaceForBall(visualBall);

    const visualCannonball = document.querySelector("#cannon .ball img");
    const cannonRect = visualCannonball.getBoundingClientRect();
    const ballImage = visualBall.querySelector("img");
    const ballRect = ballImage.getBoundingClientRect();

    const deltaX = cannonRect.left - ballRect.left;
    const deltaY = cannonRect.top - ballRect.top;

    ballImage.style.setProperty("--delta-x", `${deltaX}px`);
    ballImage.style.setProperty("--delta-y", `${deltaY}px`);
    ballImage.classList.add("animate-fromcannon");

    visualCannonball.classList.add("hide");

    ballImage.addEventListener("animationend", function doneMoving() {
        ballImage.removeEventListener("animationend", doneMoving);
        ballImage.classList.remove("animate-fromcannon");
        ballImage.style.removeProperty("--delta-x");
        ballImage.style.removeProperty("--delta-y");
        visualCannonball.classList.remove("hide");

        console.log("Done moving cannonball");
        controller.removeMatches(newBall);
    });
}

function animateRemoveBalls(model, balls) {
    console.log("balls:", balls);

    const lastBall = balls[balls.length - 1];
    const nextBall = model.getNextBall(lastBall);

    balls.forEach(ball => {
        const visualBall = view.getVisualBallForModelNode(ball);
        visualBall.classList.add("animate-implode");

        if (ball === lastBall) {
            visualBall.addEventListener("animationend", function () {
                view.updateDisplay(model);
                if (nextBall) {
                    controller.removeMatches(nextBall);
                }
                controller.removeBalls(balls);
            });
        }
    });
}
