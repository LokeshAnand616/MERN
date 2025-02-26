export const validateForm = (name, value, formData) => {
    let error = "";
    let strength = 0;

    if (name === "userName") {
        error = value.length < 4 ? "Username must be at least 4 characters long" : "";
    } else if (name === "email") {
        error = /\S+@\S+\.\S+/.test(value) ? "" : "Invalid email format";
    } else if (name === "password") {
        if (value.length >= 8) strength += 25;
        if (/[A-Z]/.test(value)) strength += 25;
        if (/[a-z]/.test(value)) strength += 25;
        if (/\W/.test(value)) strength += 25;

        error =
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\W).{8,}$/.test(value)
                ? ""
                : "Password must be at least 8 characters long, include 1 uppercase, 1 lowercase, and 1 special character";

    } else if (name === "confirmPassword") {
        error = value !== formData.password ? "Passwords do not match" : "";
    }

    return { error, strength: name === "password" ? strength : undefined };
};

