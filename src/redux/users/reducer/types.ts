export interface UserT {
  name: string
  id: number
  uniqueUrlName: string | null
  photos: {
    small: string | null
    large: string | null
  }
  status: string | null
  followed: boolean
}

export interface ProgressFollowT {
  isFetch: boolean
  userId: number[]
}

export interface UsersST {
  list: UserT[]
  totalCount: number
  pageSize: number
  currentPage: number
  isPageLoading: boolean
  progressFollow: ProgressFollowT
}
