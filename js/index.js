const valueInputEl = document.getElementById('valueInput');
const convertBtn = document.getElementById('convertBtn')
let valueEl  = document.querySelector('.value_el');


convertBtn.addEventListener ('click', () => {
    let inputValue = valueInputEl.value;
    const foot = 0.3048;
    const calcFeet = () => {
        const meterToFeet = inputValue / foot;
        console.log(meterToFeet);
        const feet = meterToFeet.toFixed(3);
        console.log(feet);
        return feet;
    }
    const calcMeter = () => {
        const feetToMeter = inputValue * foot;
        console.log(feetToMeter);
        const meterValue = feetToMeter.toFixed(3);
        console.log(meterValue);
        return meterValue;
    }
    const calcGallon = () => {
        const literToGallon = inputValue * 0.2199;
        const literValue = literToGallon.toFixed(3);
        return literValue;
    }
    const calcLiter = () => {
        const gallonToLiter = inputValue / 0.2199
        const gallonValue = gallonToLiter.toFixed(3);
        return gallonValue;
    }
    const calcPound = () => {
        const kiloToPound = inputValue * 2.2046;
        const poundValue = kiloToPound.toFixed(3);
        return poundValue;
    }
    const calcKilogram = () => {
        const poundToKilo = inputValue / 2.2046
        const gallonValue = poundToKilo.toFixed(3);
        return gallonValue;
    }
    const length_M_to_I = () => {
        document.getElementById('lengthEl').textContent = `${valueEl.textContent} meters = ${calcFeet()} feet | ${valueEl.textContent}  feet = ${calcMeter()} meters`;
        document.getElementById('volumeEl').textContent = `${valueEl.textContent} liters = ${calcGallon()} gallons | ${valueEl.textContent} gallons = ${calcLiter()} liters`;
        document.getElementById('massEl').textContent = `${valueEl.textContent} kilos = ${calcPound()} pounds | ${valueEl.textContent} pounds = ${calcKilogram()} kilos`;
    }
    length_M_to_I ();
    valueInputEl.value = ''
})





