var Listcores = ["AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen"
];


function criaelemento(cor) {

    var novoh1 = document.createElement('h1');
    var txt = document.createTextNode(cor);
    novoh1.appendChild(txt);
    novoh1.style.fontSize = "20px";
    var h1 = document.getElementById("h1");

    novoh1.style.position = "relative";
    novoh1.style.bottom = "100px";
    novoh1.style.top = "30px";
    novoh1.style.right = "160px";
    novoh1.style.display = "inline-block"
    var novo_elemento = document.createElement('div');
    var pai = document.getElementById("cores");
    novo_elemento.style.display = "inline-block"
    novo_elemento.style.backgroundColor = cor;
    novo_elemento.style.position = "relative";
    novo_elemento.style.left = "20px";
    novo_elemento.style.marginTop = "55px";
    novo_elemento.style.marginRight = "5px";
    novo_elemento.style.marginBottom = "5px";
    novo_elemento.style.width = "200px"
    novo_elemento.style.height = "150px";


    pai.appendChild(novo_elemento);
    pai.appendChild(novoh1);

}








preencherVetor();


function capiturar() {
    let vl = "";
    vl = document.querySelector("input").value;
    document.getElementById("demo").innerHTML = vl

    return vl;

}


function preencherVetor() {

    var vetSelect = [];
    var corSistema = Listcores[Math.floor(Math.random() * Listcores.length)];
    var corDigitada = capiturar();




    for (let i = 0; i < 10; i++) {
        vetSelect.push(Listcores[Math.floor(Math.random() * Listcores.length)]);
        criaelemento(vetSelect[i]);
    }
    var corSistema = vetSelect[Math.floor(Math.random() * vetSelect.length)];

    document.getElementById("demo").innerHTML = corSistema;
    document.body.style.backgroundColor = capiturar;

    if (corDigitada.toLowerCase() == corSistema.toLowerCase()) {
        document.getElementById("demo").innerHTML = "oi";
        document.body.style.backgroundColor = corSistema;

    }











}