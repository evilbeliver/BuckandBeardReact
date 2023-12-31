export const validateContactForm =(values) => {
    const errors ={};

    if (!values.firstName) {
        errors.firstName ='Required';
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Must be at least 2 characters. ';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }
    if (!values.lastName) {
        errors.lastName ='Required';
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Must be at least 2 characters. ';
    } else if (values.lastName.length > 15) {
        errors.lastName = 'Must be 15 characters or less';
    }

    const reg = /^\d{10}$/;
    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'Invalid Phone Number.';
    }

    if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }

    return errors;
}