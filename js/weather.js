var url = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-23DE7444-DFA4-4A62-8763-63200CBFF4C4';

var Cities = [
    // 全臺
    ['基隆市', '新北市', '臺北市', '桃園市', '新竹市', '新竹縣', '苗栗縣', '臺中市', '南投縣', '彰化縣', '雲林縣', '嘉義市', '嘉義縣', '臺南市', '高雄市', '屏東縣', '宜蘭縣', '花蓮縣', '臺東縣', '澎湖縣', '金門縣', '連江縣'],
    // 北部
    ['基隆市', '新北市', '臺北市', '桃園市', '新竹市', '新竹縣', '苗栗縣'], 
    // 中部
    ['臺中市', '南投縣', '彰化縣', '雲林縣', '嘉義市', '嘉義縣'],
    // 南部
    ['臺南市', '高雄市', '屏東縣'],
    // 東部
    ['宜蘭縣', '花蓮縣', '臺東縣'],
    // 離島
    ['澎湖縣', '金門縣', '連江縣'],
]

var nowCities;
var orgData = {}; 
nowCities = Cities[0]; 

fetch_data();

function fetch_data() {
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(result){
        console.log(result);
        organization_data(result); 
        arrange_cities();
    });
}


function organization_data(result) {
    var locations = result.records.location;

    locations.forEach(location => {
        var locationName = location.locationName;
        var loc_wE_t_0 = location.weatherElement[0].time[0];
        var wxCondition = loc_wE_t_0.parameter.parameterName;
        var startTime = loc_wE_t_0.startTime;
        var endTime =loc_wE_t_0.endTime;
        var minT = location.weatherElement[2].time[0].parameter.parameterName;
        var maxT = location.weatherElement[4].time[0].parameter.parameterName;
        var pop = location.weatherElement[1].time[0].parameter.parameterName;
        var ci = location.weatherElement[3].time[0].parameter.parameterName;

       orgData[locationName] = {
           wxCondition: wxCondition, startTime: startTime, endTime: endTime, 
           minT: minT, maxT: maxT, pop: pop, ci: ci,
       }

    });
}



function arrange_cities() {

    nowCities = Cities[0];

    var innerbox = document.querySelector('.containermain');
    innerbox.innerHTML = "";

    nowCities.forEach(function (city, index){
        var cityData = orgData[city];
        console.log('cityData',cityData);

        var src;
        if(cityData.wxCondition == '多雲'){
            var src = '多雲';
        }else if(cityData.wxCondition == '多雲-1'){
            var src = '多雲-1';
        }else if(cityData.wxCondition == '多雲時陰'){
            var src = '多雲時陰';
        }else if(cityData.wxCondition == '多雲時陰短暫雨'){
            var src = '多雲時陰短暫雨';
        }else if(cityData.wxCondition == '多雲時陰短暫陣雨'){
            var src = '多雲時陰短暫陣雨';
        }else if(cityData.wxCondition == '多雲時晴'){
            var src = '多雲時晴';
        }else if(cityData.wxCondition == '多雲時晴-1'){
            var src = '多雲時晴-1';
        }else if(cityData.wxCondition == '多雲短暫雨'){
            var src = '多雲短暫雨';
        }else if(cityData.wxCondition == '多雲短暫雨-1'){
            var src = '多雲短暫雨-1';
        }else if(cityData.wxCondition == '陰天'){
            var src = '陰天';
        }else if(cityData.wxCondition == '陰時多雲'){
            var src = '陰時多雲';
        }else if(cityData.wxCondition == '陰時多雲短暫雨'){
            var src = '陰時多雲短暫雨';
        }else if(cityData.wxCondition == '陰時多雲短暫陣雨'){
            var src = '陰時多雲短暫陣雨';
        }else if(cityData.wxCondition == '陰短暫雨'){
            var src = '陰短暫雨';
        }else if(cityData.wxCondition == '陰短暫陣雨'){
            var src = '陰短暫陣雨';
        }else if(cityData.wxCondition == '晴時多雲'){
            var src = '晴時多雲';
        }else {
            var src = '晴時多雲-1';
        }


        innerbox.innerHTML += 
            `<div class="innerbox" style="background-image: url('img/paper1.png');">
            
                <div class="inner-top">
                    <p class="p-city">${city}</p>
                    <p class="p-st">${cityData.startTime.substr(0, 16).replaceAll('-', "/")}
                   
                    <p class="p-et">${cityData.endTime.substr(0, 16).replaceAll('-', "/")}</p>
                    <p class="p-con">${cityData.wxCondition}</p>
                </div>
                <div class="inner-bottom">
                    <p class="p-t">${cityData.minT}°C ~ ${cityData.maxT}°C</p>
                    <p class="p-pop">${cityData.pop} %</p>
                    <p class="p-ci">${cityData.ci}</p>
                </div>
                <div class="in-innerbox">
                    <img src="img/pngsucai_1.png" width="50" height="50" alt="">
                </div>
                <div class="img-box">
                    <img src="img/${src}.svg" alt="">
                </div>
             </div>`;
    });
}



function showNorth() {

    nowCities = Cities[1];

    var innerbox = document.querySelector('.containermain');
    innerbox.innerHTML = "";

    nowCities.forEach(function (city, index){
        var cityData = orgData[city];
        console.log('cityData',cityData);

        var src;
        if(cityData.wxCondition == '多雲'){
            var src = '多雲';
        }else if(cityData.wxCondition == '多雲-1'){
            var src = '多雲-1';
        }else if(cityData.wxCondition == '多雲時陰'){
            var src = '多雲時陰';
        }else if(cityData.wxCondition == '多雲時陰短暫雨'){
            var src = '多雲時陰短暫雨';
        }else if(cityData.wxCondition == '多雲時陰短暫陣雨'){
            var src = '多雲時陰短暫陣雨';
        }else if(cityData.wxCondition == '多雲時晴'){
            var src = '多雲時晴';
        }else if(cityData.wxCondition == '多雲時晴-1'){
            var src = '多雲時晴-1';
        }else if(cityData.wxCondition == '多雲短暫雨'){
            var src = '多雲短暫雨';
        }else if(cityData.wxCondition == '多雲短暫雨-1'){
            var src = '多雲短暫雨-1';
        }else if(cityData.wxCondition == '陰天'){
            var src = '陰天';
        }else if(cityData.wxCondition == '陰時多雲'){
            var src = '陰時多雲';
        }else if(cityData.wxCondition == '陰時多雲短暫雨'){
            var src = '陰時多雲短暫雨';
        }else if(cityData.wxCondition == '陰時多雲短暫陣雨'){
            var src = '陰時多雲短暫陣雨';
        }else if(cityData.wxCondition == '陰短暫雨'){
            var src = '陰短暫雨';
        }else if(cityData.wxCondition == '陰短暫陣雨'){
            var src = '陰短暫陣雨';
        }else if(cityData.wxCondition == '晴時多雲'){
            var src = '晴時多雲';
        }else {
            var src = '晴時多雲-1';
        }


        innerbox.innerHTML += 
            `<div class="innerbox" style="background-image: url('img/paper1.png');">
            
                <div class="inner-top">
                    <p class="p-city">${city}</p>
                    <p class="p-st">${cityData.startTime.substr(0, 16).replaceAll('-', "/")}
                   
                    <p class="p-et">${cityData.endTime.substr(0, 16).replaceAll('-', "/")}</p>
                    <p class="p-con">${cityData.wxCondition}</p>
                </div>
                <div class="inner-bottom">
                    <p class="p-t">${cityData.minT}°C ~ ${cityData.maxT}°C</p>
                    <p class="p-pop">${cityData.pop} %</p>
                    <p class="p-ci">${cityData.ci}</p>
                </div>
                <div class="in-innerbox">
                    <img src="img/pngsucai_1.png" width="50" height="50" alt="">
                </div>
                <div class="img-box">
                    <img src="img/${src}.svg" alt="">
                </div>
             </div>`;
    });

}


function showNorth() {

    nowCities = Cities[1];

    var innerbox = document.querySelector('.containermain');
    innerbox.innerHTML = "";

    nowCities.forEach(function (city, index){
        var cityData = orgData[city];
        console.log('cityData',cityData);

        var src;
        if(cityData.wxCondition == '多雲'){
            var src = '多雲';
        }else if(cityData.wxCondition == '多雲-1'){
            var src = '多雲-1';
        }else if(cityData.wxCondition == '多雲時陰'){
            var src = '多雲時陰';
        }else if(cityData.wxCondition == '多雲時陰短暫雨'){
            var src = '多雲時陰短暫雨';
        }else if(cityData.wxCondition == '多雲時陰短暫陣雨'){
            var src = '多雲時陰短暫陣雨';
        }else if(cityData.wxCondition == '多雲時晴'){
            var src = '多雲時晴';
        }else if(cityData.wxCondition == '多雲時晴-1'){
            var src = '多雲時晴-1';
        }else if(cityData.wxCondition == '多雲短暫雨'){
            var src = '多雲短暫雨';
        }else if(cityData.wxCondition == '多雲短暫雨-1'){
            var src = '多雲短暫雨-1';
        }else if(cityData.wxCondition == '陰天'){
            var src = '陰天';
        }else if(cityData.wxCondition == '陰時多雲'){
            var src = '陰時多雲';
        }else if(cityData.wxCondition == '陰時多雲短暫雨'){
            var src = '陰時多雲短暫雨';
        }else if(cityData.wxCondition == '陰時多雲短暫陣雨'){
            var src = '陰時多雲短暫陣雨';
        }else if(cityData.wxCondition == '陰短暫雨'){
            var src = '陰短暫雨';
        }else if(cityData.wxCondition == '陰短暫陣雨'){
            var src = '陰短暫陣雨';
        }else if(cityData.wxCondition == '晴時多雲'){
            var src = '晴時多雲';
        }else {
            var src = '晴時多雲-1';
        }


        innerbox.innerHTML += 
            `<div class="innerbox" style="background-image: url('img/paper1.png');">
            
                <div class="inner-top">
                    <p class="p-city">${city}</p>
                    <p class="p-st">${cityData.startTime.substr(0, 16).replaceAll('-', "/")}
                   
                    <p class="p-et">${cityData.endTime.substr(0, 16).replaceAll('-', "/")}</p>
                    <p class="p-con">${cityData.wxCondition}</p>
                </div>
                <div class="inner-bottom">
                    <p class="p-t">${cityData.minT}°C ~ ${cityData.maxT}°C</p>
                    <p class="p-pop">${cityData.pop} %</p>
                    <p class="p-ci">${cityData.ci}</p>
                </div>
                <div class="in-innerbox">
                    <img src="img/pngsucai_1.png" width="50" height="50" alt="">
                </div>
                <div class="img-box">
                    <img src="img/${src}.svg" alt="">
                </div>
             </div>`;
    });

}

function showNorth() {

    nowCities = Cities[1];

    var innerbox = document.querySelector('.containermain');
    innerbox.innerHTML = "";

    nowCities.forEach(function (city, index){
        var cityData = orgData[city];
        console.log('cityData',cityData);

        var src;
        if(cityData.wxCondition == '多雲'){
            var src = '多雲';
        }else if(cityData.wxCondition == '多雲-1'){
            var src = '多雲-1';
        }else if(cityData.wxCondition == '多雲時陰'){
            var src = '多雲時陰';
        }else if(cityData.wxCondition == '多雲時陰短暫雨'){
            var src = '多雲時陰短暫雨';
        }else if(cityData.wxCondition == '多雲時陰短暫陣雨'){
            var src = '多雲時陰短暫陣雨';
        }else if(cityData.wxCondition == '多雲時晴'){
            var src = '多雲時晴';
        }else if(cityData.wxCondition == '多雲時晴-1'){
            var src = '多雲時晴-1';
        }else if(cityData.wxCondition == '多雲短暫雨'){
            var src = '多雲短暫雨';
        }else if(cityData.wxCondition == '多雲短暫雨-1'){
            var src = '多雲短暫雨-1';
        }else if(cityData.wxCondition == '陰天'){
            var src = '陰天';
        }else if(cityData.wxCondition == '陰時多雲'){
            var src = '陰時多雲';
        }else if(cityData.wxCondition == '陰時多雲短暫雨'){
            var src = '陰時多雲短暫雨';
        }else if(cityData.wxCondition == '陰時多雲短暫陣雨'){
            var src = '陰時多雲短暫陣雨';
        }else if(cityData.wxCondition == '陰短暫雨'){
            var src = '陰短暫雨';
        }else if(cityData.wxCondition == '陰短暫陣雨'){
            var src = '陰短暫陣雨';
        }else if(cityData.wxCondition == '晴時多雲'){
            var src = '晴時多雲';
        }else {
            var src = '晴時多雲-1';
        }


        innerbox.innerHTML += 
            `<div class="innerbox" style="background-image: url('img/paper1.png');">
            
                <div class="inner-top">
                    <p class="p-city">${city}</p>
                    <p class="p-st">${cityData.startTime.substr(0, 16).replaceAll('-', "/")}
                   
                    <p class="p-et">${cityData.endTime.substr(0, 16).replaceAll('-', "/")}</p>
                    <p class="p-con">${cityData.wxCondition}</p>
                </div>
                <div class="inner-bottom">
                    <p class="p-t">${cityData.minT}°C ~ ${cityData.maxT}°C</p>
                    <p class="p-pop">${cityData.pop} %</p>
                    <p class="p-ci">${cityData.ci}</p>
                </div>
                <div class="in-innerbox">
                    <img src="img/pngsucai_1.png" width="50" height="50" alt="">
                </div>
                <div class="img-box">
                    <img src="img/${src}.svg" alt="">
                </div>
             </div>`;
    });

}

function showWest() {

    nowCities = Cities[2];

    var innerbox = document.querySelector('.containermain');
    innerbox.innerHTML = "";

    nowCities.forEach(function (city, index){
        var cityData = orgData[city];
        console.log('cityData',cityData);

        var src;
        if(cityData.wxCondition == '多雲'){
            var src = '多雲';
        }else if(cityData.wxCondition == '多雲-1'){
            var src = '多雲-1';
        }else if(cityData.wxCondition == '多雲時陰'){
            var src = '多雲時陰';
        }else if(cityData.wxCondition == '多雲時陰短暫雨'){
            var src = '多雲時陰短暫雨';
        }else if(cityData.wxCondition == '多雲時陰短暫陣雨'){
            var src = '多雲時陰短暫陣雨';
        }else if(cityData.wxCondition == '多雲時晴'){
            var src = '多雲時晴';
        }else if(cityData.wxCondition == '多雲時晴-1'){
            var src = '多雲時晴-1';
        }else if(cityData.wxCondition == '多雲短暫雨'){
            var src = '多雲短暫雨';
        }else if(cityData.wxCondition == '多雲短暫雨-1'){
            var src = '多雲短暫雨-1';
        }else if(cityData.wxCondition == '陰天'){
            var src = '陰天';
        }else if(cityData.wxCondition == '陰時多雲'){
            var src = '陰時多雲';
        }else if(cityData.wxCondition == '陰時多雲短暫雨'){
            var src = '陰時多雲短暫雨';
        }else if(cityData.wxCondition == '陰時多雲短暫陣雨'){
            var src = '陰時多雲短暫陣雨';
        }else if(cityData.wxCondition == '陰短暫雨'){
            var src = '陰短暫雨';
        }else if(cityData.wxCondition == '陰短暫陣雨'){
            var src = '陰短暫陣雨';
        }else if(cityData.wxCondition == '晴時多雲'){
            var src = '晴時多雲';
        }else {
            var src = '晴時多雲-1';
        }


        innerbox.innerHTML += 
            `<div class="innerbox" style="background-image: url('img/paper1.png');">
            
                <div class="inner-top">
                    <p class="p-city">${city}</p>
                    <p class="p-st">${cityData.startTime.substr(0, 16).replaceAll('-', "/")}
                   
                    <p class="p-et">${cityData.endTime.substr(0, 16).replaceAll('-', "/")}</p>
                    <p class="p-con">${cityData.wxCondition}</p>
                </div>
                <div class="inner-bottom">
                    <p class="p-t">${cityData.minT}°C ~ ${cityData.maxT}°C</p>
                    <p class="p-pop">${cityData.pop} %</p>
                    <p class="p-ci">${cityData.ci}</p>
                </div>
                <div class="in-innerbox">
                    <img src="img/pngsucai_1.png" width="50" height="50" alt="">
                </div>
                <div class="img-box">
                    <img src="img/${src}.svg" alt="">
                </div>
             </div>`;
    });

}

function showSouth() {

    nowCities = Cities[3];

    var innerbox = document.querySelector('.containermain');
    innerbox.innerHTML = "";

    nowCities.forEach(function (city, index){
        var cityData = orgData[city];
        console.log('cityData',cityData);

        var src;
        if(cityData.wxCondition == '多雲'){
            var src = '多雲';
        }else if(cityData.wxCondition == '多雲-1'){
            var src = '多雲-1';
        }else if(cityData.wxCondition == '多雲時陰'){
            var src = '多雲時陰';
        }else if(cityData.wxCondition == '多雲時陰短暫雨'){
            var src = '多雲時陰短暫雨';
        }else if(cityData.wxCondition == '多雲時陰短暫陣雨'){
            var src = '多雲時陰短暫陣雨';
        }else if(cityData.wxCondition == '多雲時晴'){
            var src = '多雲時晴';
        }else if(cityData.wxCondition == '多雲時晴-1'){
            var src = '多雲時晴-1';
        }else if(cityData.wxCondition == '多雲短暫雨'){
            var src = '多雲短暫雨';
        }else if(cityData.wxCondition == '多雲短暫雨-1'){
            var src = '多雲短暫雨-1';
        }else if(cityData.wxCondition == '陰天'){
            var src = '陰天';
        }else if(cityData.wxCondition == '陰時多雲'){
            var src = '陰時多雲';
        }else if(cityData.wxCondition == '陰時多雲短暫雨'){
            var src = '陰時多雲短暫雨';
        }else if(cityData.wxCondition == '陰時多雲短暫陣雨'){
            var src = '陰時多雲短暫陣雨';
        }else if(cityData.wxCondition == '陰短暫雨'){
            var src = '陰短暫雨';
        }else if(cityData.wxCondition == '陰短暫陣雨'){
            var src = '陰短暫陣雨';
        }else if(cityData.wxCondition == '晴時多雲'){
            var src = '晴時多雲';
        }else {
            var src = '晴時多雲-1';
        }


        innerbox.innerHTML += 
            `<div class="innerbox" style="background-image: url('img/paper1.png');">
            
                <div class="inner-top">
                    <p class="p-city">${city}</p>
                    <p class="p-st">${cityData.startTime.substr(0, 16).replaceAll('-', "/")}
                   
                    <p class="p-et">${cityData.endTime.substr(0, 16).replaceAll('-', "/")}</p>
                    <p class="p-con">${cityData.wxCondition}</p>
                </div>
                <div class="inner-bottom">
                    <p class="p-t">${cityData.minT}°C ~ ${cityData.maxT}°C</p>
                    <p class="p-pop">${cityData.pop} %</p>
                    <p class="p-ci">${cityData.ci}</p>
                </div>
                <div class="in-innerbox">
                    <img src="img/pngsucai_1.png" width="50" height="50" alt="">
                </div>
                <div class="img-box">
                    <img src="img/${src}.svg" alt="">
                </div>
             </div>`;
    });

}

function showEast() {

    nowCities = Cities[4];

    var innerbox = document.querySelector('.containermain');
    innerbox.innerHTML = "";

    nowCities.forEach(function (city, index){
        var cityData = orgData[city];
        console.log('cityData',cityData);

        var src;
        if(cityData.wxCondition == '多雲'){
            var src = '多雲';
        }else if(cityData.wxCondition == '多雲-1'){
            var src = '多雲-1';
        }else if(cityData.wxCondition == '多雲時陰'){
            var src = '多雲時陰';
        }else if(cityData.wxCondition == '多雲時陰短暫雨'){
            var src = '多雲時陰短暫雨';
        }else if(cityData.wxCondition == '多雲時陰短暫陣雨'){
            var src = '多雲時陰短暫陣雨';
        }else if(cityData.wxCondition == '多雲時晴'){
            var src = '多雲時晴';
        }else if(cityData.wxCondition == '多雲時晴-1'){
            var src = '多雲時晴-1';
        }else if(cityData.wxCondition == '多雲短暫雨'){
            var src = '多雲短暫雨';
        }else if(cityData.wxCondition == '多雲短暫雨-1'){
            var src = '多雲短暫雨-1';
        }else if(cityData.wxCondition == '陰天'){
            var src = '陰天';
        }else if(cityData.wxCondition == '陰時多雲'){
            var src = '陰時多雲';
        }else if(cityData.wxCondition == '陰時多雲短暫雨'){
            var src = '陰時多雲短暫雨';
        }else if(cityData.wxCondition == '陰時多雲短暫陣雨'){
            var src = '陰時多雲短暫陣雨';
        }else if(cityData.wxCondition == '陰短暫雨'){
            var src = '陰短暫雨';
        }else if(cityData.wxCondition == '陰短暫陣雨'){
            var src = '陰短暫陣雨';
        }else if(cityData.wxCondition == '晴時多雲'){
            var src = '晴時多雲';
        }else {
            var src = '晴時多雲-1';
        }


        innerbox.innerHTML += 
            `<div class="innerbox" style="background-image: url('img/paper1.png');">
            
                <div class="inner-top">
                    <p class="p-city">${city}</p>
                    <p class="p-st">${cityData.startTime.substr(0, 16).replaceAll('-', "/")}
                   
                    <p class="p-et">${cityData.endTime.substr(0, 16).replaceAll('-', "/")}</p>
                    <p class="p-con">${cityData.wxCondition}</p>
                </div>
                <div class="inner-bottom">
                    <p class="p-t">${cityData.minT}°C ~ ${cityData.maxT}°C</p>
                    <p class="p-pop">${cityData.pop} %</p>
                    <p class="p-ci">${cityData.ci}</p>
                </div>
                <div class="in-innerbox">
                    <img src="img/pngsucai_1.png" width="50" height="50" alt="">
                </div>
                <div class="img-box">
                    <img src="img/${src}.svg" alt="">
                </div>
             </div>`;
    });

}


function showIsland() {

    nowCities = Cities[5];

    var innerbox = document.querySelector('.containermain');
    innerbox.innerHTML = "";

    nowCities.forEach(function (city, index){
        var cityData = orgData[city];
        console.log('cityData',cityData);

        var src;
        if(cityData.wxCondition == '多雲'){
            var src = '多雲';
        }else if(cityData.wxCondition == '多雲-1'){
            var src = '多雲-1';
        }else if(cityData.wxCondition == '多雲時陰'){
            var src = '多雲時陰';
        }else if(cityData.wxCondition == '多雲時陰短暫雨'){
            var src = '多雲時陰短暫雨';
        }else if(cityData.wxCondition == '多雲時陰短暫陣雨'){
            var src = '多雲時陰短暫陣雨';
        }else if(cityData.wxCondition == '多雲時晴'){
            var src = '多雲時晴';
        }else if(cityData.wxCondition == '多雲時晴-1'){
            var src = '多雲時晴-1';
        }else if(cityData.wxCondition == '多雲短暫雨'){
            var src = '多雲短暫雨';
        }else if(cityData.wxCondition == '多雲短暫雨-1'){
            var src = '多雲短暫雨-1';
        }else if(cityData.wxCondition == '陰天'){
            var src = '陰天';
        }else if(cityData.wxCondition == '陰時多雲'){
            var src = '陰時多雲';
        }else if(cityData.wxCondition == '陰時多雲短暫雨'){
            var src = '陰時多雲短暫雨';
        }else if(cityData.wxCondition == '陰時多雲短暫陣雨'){
            var src = '陰時多雲短暫陣雨';
        }else if(cityData.wxCondition == '陰短暫雨'){
            var src = '陰短暫雨';
        }else if(cityData.wxCondition == '陰短暫陣雨'){
            var src = '陰短暫陣雨';
        }else if(cityData.wxCondition == '晴時多雲'){
            var src = '晴時多雲';
        }else {
            var src = '晴時多雲-1';
        }


        innerbox.innerHTML += 
            `<div class="innerbox" style="background-image: url('img/paper1.png');">
            
                <div class="inner-top">
                    <p class="p-city">${city}</p>
                    <p class="p-st">${cityData.startTime.substr(0, 16).replaceAll('-', "/")}
                   
                    <p class="p-et">${cityData.endTime.substr(0, 16).replaceAll('-', "/")}</p>
                    <p class="p-con">${cityData.wxCondition}</p>
                </div>
                <div class="inner-bottom">
                    <p class="p-t">${cityData.minT}°C ~ ${cityData.maxT}°C</p>
                    <p class="p-pop">${cityData.pop} %</p>
                    <p class="p-ci">${cityData.ci}</p>
                </div>
                <div class="in-innerbox">
                    <img src="img/pngsucai_1.png" width="50" height="50" alt="">
                </div>
                <div class="img-box">
                    <img src="img/${src}.svg" alt="">
                </div>
             </div>`;
    });

}







