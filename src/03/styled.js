/* 2.styled-components */
import styled from 'styled-components';

const Title = styled.p `
    font-size: 1.5em;
    font-weight: 700;
    text-align: center;
    color: palevioletred;
    border: 1px solid palevioletred;
`;

const Link = styled.a.attrs({
    href: 'http://www.baidu.com',
    target: '_blank'
})
`
    border: 1px solid #348977;
    text-decoration:underline;
    display: block;
    padding: 3px 0;
`

export {
    Title,
    Link
}