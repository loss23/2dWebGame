var canv = document.getElementById("Canvas")
var ctx = canv.getContext("2d");

let MapRules = {
    w: 1922,
    h: 1650,
}
let plr = {
    pos: { x: 0, y: 0 },
    size: {w: 40, h: 35},
    MoveAmount: MapRules.w / 50
};

plr.size.x = MapRules.w / 50
plr.size.y = MapRules.h / 50

function FillRow(x, y, CurColor) {
    for (let i = 0; i < MapRules.w / 50; i++) {

        ctx.fillStyle = CurColor;
        ctx.fillRect(x, y, MapRules.w / 50, MapRules.h / 50)

        x += MapRules.w / 50

        if (CurColor == "#77eb34") {
            CurColor = "#6bd92b"
        } else {
            CurColor = "#77eb34"
        };
    }
}

function DrawCharacter() {
    ctx.fillStyle = "LightBlue";
    ctx.fillRect(plr.pos.x, plr.pos.y, plr.size.w, plr.size.h);
    ctx.fillStyle = "Black";
    ctx.fillRect(plr.pos.x+2.5, plr.pos.y+5, plr.size.w/5, plr.size.h/6); // Left Eye
    ctx.fillRect(plr.pos.x+22, plr.pos.y+5, plr.size.w/5, plr.size.h/6); // Right Eye

    ctx.fillRect(plr.pos.x+2.5, plr.pos.y+15, plr.size.w/1.2, plr.size.h/4.5); // Mouth
}
function DrawMap() {
    ctx.clearRect(0,0,MapRules.w,MapRules.h)
    ctx.fillStyle = "Green";
    ctx.fillRect(0, 0, MapRules.w, MapRules.h)

    var x = 0;
    var y = 0;
    var CurColor = "#77eb34";

    for (let _i = 0; _i < MapRules.h / 55; _i++) {
        FillRow(x, y, CurColor);
        y += MapRules.h / 55;

        if (CurColor == "#77eb34") {
            CurColor = "#6bd92b"
        } else {
            CurColor = "#77eb34"
        };
    }

}

DrawMap();
DrawCharacter();

//Movement
document.addEventListener("keydown", function (e) {
    if (e.key == "ArrowRight") {
        plr.pos.x += plr.MoveAmount;
        DrawMap();
        DrawCharacter()
    }
    if (e.key == "ArrowLeft") {
        plr.pos.x -= plr.MoveAmount;
        DrawMap();
        DrawCharacter()
    }
    if (e.key == "ArrowDown") {
        plr.pos.y += plr.MoveAmount;
        DrawMap();
        DrawCharacter()
    }
    if (e.key == "ArrowUp") {
        plr.pos.y -= plr.MoveAmount;
        DrawMap();
        DrawCharacter()
    }

    if (e.key == " ") {
        DrawMap();
        DrawCharacter()

        ctx.drawImage(document.getElementById("swordSwingGif"),plr.pos.x,plr.pos.y)
    }
});
