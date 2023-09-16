import { Field, Form, Formik, FormikHelpers } from 'formik'
import { FC } from 'react'
import { Button } from '../../components/button/Button'
import { Loading } from '../../components/icon/Loading'
import { Input } from '../../components/input/Input'
import { C } from '../../styles/Common.styled'
import { LoginSchema } from '../../utils/validators/validators'

export const LoginForm: FC = () => {
  const initialFields = {
    email: '',
    password: '',
    remember: false,
  }
  const onSubmit = (values: typeof initialFields, props: FormikHelpers<typeof initialFields>) => {
    console.log(values)
    console.log(props)
    setTimeout(() => {
      props.resetForm()
      props.setSubmitting(false)
    }, 2000)
  }

  return (
    <Formik initialValues={initialFields} onSubmit={onSubmit} validationSchema={LoginSchema}>
      {props => {
        const { errors, touched, isSubmitting } = props
        console.log(errors)
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
                label={'E-mail'}
                name={'email'}
                type={'email'}
                placeholder={'Enter you email'}
                style={{ padding: '10px' }}
                error={errors.email && touched.email}
                errorText={errors.email}
              />
              <Field
                as={Input}
                label={'Password'}
                name={'password'}
                type={'password'}
                placeholder={'Enter your password'}
                style={{ padding: '10px' }}
                error={errors.password && touched.password}
                errorText={errors.password}
              />
              <Field as={Input} label={'Remember me'} name={'remember'} type={'checkbox'} />
              <Button
                type="submit"
                title={isSubmitting ? <Loading /> : 'login'}
                disable={Object.keys(errors).length > 0}
              />
            </C.FlexWrapper>
          </Form>
        )
      }}
    </Formik>
  )
}
