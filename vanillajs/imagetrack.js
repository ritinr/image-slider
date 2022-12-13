const track = document.getElementById("image-track");

const handleOnDown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercent = track.dataset.percentage;
}

const handleOnMove = e => {
    if (track.dataset.mouseDownAt==="0") return;
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX, maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100;
    let nextPercentage = parseFloat(track.dataset.prevPercent) + percentage;
    nextPercentage = Math.min(nextPercentage,0)
    nextPercentage = Math.max(nextPercentage,-100)
    track.dataset.percentage = nextPercentage;
    track.animate({transform: `translate(${nextPercentage}%, -50%)`}, {duration:1200, fill: "forwards"});
    for (const image of track.getElementsByClassName("image")){
        image.animate(
        {objectPosition: `${nextPercentage + 100}% center`},
        {duration: 1200, fill:"forwards"}
        );
    }

}


window.onmousedown = e => handleOnDown(e);
window.onmouseup = e => handleOnUp(e);
window.onmousemove = e => handleOnMove(e);