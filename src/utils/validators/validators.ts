import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const LoginSchema = yup.object().shape({
  email: yup.string().email('Email is not valid').required('Required'),
  password: yup.string().matches(passwordRules, { message: 'Password no stronger' }).required('Required'),
})

export const ProfileSchema = yup.object().shape({
  fullName: yup.string().required('Required').min(2, 'Min 5 characters').max(150, 'Max count characters - 30'),
  aboutMe: yup.string().required('Required').max(150, 'Max count characters - 100'),
  lookingForAJobDescription: yup.string().required('Required').max(150, 'Max count characters - 100'),
})

export const TextFormSchema = yup.object().shape({
  text: yup.string().required('Required').min(2, 'Min 2 characters').max(150, 'Max count characters - 150'),
})
