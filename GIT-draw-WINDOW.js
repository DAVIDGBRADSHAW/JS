function DrawWindow (gw, x, y){
    gw.add(GRect(x, y, WINDOW_WIDTH, WINDOW_HEIGHT));
    gw.add(GLine(x + WINDOW_WIDTH / 2, y,
            x + WINDOW_WIDTH / 2, Y + WINDOW_HEIGHT));
}

    drawFrame (gw, x, y);
    let doorX = X +(HOUSE_WIDTH - DOOR_WIDTH) / 2;
    let doorY = y +HOUSE_HEIGHT -DOOR_HEIGHT;
    drawDoor(gw, doorX, doorY);
    let leftWindowX = x + WINDOW_INSET_X;
    let rightWindowX = x + HOUSE_WIDTH - WINDOW_INSET_X - WINDOW_WIDTH;
    let windowY = y + ROOF_HEIGHT + WINDOW_INSET_Y;
    drawWindow(gw, leftWindowX, windowsY);
    drawWindow(gw, rightWindowX, windowY);
}
/*1.27 s4*/
