const mask = (selector) => {

    let setCursorPosition = (pos, elem) => {
        elem.focus();
        elem.setSelectionRange(pos, pos);
    };

    function noChangePrefix(event) {
        let e = event.target;
        // console.log('Caret at: ', e.selectionStart);
        if ((e.selectionStart || e.selectionEnd) < 2) {
            e.selectionStart = 3;
            e.selectionEnd = 3;
        }
    }

    function createMask(event) {
        let matrix = '+7 (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if (event.type === 'blur') {
            if (this.value.length === 2) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('keydown', noChangePrefix);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    });

};

export default mask;