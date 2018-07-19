
let btn1=$('.btn1');
let btn2=$('.btn2');
let btn3=$('.btn3');
let btn4=$('.btn4');
let ar=[];

btn1.on('click',function(){

    $('.con').css('display', 'none');
    $('.displayy').css('display', 'block');


    $('#sub').on('click',function ()
    {
        let value=$('#inp').val();
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200)
            {
                ar=[];
                let x=this.responseText;
                x=JSON.parse(x);
                document.getElementById("result").innerHTML=" ";
                for (var i = 0; i < x.items.length; i++) {

                    var item = x.items[i];
                    ar[i]=item.id;
                    document.getElementById("result").innerHTML +=`<br><li id=${i} ><a href="http://localhost:5000/main?val=${item.id}">${item.volumeInfo.title}</a></li>`;
                }
            }
        };
        xhttp.open("GET", `https://www.googleapis.com/books/v1/volumes?q=intitle:${value}`, true);
        xhttp.send();
    })
});
btn2.on('click',function() {

    $('.con').css('display', 'none');
    $('.displayy').css('display', 'block');


    $('#sub').on('click',function ()
    {
        let value=$('#inp').val();
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200)
            {
                ar=[];
                let x=this.responseText;
                x=JSON.parse(x);
                document.getElementById("result").innerHTML=" ";
                for (var i = 0; i < x.items.length; i++) {

                    var item = x.items[i];
                    ar[i]=item.id;
                    document.getElementById("result").innerHTML +=`<br><li id=${i} ><a href="http://localhost:5000/main?val=${item.id}">${item.volumeInfo.title}</a></li>`;
                }
            }
        };
        xhttp.open("GET", `https://www.googleapis.com/books/v1/volumes?q=inauthor:${value}`, true);
        xhttp.send();
    })

});
btn3.on('click',function() {

    $('.con').css('display', 'none');
    $('.displayy').css('display', 'block');


    $('#sub').on('click',function ()
    {
        let value=$('#inp').val();
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200)
            {
                ar=[];
                let x=this.responseText;
                x=JSON.parse(x);
                document.getElementById("result").innerHTML=" ";
                for (var i = 0; i < x.items.length; i++) {

                    var item = x.items[i];
                    ar[i]=item.id;
                    document.getElementById("result").innerHTML +=`<br><li id=${i} ><a href="http://localhost:5000/main?val=${item.id}">${item.volumeInfo.title}</a></li>`;
                }
            }
        };
        xhttp.open("GET", `https://www.googleapis.com/books/v1/volumes?q=inpublisher:${value}`, true);
        xhttp.send();
    })

});
btn4.on('click',function() {

    $('.con').css('display', 'none');
    $('.displayy').css('display', 'block')


    $('#sub').on('click',function ()
    {
        let value=$('#inp').val();
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200)
            {
                ar=[];
                let x=this.responseText;
                x=JSON.parse(x);
                document.getElementById("result").innerHTML=" ";
                for (var i = 0; i < x.items.length; i++) {

                    var item = x.items[i];
                    ar[i]=item.id;
                    document.getElementById("result").innerHTML +=`<br><li id=${i} ><a href="http://localhost:5000/main?val=${item.id}">${item.volumeInfo.title}</a></li>`;
                }
            }
        };
        xhttp.open("GET", `https://www.googleapis.com/books/v1/volumes?q=subject:${value}`, true);
        xhttp.send();
    })

});
// function call(e){
//     console.log(e);
//     let id=e.id;
//     console.log(e.id);
//     let val=(ar[id]);
//     console.log(val);
//     let URL=`http://localhost:5000/main?val=${val}`;
//     $.ajax({
//         url:URL,
//         type:'GET',
//         success:function(data){
//
//         }
//     })
// }

