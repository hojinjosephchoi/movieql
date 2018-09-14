#1 GraphQL 서버만들기
- Prisma QL, apollo 팀 등이 참여
- [나의 첫번째 GraphQL 서버 만들기](https://www.youtube.com/watch?v=3PZGW5Iwtv4)

~~~
$ mkdir movieql
$ cd movieql
$ npm install -g yarn
$ yarn init
$ yarn add graphql-yoga
~~~

#2 Problems solved by GraphQL
## Over-fetching / Under-fetching
- Over-fetching : 사용자 정보를 받아오는 REST API의 경우 모든 사용자의 정보를 보여준다, 사용도 안할 정보를 모두 받아야 하는 단점이 발생한다.
~~~
/users/ GET ->  => Over-fetching
~~~
- Under-fetching : 앱이 시작되기 위해 최소 3가지를 요청이 오고가야 시작된다. REST에서 하나를 완성하기 위해 많은 리소스를 요청한다.
~~~
/feed/
/notifications/
/user/1/
~~~
- GraphQL은 Over-fetching, Under-fetching을 해결할 수 있다.
~~~
/graphql
~~~
- Query는 Database에서 무언가를 요청하고, GraphQL 언어로 내가 원하는 정보를 받을 수 있다.
~~~
// GraphQL Language
query {
  feed {
    comments
    likeNumber
  }
  notifications {
    isRead
  }
  user {
    username
    profilePic
  }
}

// json data
{
  feed: [
    {
      comments: 1,
      likeNumber: 20
    }
  ],
  notifications: [
    {
      isRead: true
    },
    {
      isRead: false
    }
  ],
  user: {
    username: "hojin",
    profile: "http://"
  }
}
~~~

