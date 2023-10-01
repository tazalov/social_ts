import { Field, Form, Formik, FormikHelpers } from 'formik'
import { FC, useEffect, useState } from 'react'

import { C } from '../../../../app/styles/Common.styled'
import { Button, ErrorField, Input, Loading, TitleBlock } from '../../../../components'
import { ProfileT } from '../../../../redux/profile-reducer'
import { ProfileSchema } from '../../../../utils/validators/validators'

type ProfileEditFormPT = {
  profile: ProfileT
  error: string
  updateProfile: (profile: Omit<ProfileT, 'photos'>) => void
}

export const ProfileEditForm: FC<ProfileEditFormPT> = ({ profile, error, updateProfile }) => {
  const initialFields = {
    fullName: profile.fullName,
    aboutMe: profile.aboutMe || '',
    lookingForAJob: profile.lookingForAJob,
    lookingForAJobDescription: profile.lookingForAJobDescription || '',
    contacts: {
      facebook: profile.contacts.facebook || '',
      website: profile.contacts.website || '',
      vk: profile.contacts.vk || '',
      twitter: profile.contacts.twitter || '',
      instagram: profile.contacts.instagram || '',
      youtube: profile.contacts.youtube || '',
      github: profile.contacts.github || '',
      mainLink: profile.contacts.mainLink || '',
    },
  }
  const [isMounted, setIsMounted] = useState(true)

  useEffect(() => {
    setIsMounted(true)

    return () => {
      setIsMounted(false)
    }
  }, [])

  const onSubmit = (values: typeof initialFields, props: FormikHelpers<typeof initialFields>) => {
    updateProfile({ userId: profile.userId, ...values })
    console.log(values)
    if (isMounted) {
      props.setSubmitting(false)
    }
  }

  return (
    <Formik initialValues={initialFields} onSubmit={onSubmit} validationSchema={ProfileSchema}>
      {(props) => {
        const { errors, touched, isSubmitting } = props
        const keysContacts = Object.keys(initialFields.contacts) as (keyof (typeof initialFields)['contacts'])[]
        const arrayFieldsContacts = keysContacts.map((el, i) => (
          <Field
            key={i}
            id={`${el}_profile`}
            as={Input}
            label={el}
            name={`contacts.${el}`}
            error={errors.contacts && errors.contacts[el] && touched.contacts && touched.contacts[el]}
            errorText={errors.contacts && errors.contacts[el]}
            style={{ padding: '5px' }}
            rows
          />
        ))
        return (
          <Form>
            <TitleBlock title={'PROFILE INFO'} />
            <C.FlexWrapper
              $direction={'column'}
              $gap={'15px'}
              $justify={'center'}
              $align={'center'}
              style={{ padding: '10px' }}
            >
              <Field
                id={`fullName_profile`}
                as={Input}
                label={'Full name'}
                name={`fullName`}
                error={errors.fullName && touched.fullName}
                errorText={errors.fullName}
                style={{ padding: '5px' }}
              />
              <Field
                id={`aboutMe_profile`}
                as={Input}
                label={'About me'}
                name={`aboutMe`}
                error={errors.aboutMe && touched.aboutMe}
                errorText={errors.aboutMe}
                style={{ padding: '5px' }}
              />
              <Field
                id={'lookingForAJob_profile'}
                as={Input}
                label={'Looking job'}
                name={'lookingForAJob'}
                type={'checkbox'}
                rows
              />
              <Field
                id={`lookingForAJobDescription_profile`}
                as={Input}
                name={`lookingForAJobDescription`}
                error={errors.lookingForAJobDescription && touched.lookingForAJobDescription}
                errorText={errors.lookingForAJobDescription}
                style={{ padding: '5px' }}
              />
            </C.FlexWrapper>
            <TitleBlock title={'CONTACTS'} />
            <C.FlexWrapper
              $direction={'column'}
              $gap={'15px'}
              $justify={'center'}
              $align={'flex-end'}
              style={{ padding: '10px' }}
            >
              {arrayFieldsContacts}
            </C.FlexWrapper>
            <C.FlexWrapper
              $direction={'column'}
              $gap={'15px'}
              $justify={'center'}
              $align={'center'}
              style={{ padding: '10px' }}
            >
              {error && <ErrorField>{error}</ErrorField>}
              {isSubmitting ? (
                <Loading />
              ) : (
                <Button type='submit' disabled={Object.keys(errors).length > 0}>
                  save
                </Button>
              )}
            </C.FlexWrapper>
          </Form>
        )
      }}
    </Formik>
  )
}
