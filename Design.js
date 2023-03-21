class Design {
    bodyDom = document.querySelector("body");
    newSchene;

    constructor() {
        //body style
        this.bodyDom.style.display = "flex";
        this.bodyDom.style.flexDirection =  "column";
        this.bodyDom.style.justifyContent = "center";
        this.bodyDom.style.alignItems = "center";
    }

    schene(width=200, height=200, border={color: "black", width: 1, style: "solid"}) {
        this.newSchene = document.createElement("div"); //create schene

        //schene style
        this.newSchene.style.position = "relative";
        this.newSchene.style.width = `${width}px`;
        this.newSchene.style.height =  `${height}px`;
        this.newSchene.style.borderWidth = `${border.width}px`;
        this.newSchene.style.borderStyle = border.style;
        this.newSchene.style.borderColor = border.color;

        this.bodyDom.append(this.newSchene);
    }

    scheneBackgrounColor(color) {
        this.newSchene.style.backgroundColor = color;
    }

    scheneBackgroundImage(imageURL) {
        this.newSchene.style.backgroundImage = `url("${imageURL}")`;
    }

    circle(r, border={color: "black", width: 1, style: "solid"}, position =  {x: 0 , y: 0}) {
        const newCircle = document.createElement("div");

        let left = position.x - r;
        let bottom = position.y - r;

        newCircle.style.position = "absolute";
        newCircle.style.width = `${r * 2}px`;
        newCircle.style.height = `${r * 2}px`;
        newCircle.style.borderRadius = "50%";
        newCircle.style.borderWidth = `${border.width}px`;
        newCircle.style.borderStyle = border.style;
        newCircle.style.borderColor = border.color;
        newCircle.style.left = `${left}px`;
        newCircle.style.bottom = `${bottom}px`;

        //schene append
        this.newSchene.append(newCircle);
    }
}







const design = new Design();
design.schene(800,500,{style: "none"});
design.scheneBackgroundImage("https://cdn.pixabay.com/photo/2020/03/22/06/57/game-background-4956017_960_720.jpg");
