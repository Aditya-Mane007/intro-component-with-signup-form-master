const form = document.querySelector('.form');
const fname = document.querySelector('.fname');
const lname = document.querySelector('.lname');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	const fnameValue = fname.value.trim();
	const lnameValue = lname.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

	// validate Fist Name
	if (fnameValue === '') {
		setError(fname, 'First name cannot be empty');
	} else {
		setSuccess(fname);
	}
    
    // validate Last Name
    if (lnameValue === '') {
		setError(lname, 'Last name cannot be empty');
	} else {
		setSuccess(lname);
    }
    
    // validate Email 
    if (emailValue === '') {
		setError(email, 'Email cannot be empty');
	} else if (!isEmail(emailValue)) {
		setError(email, 'This is not look like email');
	} else {
		setSuccess(email);
	}
    
    // validate Password
    if (passwordValue === '') {
		setError(password, 'Password cannot be empty');
	} else {
		setSuccess(password);
	}
}

function setError(input, msg) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = msg;
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email);
} 