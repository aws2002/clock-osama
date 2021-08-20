new WOW().init();

$.scrollIt({
    topOffset: -50
});


// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '30px',
//     duration: 2000,
//     reset: true
// });

// sr.reveal(``, {
//     interval: 200
// })

function updateClock(){
    var now=new Date();
    var dayName= now.getDay(),
        mo     = now.getMonth(),
        dnum   = now.getDate(),
        yr     = now.getFullYear(),
        h      = now.getHours(),
        m      = now.getMinutes(),
        s      = now.getSeconds(),
        pe     = "AM";

        if(h==0){
            h=12;
        }else{
            h=h-12;
            pe="PM";
        }
        Number.prototype.pad=function (digits) {
            for(var n=this.toString();n.length<digits;n=0+n);
            return n;
        }
    var months=["January,","February","March","April","May","June","July","August","September","October","November","December"];
    var weeks=["Sunday,","Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,"];
    var ids=["dayname","month","daynum","year","hour","minutes","seconds","period"];
    var values=[weeks[dayName],months[mo],dnum.pad(2),yr,h.pad(2),m.pad(2),s.pad(2),pe];

    for (let index = 0; index < ids.length; index++) {
        document.getElementById(ids[index]).firstChild.nodeValue=values[index];
        
    }

}

function initClock(){
    updateClock();
    window.setInterval("updateClock()",1);
}