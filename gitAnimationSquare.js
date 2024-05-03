function AnimationSquare() {
    let gw = GWindow(GWINDOW_WIDTH, GWINDOW_HEIGHT);
    let dx = (gw.getWidth() - SQUARE_SIZE) / N_STEPS;
    let dy = (gw.getHeight() - SQUARE_SIZE) / N_STEPS;
    let square = GRect (0, 0, SQUARE_SIZE, SQUARE_SIZE);
    square.setFilled(true);
    gw.add(square);
    let stepCount = 0;
    function step();
    let timer = setInterval(step, TIME_STEP);
}

