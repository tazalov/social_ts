import { Field, Form, Formik, FormikHelpers } from 'formik'
import { FC, useEffect, useState } from 'react'

import { C } from '../../app/styles/Common.styled'
import { Button, ErrorField, Input, Loading } from '../../components'
import { LoginSchema } from '../../utils/validators/validators'

interface LoginFormPT {
  captcha: string
  error: string
  loginUser: (email: string, password: string, rememberMe: boolean, captcha: string) => any
}

export const LoginForm: FC<LoginFormPT> = ({ captcha, error, loginUser }) => {
  const initialFields = {
    email: '',
    password: '',
    captcha,
    remember: false,
  }

  const [isMounted, setIsMounted] = useState(true)

  useEffect(() => {
    setIsMounted(true)

    return () => {
      setIsMounted(false)
    }
  }, [])

  const onSubmit = (values: typeof initialFields, props: FormikHelpers<typeof initialFields>) => {
    loginUser(values.email, values.password, values.remember, values.captcha)
    if (isMounted) {
      props.setSubmitting(false)
    }
  }

  return (
    <Formik initialValues={initialFields} onSubmit={onSubmit} validationSchema={LoginSchema}>
      {(props) => {
        const { errors, touched, isSubmitting } = props
        return (
          <Form style={{ maxWidth: '500px', margin: '20px auto' }}>
            <C.FlexWrapper $direction={'column'} $gap={'20px'} $justify={'center'} $align={'center'}>
              <Field
                id={'email_login'}
                as={Input}
                label={'E-mail *'}
                name={'email'}
                type={'email'}
                placeholder={'Enter you email'}
                error={errors.email && touched.email}
                errorText={errors.email}
                style={{ padding: '10px' }}
              />
              <Field
                id={'password_login'}
                as={Input}
                label={'Password *'}
                name={'password'}
                type={'password'}
                placeholder={'Enter your password'}
                error={errors.password && touched.password}
                errorText={errors.password}
                style={{ padding: '10px' }}
              />
              <Field id={'remember_login'} as={Input} label={'Remember me'} name={'remember'} type={'checkbox'} />
              {captcha && (
                <Field
                  id={'captcha_login'}
                  as={Input}
                  label={<img src={captcha} alt='asd' />}
                  name={'captcha'}
                  type={'text'}
                  placeholder={'Enter captcha'}
                  error={errors.captcha && touched.captcha}
                  errorText={errors.captcha}
                  style={{ padding: '10px' }}
                />
              )}
              {error && <ErrorField>{error}</ErrorField>}
              {isSubmitting ? (
                <Loading />
              ) : (
                <Button type='submit' disabled={Object.keys(errors).length > 0}>
                  login
                </Button>
              )}
            </C.FlexWrapper>
          </Form>
        )
      }}
    </Formik>
  )
}
