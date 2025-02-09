const uname = document.querySelector('#uname');
const pass = document.querySelector('#pass');
const confirmPass = document.querySelector('#confirm-pass');
const email = document.querySelector('#email');
const btnContainer = document.querySelector('.btn-container');
const btn = document.querySelector('#signup-btn');
const form = document.querySelector('form');
const msg = document.querySelector('.msg');
btn.disabled = true;

function shiftButton() {
    showMsg();
    const positions = ['shift-left', 'shift-top', 'shift-right', 'shift-bottom'];
    const currentPosition = positions.find(dir => btn.classList.contains(dir));
    const nextPosition = positions[(positions.indexOf(currentPosition) + 1) % positions.length];
    btn.classList.remove(currentPosition);
    btn.classList.add(nextPosition);
}

function showMsg() {
    const isEmpty =
        uname.value === '' ||
        pass.value === '' ||
        confirmPass.value === '' ||
        email.value === '' ||
        pass.value !== confirmPass.value;

    btn.classList.toggle('no-shift', !isEmpty);

    if (isEmpty) {
        btn.disabled = true;
        msg.style.color = 'rgb(218 49 49)';

        // Display specific error messages
        if (uname.value === '' || email.value === '' || pass.value === '' || confirmPass.value === '') {
            msg.innerText = 'Please fill all the input fields before proceeding';
        } else if (pass.value !== confirmPass.value) {
            msg.innerText = 'Passwords do not match!';
        }
    } else {
        msg.innerText = 'Great! All fields are valid.';
        msg.style.color = '#92ff92';
        btn.disabled = false;
        btn.classList.add('no-shift');
    }
}

btnContainer.addEventListener('mouseover', shiftButton);
btn.addEventListener('mouseover', shiftButton);
form.addEventListener('input', showMsg);
btn.addEventListener('touchstart', shiftButton);
