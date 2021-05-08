// RegisterForm.js

// react
import { React } from "react";

// form ui
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import {
	FormGroup,
	Typography,
	FormControl,
	InputAdornment,
	IconButton,
	FormHelperText,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import clsx from "clsx";

export default function RegisterForm({
    first_name, changeFirstName,
    last_name, changeLastName,
    email, changeEmail,
    username, changeUsername,
    password, changePassword,
    repassword, changeRepassword,
    phone_number, changePhoneNumber,
    classes, values,
    handleClickShowPassword, handleRepassword
}) {
    return (
        
    <div>
        {/* name form group */}
        <TextField
            required
            onChange={(event) => changeFirstName(event.target.value)}
            value={first_name}
            id="first_name"
            label="First Name"
            placeholder="Anh"
        />
        <TextField
            required
            onChange={(event) => changeLastName(event.target.value)}
            value={last_name}
            id="last_name"
            label="Last Name"
            placeholder="Nguyen"
        />
        {/* email form group */}

        <TextField
            required
            id="email"
            label="E-mail"
            placeholder="mail@example.com"
            // className={classes.spanOneRow}
            onChange={(event) => changeEmail(event.target.value)}
            value={email}
        ></TextField>
        <TextField
            required
            id="phone"
            label="Phone number"
            placeholder="+1 555 666 7777"
            // className={classes.spanOneRow}
            onChange={(event) => changePhoneNumber(event.target.value)}
            value={phone_number}
        ></TextField>

        {/* username form group */}

        <TextField
            required
            id="username"
            label="Username"
            placeholder="aaanh"
            helperText="Must start with a letter and contain up to 12 alphanumeric characters."
            className={classes.spanOneRow}
            onChange={(event) => changeUsername(event.target.value)}
            value={username}
        ></TextField>

        {/* password form group */}
        <FormGroup>
            <FormControl className={clsx(classes.passwordField)} required>
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <Input
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => changePassword(event.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                // onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? (
                                    <Visibility />
                                ) : (
                                    <VisibilityOff />
                                )}
                            </IconButton>
                        </InputAdornment>
                    }
                    labelWidth={82}
                />
            </FormControl>
            <FormControl className={clsx(classes.passwordField)} required>
                <InputLabel htmlFor="outlined-adornment-password">
                    Re-enter Password
                </InputLabel>
                <Input
                    error={!values.passwordMatch}
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={repassword}
                    onChange={(event) => changeRepassword(event.target.value)}
                    onKeyUp={handleRepassword}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                // onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? (
                                    <Visibility />
                                ) : (
                                    <VisibilityOff />
                                )}
                            </IconButton>
                        </InputAdornment>
                    }
                    labelWidth={150}
                />
                {values.passwordMatch ? (
                    " "
                ) : (
                    <FormHelperText id="re-enter-password-error-text">
                        Passwords do not match.
                    </FormHelperText>
                )}
            </FormControl>
        </FormGroup>
        {/* submission form group */}
        <hr></hr>
        <FormGroup>
            <Typography align="center" color="textSecondary">
                By signing up, I accept <a href="">Terms of Service</a> <br></br>and
                acknowledge the <a href="">Privacy Policy</a>.
            </Typography>
            <Button
                type="submit"
                variant="contained"
                size="large"
                className={clsx(classes.margin, classes.signUpButton)}
            >
                Sign up
            </Button>
        </FormGroup>
        <Typography variant="h5" align="center">
            or
        </Typography>
        <FormGroup className={classes.margin}>
            <Button
                variant="contained"
                size="large"
                className={clsx(classes.margin, classes.signUpButtonGoogle)}
            >
                Sign up by Google
            </Button>
            <Button
                variant="contained"
                size="large"
                className={clsx(classes.margin, classes.signUpButtonLinkedIn)}
            >
                Sign up by LinkedIn
            </Button>
            <Button
                variant="contained"
                size="large"
                className={clsx(classes.margin, classes.signUpButtonApple)}
            >
                Sign up by Apple
            </Button>
        </FormGroup>
    </div>
    )
}