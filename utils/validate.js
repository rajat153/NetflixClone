export const validate = (email, password) => {
    const validateEmail = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email);
    const validatePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const validateName = /([a-zA-Z0-9_\s]+)/.test(name);

    if(!validateEmail) return 'Email Id is not valid';
    if(!validatePassword) return 'Password is not valid';
    // if(!validateName) return 'Name is not valid';

    return null;
}