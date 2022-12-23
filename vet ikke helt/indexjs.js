

window.addEventListener("gamepadconnected", (e) => {
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
        e.gamepad.index, e.gamepad.id,
        e.gamepad.buttons.length, e.gamepad.axes.length);
    gameLoop();
});


function gameLoop() {
    const gp = navigator.getGamepads()[0];
  
    if (gp.buttons[9].value > 0 || gp.buttons[0].pressed) {
        console.log("eyy")
    } else if (gp.buttons[1].value > 0 || gp.buttons[1].pressed) {
        console.log("eyy")
    } else if (gp.buttons[2].value > 0 || gp.buttons[2].pressed) {
        console.log("eyy")
    } else if (gp.buttons[3].value > 0 || gp.buttons[3].pressed) {
        console.log("eyy")
    }
    requestAnimationFrame(gameLoop);
  };