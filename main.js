var canv = document.getElementById("Canvas")
var ctx = canv.getContext("2d");

let MapRules = {
    w: 1850,
    h: 1500,
}
let plr = {
    pos: { x: MapRules.w/9.5, y: MapRules.h/11.5 },
    size: {w: 40, h: 35}
};

function FillRow(x, y, CurColor) {
    for (let i = 0; i < MapRules.w / 55; i++) {

        ctx.fillStyle = CurColor;
        ctx.fillRect(x, y, MapRules.w / 55, MapRules.h / 50)

        x += MapRules.w / 60

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
    ctx.fillRect(plr.pos.x+2.5, plr.pos.y+2.5, plr.size.w/5, plr.size.h/6); // Left Eye
    ctx.fillRect(plr.pos.x+30, plr.pos.y+2.5, plr.size.w/5, plr.size.h/6); // Right Eye

    ctx.fillRect(plr.pos.x+2.5, plr.pos.y+15, plr.size.w/1.1, plr.size.h/4.5); // Mouth
    
    ctx.fillStyle = "#943600";
    ctx.fillRect(plr.pos.x+2.5, plr.pos.y+15, plr.size.w/1.2, plr.size.h/4.5); // Hat
}
function DrawMap() {
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
        plr.pos.x += 5;
        DrawCharacter()
    }
});
