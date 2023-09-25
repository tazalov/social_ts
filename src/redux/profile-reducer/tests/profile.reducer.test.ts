import { addPost, setFriendsProfile, setProfile, setProfileLoading, setStatus } from '../model/actions/profile.actions'
import { profileReducer } from '../model/profile.reducer'
import { ProfileST, ProfileT } from '../types/profile.reducer'

const startState: ProfileST = {
  profile: null,
  posts: [
    {
      id: 1,
      user: 'Tazalov',
      text: "it' my first post",
      likes: 12,
    },
  ],
  friends: null,
  status: '',
  isProfileLoading: false,
  errorUpdate: '',
}

describe('profileReducer', () => {
  it('new post has been added', () => {
    const action = addPost('new post text')

    const endState = profileReducer(startState, action)

    expect(endState.posts.length).toBe(2)
    expect(endState.posts[1].id).toBe(3)
    expect(endState.posts[1].text).toBe('new post text')
  })

  it('correct profile has been added', () => {
    const profile: ProfileT = {
      aboutMe: 'about',
      contacts: {
        facebook: null,
        website: null,
        vk: null,
        twitter: null,
        instagram: null,
        youtube: null,
        github: null,
        mainLink: null,
      },
      lookingForAJob: true,
      lookingForAJobDescription: null,
      fullName: 'Fullname',
      userId: 123,
      photos: {
        small: null,
        large: null,
      },
    }
    const action = setProfile(profile)

    const endState = profileReducer(startState, action)

    expect(endState.profile).toEqual(profile)
  })

  it('state for isProfileLoading is set correctly', () => {
    const action = setProfileLoading(true)

    const endState = profileReducer(startState, action)

    expect(endState.isProfileLoading).toBeTruthy()
  })

  it('status is set correctly', () => {
    const action = setStatus('new status')

    const endState = profileReducer(startState, action)

    expect(endState.status).toBe('new status')
  })

  it('correct friends list has been added', () => {
    const friend = {
      name: 'FriendName',
      id: 123,
      uniqueUrlName: null,
      photos: {
        small: null,
        large: null,
      },
      status: 'My status',
      followed: false,
    }
    const action = setFriendsProfile([friend], 10)

    const endState = profileReducer(startState, action)

    expect(endState.friends?.list.length).toBe(1)
    expect(endState.friends?.count).toBe(10)
    expect(endState.friends?.list[0]).toEqual(friend)
  })
})
