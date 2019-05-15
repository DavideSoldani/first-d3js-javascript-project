var svgWidth = document.body.clientWidth;
var svgHeight = document.body.scrollHeight;
var svg = d3.select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

var configurations;
d3.json("configurations.json").then(function(data) {
  configurations=data;
});


var butterflies=[];

init(butterflies);

d3.select("body").on("keydown", function() {
    if(d3.event.keyCode === 67){
        console.log("hai premuto c");
        butterflies.forEach(function(element, index) {
            d3.select("#b"+index)
                .transition().duration(2000)
                .attr("transform", "translate("+configurations.c[index][0]+","+ configurations.c[index][1]+") scale(0.3)");
        });
    }

    if(d3.event.keyCode === 73){
        console.log("hai premuto i");
        butterflies.forEach(function(element, index) {
            d3.select("#b"+index)
                .transition().duration(2000)
                .attr("transform", "translate("+configurations.i[index][0]+","+ configurations.i[index][1]+") scale(0.3)");
        });
                    
    }
    if(d3.event.keyCode === 65){
        console.log("hai premuto a");
        butterflies.forEach(function(element, index) {
            d3.select("#b"+index)
                .transition().duration(2000)
                .attr("transform", "translate("+configurations.a[index][0]+","+ configurations.a[index][1]+") scale(0.3)");
        });
                   
    }
    if(d3.event.keyCode === 79){
        console.log("hai premuto o");
        butterflies.forEach(function(element, index) {
            d3.select("#b"+index)
                .transition().duration(2000)
                .attr("transform", "translate("+configurations.o[index][0]+","+ configurations.o[index][1]+") scale(0.3)");
        });
                    
    }  
    
    }

);


function init(butterflies){

    var random_centers=[];

    var id_index = 0;
    var random_center;
    var randx;
    var randy;


    for(i=0;i<10;i++){

        let randx = Math.floor(Math.random() * (svgWidth-200));
        let randy = Math.floor(Math.random() * (svgHeight-200));

        random_centers.push(random_center);

        let temp_butterfly = svg.append("path")
            .attr("stroke","#000")
            .attr ("id", "b"+id_index) 
            .attr("d","m155.96835,131.11746c0.68773,0.60302 2.14315,-0.53908 2.85023,-0.6802c-0.79583,-1.37068 2.20178,-8.0484 1.1672,-10.47345c-0.31833,-5.48273 -8.37605,-17.85886 -9.39083,-19.295c0.38709,-0.96311 4.72521,-0.06689 4.59571,0.07128c-1.8103,1.93203 6.10888,13.02005 7.02345,19.4346c1.68519,-0.12357 3.89875,-0.96007 4.88113,0.42175c0.91737,-1.32809 7.99577,-11.47553 8.38273,-20.24393c0.05545,-1.25656 3.89723,-0.46131 3.17455,0.30459c-1.15841,5.45928 -9.32742,20.78715 -9.96561,21.3452c0.74274,4.77976 0.44204,5.10738 5.18616,8.82399c2.13506,-6.64212 6.68423,-12.28031 10.85083,-17.89193c4.70477,-6.30076 7.86226,-12.33682 13.04485,-18.89594c6.82245,-8.33198 15.53549,-15.93459 23.51559,-20.47294c5.55141,-3.15713 14.85273,-5.86366 16.2786,-6.04079c2.64153,-0.33976 5.0303,-0.27945 8.16136,0.33689c4.61997,0.90937 9.13101,1.41724 13.98151,4.43376c4.56089,3.87148 2.98425,8.72362 2.13385,13.26855c-7.02453,10.26308 -14.21918,22.55453 -16.48508,35.1293c-0.76184,4.65619 -2.13162,12.6797 -5.36449,17.71968c-5.19736,7.7525 -11.55817,7.46579 -17.53456,8.51671c3.64154,1.3814 7.59116,5.89191 11.13453,10.42445c5.52747,7.12915 8.22083,14.44017 6.79342,22.39949c-0.30388,1.66945 -5.57421,14.33203 -8.152,18.30524c-9.78416,15.12922 -23.1045,25.3896 -33.84041,23.72437c-3.86616,-0.59964 -14.53032,-11.35423 -16.44764,-14.52764c-4.75965,-7.87776 -8.66917,-17.37984 -8.82986,-25.6758c-0.59165,-0.78319 -1.31523,-0.84105 -0.99619,-1.88884c-0.59286,2.39933 -2.47549,10.21298 -5.26262,15.15267c-4.0294,7.14139 -7.71786,-3.53392 -9.21084,-12.19115c-0.51182,-2.96768 -0.13618,-3.48145 -0.73312,-5.256c-2.82266,1.41893 -1.33643,5.53317 -2.44416,8.85672c-0.93915,2.89421 -5.14503,11.73423 -6.3065,13.74951c-3.71272,6.44196 -12.04936,16.19017 -18.09533,18.52927c-5.61139,2.17099 -10.36728,1.86641 -14.87711,-1.1981c-5.8169,-3.95263 -14.01462,-13.13249 -19.05791,-20.59668c-6.38449,-9.23579 -11.96468,-23.11216 -6.65367,-32.88652c3.38987,-6.09865 9.77073,-15.18725 16.00605,-17.42058c-4.40153,-0.71419 -14.13985,-4.5575 -17.76146,-15.23255c-1.16243,-3.38453 -1.59364,-8.64686 -1.88931,-12.41198c-0.48107,-6.21607 -2.62179,-13.35779 -4.39886,-19.47846c-1.42855,-5.59576 -3.95344,-12.75958 -6.59586,-18.88169c-2.76924,-6.4245 -5.0396,-17.04767 -0.22029,-22.27879c1.68347,-1.82761 6.89618,-3.95921 7.98558,-4.11121c3.80809,-0.53874 8.99629,1.93886 12.84767,3.42527c2.52324,0.98192 13.59455,6.22248 16.65634,9.108c20.18481,19.02272 34.53769,42.71808 43.86237,64.54888z")
            .attr("stroke-width", 1) 
            .attr("fill", "#fff")
            .transition().duration(2000)
            .attr("transform", "translate("+randx+","+ randy+") scale(0.3)");
    
        butterflies.push(temp_butterfly);
        id_index=id_index+1;

    }


}

function restart(){
	console.log("hai premuto reset");
        for(var index=0; index<10; index++) {
        	let randx = Math.floor(Math.random() * (svgWidth-200));
            let randy = Math.floor(Math.random() * (svgHeight-200));
            d3.select("#b"+index)
                .transition().duration(2000)
                .attr("transform", "translate("+randx+","+ randy+") scale(0.3)");
        }
}
