import { User } from "./User";
import { ShadowContainerStyled } from "../../components/ShadowContainer.styled";
import styled from "styled-components";
import { UserT } from "../../redux/users.reducer";

type UsersPT = {
  list: UserT[];
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  setUsers: (user: UserT[]) => void;
};

export function Users({ list, follow, unfollow, setUsers }: UsersPT) {
  if (!list.length) {
    setUsers([
      {
        name: "Zhenya_pas",
        id: 19589,
        uniqueUrlName: null,
        photos: {
          small:
            "https://social-network.samuraijs.com/activecontent/images/users/19589/user-small.jpg?v=1",
          large:
            "https://social-network.samuraijs.com/activecontent/images/users/19589/user.jpg?v=1",
        },
        status: "No money, no honey!",
        followed: false,
      },
      {
        name: "Arseniy",
        id: 19588,
        uniqueUrlName: null,
        photos: {
          small:
            "https://social-network.samuraijs.com/activecontent/images/users/19588/user-small.jpg?v=1",
          large:
            "https://social-network.samuraijs.com/activecontent/images/users/19588/user.jpg?v=1",
        },
        status: "",
        followed: false,
      },
      {
        name: "Alabaika",
        id: 1958,
        uniqueUrlName: null,
        photos: {
          small:
            "https://social-network.samuraijs.com/activecontent/images/users/19587/user-small.jpg?v=1",
          large:
            "https://social-network.samuraijs.com/activecontent/images/users/19587/user.jpg?v=1",
        },
        status: "it's my status",
        followed: false,
      },
      {
        name: "Zhenya_pas",
        id: 1989,
        uniqueUrlName: null,
        photos: {
          small:
            "https://social-network.samuraijs.com/activecontent/images/users/19589/user-small.jpg?v=1",
          large:
            "https://social-network.samuraijs.com/activecontent/images/users/19589/user.jpg?v=1",
        },
        status: "No money, no honey!",
        followed: false,
      },
      {
        name: "Arseniy",
        id: 9588,
        uniqueUrlName: null,
        photos: {
          small:
            "https://social-network.samuraijs.com/activecontent/images/users/19588/user-small.jpg?v=1",
          large:
            "https://social-network.samuraijs.com/activecontent/images/users/19588/user.jpg?v=1",
        },
        status: "",
        followed: false,
      },
      {
        name: "Alabaika",
        id: 195,
        uniqueUrlName: null,
        photos: {
          small:
            "https://social-network.samuraijs.com/activecontent/images/users/19587/user-small.jpg?v=1",
          large:
            "https://social-network.samuraijs.com/activecontent/images/users/19587/user.jpg?v=1",
        },
        status: "it's my status",
        followed: false,
      },
      {
        name: "Zhenya_pas",
        id: 18,
        uniqueUrlName: null,
        photos: {
          small:
            "https://social-network.samuraijs.com/activecontent/images/users/19589/user-small.jpg?v=1",
          large:
            "https://social-network.samuraijs.com/activecontent/images/users/19589/user.jpg?v=1",
        },
        status: "No money, no honey!",
        followed: false,
      },
      {
        name: "Arseniy",
        id: 958,
        uniqueUrlName: null,
        photos: {
          small:
            "https://social-network.samuraijs.com/activecontent/images/users/19588/user-small.jpg?v=1",
          large:
            "https://social-network.samuraijs.com/activecontent/images/users/19588/user.jpg?v=1",
        },
        status: "",
        followed: false,
      },
      {
        name: "Alabaika",
        id: 95,
        uniqueUrlName: null,
        photos: {
          small:
            "https://social-network.samuraijs.com/activecontent/images/users/19587/user-small.jpg?v=1",
          large:
            "https://social-network.samuraijs.com/activecontent/images/users/19587/user.jpg?v=1",
        },
        status: "it's my status",
        followed: false,
      },
      {
        name: "Zhenya_pas",
        id: 8,
        uniqueUrlName: null,
        photos: {
          small:
            "https://social-network.samuraijs.com/activecontent/images/users/19589/user-small.jpg?v=1",
          large:
            "https://social-network.samuraijs.com/activecontent/images/users/19589/user.jpg?v=1",
        },
        status: "No money, no honey!",
        followed: false,
      },
      {
        name: "Arseniy",
        id: 5,
        uniqueUrlName: null,
        photos: {
          small:
            "https://social-network.samuraijs.com/activecontent/images/users/19588/user-small.jpg?v=1",
          large:
            "https://social-network.samuraijs.com/activecontent/images/users/19588/user.jpg?v=1",
        },
        status: "",
        followed: false,
      },
      {
        name: "Alabaika",
        id: 1,
        uniqueUrlName: null,
        photos: {
          small:
            "https://social-network.samuraijs.com/activecontent/images/users/19587/user-small.jpg?v=1",
          large:
            "https://social-network.samuraijs.com/activecontent/images/users/19587/user.jpg?v=1",
        },
        status: "it's my status",
        followed: false,
      },
    ]);
  }
  return (
    <StyledUsers>
      {list.map((el) => (
        <User
          key={el.id}
          id={el.id}
          name={el.name}
          followed={el.followed}
          avatarUrl={el.photos.small}
          status={el.status}
          follow={follow}
          unfollow={unfollow}
        />
      ))}
    </StyledUsers>
  );
}

const StyledUsers = styled(ShadowContainerStyled)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
