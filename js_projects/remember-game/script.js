let imgs = [
    ' imgs/playing-card-161487_640.png',
    'imgs/playing-card-311679_640.png',
    ' imgs/playing-card-161489_640.png',

];
let imgs2 = [
    ' imgs/playing-card-161487_640.png',
    'imgs/playing-card-311679_640.png',
    ' imgs/playing-card-161489_640.png',
    'imgs/playing-card-161490_640.png',
    'imgs/playing-card-161487_640.png',
    'imgs/ace-28357_640.png',
];
shuffle(imgs);

let main = document.getElementById("main");
let allDivs = document.getElementsByTagName("div");


function doubleImg() {
    for (let i = 0; i < imgs.length; i++) {
        main.innerHTML += '<div><img src="' + imgs[i] + '" </div>';
    }
}
doubleImg();
doubleImg();



let tr = true;
let arr = []


for (i = 0; i < allDivs.length; i++) {
    allDivs[i].addEventListener('click', function () {
        if (tr) {
            this.firstChild.style.opacity = '1';
            if (arr.length == 0) {
                arr[0] = this;
            }
            else if (arr.length == 1) {
                arr[1] = this;
            }
            if (arr.length == 2) {
                tr = false;
                setTimeout(checking, 200);

            }
        }
        else {
            return;
        }
    })


    function checking() {
        if (arr[0].firstChild.getAttribute("src") == arr[1].firstChild.getAttribute("src")) {

            alert("www")
        }
        else {
            arr[0].firstChild.style.opacity = '0';
            arr[1].firstChild.style.opacity = '0';
        }
        arr = [];
        tr = true;
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;

}
imgs = shuffle(imgs);



