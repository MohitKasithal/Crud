import * as Yup from "yup";
const lowercaseRegex = /(?=.*.[a-z])/;
const uppercaseRegex = /(?=.*.[A-Z])/;
const numberRegex = /(?=.*.[0-9])/;
export const LoginSchema = Yup.object({
  email: Yup.string()
    .email()
    .required("Please enter your Email")
    .test("Validate Email", (value) => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(value).toLowerCase());
    }),
  password: Yup.string()
    .matches(
      /[a-zA-Z]+[^a-zA-Z\s]+/,
      "at least 1 number or special char (@,!,#, etc)."
    )
    .matches(uppercaseRegex, "one uppercase required!")
    // .matches(lowercaseRegex, "one lowercase letter required!")
    // .matches(numberRegex, "one number required!")
    .min(8)
    .required("Please enter your Password"),
});
