# 1 GraphQL 서버만들기
- Prisma QL, apollo 팀 등이 참여
- [나의 첫번째 GraphQL 서버 만들기](https://www.youtube.com/watch?v=3PZGW5Iwtv4)

~~~
$ mkdir movieql
$ cd movieql
$ npm install -g yarn
$ yarn init
$ yarn add graphql-yoga
~~~

# 2 Problems solved by GraphQL
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


# 3 Creating a GraphQL Server with GraphQL Yoga
- nodemon 설치
~~~
$ yarn global add nodemon
~~~

- index.js 생성
- package.json 내 script 추가
- nodemon 시작
~~~
$ yarn start
~~~

- babel-node 설치
~~~
$ yarn add babel-node --dev
$ yarn global add babel-cli
$ yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev
~~~
- yarn start 스크립트 내 babel-node 적용
~~~
"scripts": {
  "start": "nodemon --exec babel-node index.js"
},
~~~


# 4 Creating the first Query and Resolver
## Schema
- 사용자에게 보내거나 사용자로부터 받을 data에 대한 설명

## Query 
- graphql/schema.graphql 생성
- schema : 받거나 줄 정보에 대한 서술
- 사용자가 뭘 할 지에 대해서 정의
- Query : Database로부터 정보를 얻음. 정보를 얻을 때만 쓰임
- Mutation : 정보를 변형할 때 (서버/Database/Memory...) 쓰임


## Resolvers
- Query를 resolve하는 것
- reolvers를 통해 database/메모리/다른 api 등을 연결한다.

## GraphQL-yoga Playground
- [localhost:4000](localhost:4000): graphql-yoga에서 제공해주는 playground 를 통해 api를 확인할 수 있다.
- request 예시
~~~
query {
  name
}
~~~
- response 예시
~~~
{
  "data": {
    "name": "hojin"
  }
}
~~~



# 5 Extending the Schema
- Object형태의 데이터 타입 query 정의하듯 별도로 정의할 수 있다.
~~~
type Hojin{
  name: String!
  age: Int!
  gender: String!
}
~~~

- `Hojin` 이란 타입을 리턴하는 query는 다음과 같이 정의할 수 있다.
~~~
type Query{
  person: Hojin!
}
~~~

- request 할 때 필요한 field 만 요청할 수 있다.
~~~
// 이름만 요청
query {
  person {
    name
  }
}
// 이름, 나이, 성 등 전체 요청
query {
  person {
    name
    age
    gender 
  }
}
~~~


# 6 Extending the Schema part Two
- Query, Mutation, Subscription

# 7 Creating Queries with Arguments
## GraphQL 서버의 workflow
- 요청 -> GraphQL 서버가 Query나 Mutation의 정의를 발견 -> Resolver를 찾음 -> 해당함수 실행

- Resolvers는 Views와 유사
- Schema는 URLs와 유사


# 8 Defining Mutations & 9 Creating first Mutation

## Mutation
- Database 상태가 변할 때 사용 (CUD)
- change of state
- Resolver내 Mutation에 내용 추가
- 요청 전문은 Query와 달리 mutation키워드를 사용한다.
~~~
mutation {
  addMovie(name: "한글", score: 9) {
  	name
	} 
}
~~~

# 10 Delete Mutation
- 삭제 전문
~~~
mutation {
  deleteMovie(id: 3)
}
~~~


# 11, 12 Wrapping a REST API with GraphQL
- [open API](https://yts.am/api/v2/list_movies.json)를 감싸는 GraphQL 작성 예
- node-fetch 설치
~~~
$ yarn add node-fetch
~~~