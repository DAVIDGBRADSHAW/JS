body {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(215, 236, 205);
  color: rgb(35, 35, 34);
}

#board-home {
  display: grid;
  grid-template-columns: 100px 100px 100px ;
  grid-template-rows: 100px 100px 100px ;
  cursor: pointer;
  position: relative;
}


#board-away {
  display: grid;
  grid-template-columns: 10px 10px 10px 10px 10px 10px 10px 10px ;
  grid-template-rows: 100px 100px 100px;
  cursor: pointer;
  position: relative;
}
#pitch {
  display: grid;
  grid-template-columns: 200px 200px 200px ;
  grid-template-rows:200px 200px 200px ;
  cursor: pointer;
  position: relative;
}
.tile {
  color: #f14110;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.twenty-two{
    width: 800px;
    height: 100px;
    background-color: aqua;
    border: 20px solid #f14110;

}

.right-border {
  border: 1em solid #027d02;
}

.bottom-border {
  border-bottom: 1em solid rgb(245, 243, 243);
}

.strike {
  position: absolute;
  background-color: rgb(54, 237, 17);
}

.strike-row-1 {
  width: 100%;
  height: 40px;
  top: 15%;
}
.strike-row-2 {
  width: 100%;
  height: 40px;
  top: 48%;
}
.strike-row-3 {
  width: 100%;
  height: 40px;
  top: 83%;
}
.strike-column-1 {
  height: 200px;
  width: 200px;
  left: 15%;
}
.strike-column-2 {
  height: 100%;
  width: 4px;
  left: 48%;
}
.strike-column-3 {
  height: 100%;
  width: 4px;
  left: 83%;
}
.strike-diagonal-1 {
  width: 90%;
  height: 4px;
  top: 50%;
  left: 5%;
}
.strike-diagonal-2 {
  width: 90%;
  height: 4px;
  top: 50%;
  left: 5%;
  transform: skewY(-45deg);
}

h1 {
  color: #000000;
}

#game-over-area {
  text-align: center;
  border: rgb(242, 38, 150) 8px solid;
  padding: 50px;
  width: 50%;
  margin-top: 50px;
}


#game-over{
    text-align: center;
    border: rgb(251, 193, 34) 8px solid;
    padding: 50px;
    width: 50%;
    margin-top: 50px;
  }
  
h2 {
  color: #FF0000;
  font-size: 2em;
  margin-top: 0px;
}

button {
  background-color: transparent;
  color: #e41e1e;
  border: #027d02 10px solid;
  padding: 10px;
  font-size: 1.5em;
}

.hidden {
  display: none;
}

.visible {
  display: block;
}

.home-hover:hover::after {
  content: "home";
  opacity: 0.4;
}

.away-hover:hover::after {
  content: "AWAY";
  opacity: 0.4;

}

.x-home-hover:hover::after {
    content: "X";
    opacity: 0.4;
  }
  
.o-away-hover:hover::after {
    content: "O";
    opacity: 0.4;
  }