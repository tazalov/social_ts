import { Field, Form, Formik, FormikHelpers } from 'formik'
import styled from 'styled-components'
import { C } from '../../app/styles/Common.styled'
import { TextFormSchema } from '../../utils/validators/validators'
import { Button } from '../button/Button'
import { ErrorField } from '../errorField/ErrorField'
import { Loading } from '../icon/Loading'

type TextFormPT = {
  placeholder: string
  callback: (value: string) => void
}

export function TextForm({ placeholder, callback }: TextFormPT) {
  const initialFields = { text: '' }

  const onSubmit = (values: typeof initialFields, props: FormikHelpers<typeof initialFields>) => {
    callback(values.text)
    props.resetForm()
    props.setSubmitting(false)
  }

  return (
    <Formik initialValues={initialFields} onSubmit={onSubmit} validationSchema={TextFormSchema}>
      {props => {
        const { errors, touched, isSubmitting, setFieldError } = props
        const handleBlur = () => {
          if (touched.text) {
            setFieldError('text', undefined)
          }
        }

        return (
          <Form>
            <C.FlexWrapper $gap={'10px'} $align={'center'}>
              <Field
                as={StyledTextArea}
                name={'text'}
                type={'text'}
                onBlur={handleBlur}
                placeholder={placeholder}
              />
              {isSubmitting ? (
                <Loading />
              ) : (
                <Button title={'send'} type={'submit'} disable={Object.keys(errors).length > 0} />
              )}
            </C.FlexWrapper>
            {errors.text && touched.text && <ErrorField>{errors.text}</ErrorField>}
          </Form>
        )
      }}
    </Formik>
  )
}

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 5px;
  color: ${props => props.theme.colors.primaryFont};
  background-color: ${props => props.theme.colors.thirdBg};
  font-family:
    'Rubik',
    -apple-system,
    BlinkMacSystemFont,
    'Arial',
    sans-serif;
`
