$(document).ready(function() {
    var dollars = 0;
    var output = "";
    var a;
    var b;
    var c;
    var inr;
    var price;
    if(window.location.href.indexOf("/") != -1) {
        {
            dollars = document.getElementsByClassName("_30jeq3 _16Jk6d")[0].innerHTML;
            console.log(dollars);
        }
    }
    output = (dollars);
    console.log(dollars);
    dollars = output.substring(1);
    output = dollars.replace(/,/g, '');
    const api_url1 = "https://api.xchangeapi.com/latest?base=USD&api-key=Frh1hSUBq3ej3RIjtTx5UWqbaqObM3Cz";
    async function getapi(url) {
        const response = await fetch(url);
        var data = await response.json();
        inr = data.rates.INR;
    }
    getapi(api_url1);
    let ws1 = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
    ws1.onmessage = (event) => {
        let stockobject = JSON.parse(event.data);
        price = output;
        a = (price) / (stockobject.p * (inr));
        $("#extension_total").remove();
        $("#container").prepend("<div id='extension_total'><h1>" + "BTC:- " + +a + "</h1></div>");
    };
    let ws2 = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
    ws2.onmessage = (event) => {
        let stockobject = JSON.parse(event.data);
        b = (price) / (stockobject.p * (inr));
        $("#extension_total1").remove();
        $("#container").prepend("<div id='extension_total1'><h1>" + "ETH:- " + +b + "</h1></div>");
    };
    let ws3 = new WebSocket('wss://stream.binance.com:9443/ws/ltcusdt@trade');
    ws3.onmessage = (event) => {
        let stockobject = JSON.parse(event.data);
        c = (price) / (stockobject.p * (inr));
        $("#extension_total2").remove();
        $("#container").prepend("<div id='extension_total2'><h1>" + "LTC:- " + +c + "</h1></div>");
    };
});