window.onload = () => {
    let flavorList = prompt("Please enter your froyo flavors divded by commas");
    flavorList = flavorList.replace(prompt);
    let flavorArray = flavorList.split(`,`);
    const countFlavors = array => {
        let flavorCount = {};
        array.forEach(flavor => {
            if(!flavorCount[flavor]) {
                flavorCount[flavor] = 1
            }
            else {
                    flavorCount[flavor]++;
            }
        })
        return flavorCount;
    }
    let flavorObject = countFlavors(flavorArray);
    console.table(flavorObject);
}