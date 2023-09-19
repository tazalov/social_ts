import { Field, Form, Formik, FormikHelpers } from 'formik'
import { FC } from 'react'
import { C } from '../../app/styles/Common.styled'
import { LoginSchema } from '../../app/utils/validators/validators'
import { Button, ErrorField, Input, Loading } from '../../components'

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
  const onSubmit = async (
    values: typeof initialFields,
    props: FormikHelpers<typeof initialFields>,
  ) => {
    await loginUser(values.email, values.password, values.remember, values.captcha)
    if (!error) {
      props.resetForm()
    }
    props.setSubmitting(false)
  }

  return (
    <Formik initialValues={initialFields} onSubmit={onSubmit} validationSchema={LoginSchema}>
      {props => {
        const { errors, touched, isSubmitting } = props
        return (
          <Form style={{ maxWidth: '500px', margin: '20px auto' }}>
            <C.FlexWrapper
              $direction={'column'}
              $gap={'20px'}
              $justify={'center'}
              $align={'center'}
            >
              <Field
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
                as={Input}
                label={'Password *'}
                name={'password'}
                type={'password'}
                placeholder={'Enter your password'}
                error={errors.password && touched.password}
                errorText={errors.password}
                style={{ padding: '10px' }}
              />
              <Field as={Input} label={'Remember me'} name={'remember'} type={'checkbox'} />
              {captcha && (
                <Field
                  as={Input}
                  label={<img src={captcha} alt="asd" />}
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
                <Button type="submit" title={'login'} disable={Object.keys(errors).length > 0} />
              )}
            </C.FlexWrapper>
          </Form>
        )
      }}
    </Formik>
  )
}
