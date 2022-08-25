const calc = (size, material, options, promocode, result, state) => {
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value === "" || materialBlock.value === "") {
            resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
        } else if (promocodeBlock.value === "IWANTPOPART") {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    function changeStateProp (e) {
        let target = e.target;

        if (target.id) {
            state[target.id] = target.value;
        } else {
            state[target.className] = target.value;
        }

        state['sum'] = sum;
        console.log(state);
    }

    function bindActionToElem (event, elem) {
        elem.addEventListener(event, calcFunc);
        elem.addEventListener(event, changeStateProp);
    }

    bindActionToElem('change', sizeBlock);
    bindActionToElem('change', materialBlock);
    bindActionToElem('change', optionsBlock);
    bindActionToElem('input', promocodeBlock);

};

export default calc;