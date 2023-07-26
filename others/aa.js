async function weatherControl() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => resolve("40 Deg"), 1000)
    })

    let bangaloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => resolve("25 Deg"), 7000)
    })

    // delhiWeather.then(alert);
    // bangaloreWeather.then(alert);
    // delhiWeather.then(console.log);
    // bangaloreWeather.then(console.log);
    console.log("Fetching Delhi weather please wait...");
    let delhiw = await delhiWeather;
    console.log(`Fetched Delhi weather. Temperature : ${delhiw}`);

    console.log("Fetching Banglore weather please wait...");
    let bangalorew = await bangaloreWeather;
    console.log(`Fetched Bangalore weather. Temperature : ${bangalorew}`);
    return [delhiw, bangalorew];
}

const notification = async () => {
    console.log("Hey, parcel has arrived");
    alert("Hey, parcel has arrived");
}

const main1 = async () => {
    let weather = await weatherControl();
    let notfify = await notification();

}

main1();

// weather.then((value) => {
//     console.log(value);
// })

// notification();