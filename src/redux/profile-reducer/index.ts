export { profileReducer } from './model/profile.reducer'
export { getUserProfile, getFriendsProfile, getStatusProfile, updateStatusProfile } from './model/thunks/profile.thunks'
export { addPost } from './model/actions/profile.actions'
export type { ContactsT, ProfileT, ProfileST, FriendT, FriendsT, PostT, PhotosT } from './types/profile.reducer'
