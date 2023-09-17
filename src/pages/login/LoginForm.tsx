import { Field, Form, Formik, FormikHelpers } from 'formik'
import { FC } from 'react'
import { Button } from '../../components/button/Button'
import { Loading } from '../../components/icon/Loading'
import { Input } from '../../components/input/Input'
import { C } from '../../app/styles/Common.styled'
import { LoginSchema } from '../../app/utils/validators/validators'

interface LoginFormPT {
  loginUser: (email: string, password: string, rememberMe: boolean) => void
}

export const LoginForm: FC<LoginFormPT> = ({ loginUser }) => {
  const initialFields = {
    email: '',
    password: '',
    remember: false,
  }
  const onSubmit = (values: typeof initialFields, props: FormikHelpers<typeof initialFields>) => {
    loginUser(values.email, values.password, values.remember)
    props.resetForm()
    props.setSubmitting(false)
  }

  return (
    <Formik initialValues={initialFields} onSubmit={onSubmit} validationSchema={LoginSchema}>
      {props => {
        const { errors, touched, isSubmitting, setFieldError } = props
        const handleBlur = (fieldName: 'email' | 'password') => () => {
          if (touched[fieldName]) {
            setFieldError(fieldName, undefined)
          }
        }
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
                onBlur={handleBlur}
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
                onBlur={handleBlur}
                error={errors.password && touched.password}
                errorText={errors.password}
                style={{ padding: '10px' }}
              />
              <Field as={Input} label={'Remember me'} name={'remember'} type={'checkbox'} />
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
