import { gql } from '@apollo/client';

export const Get_Me = gql`
{
    me {
        _id
        username
        email
        bookCount
        savedBooks {
            _id
            authors
            description
            bookId
            image
            link
            title
        }
    }
}
`