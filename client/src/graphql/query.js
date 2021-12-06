import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  {
    getTodos {
      id
      title
      detail
      date
    }
  }
`;

//Load a specified todo's details
export const GET_TODO = gql`
  query getTodo($id:ID){
    getTodo(id:$id) {
      id
      title
      detail
      date
    }
  }
`;