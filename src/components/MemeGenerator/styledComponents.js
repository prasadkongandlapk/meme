import styled from 'styled-components'

export const Background = styled.div`
  background-color: white;
  height: 100vh;
  padding: 20px;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 80px;
  width: 100vw;
`
export const Heading = styled.h1`
  color: #35469c;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  color: #7e858e;
`

export const Input = styled.input`
  outline: none;
  margin-top: 5px;
  height: 20px;
  width: 150px;
  font-size: 10px;
`

export const Button = styled.button`
  background-color: #0b69ff;
  border-radius: 5px;
  border-style: none;
  height: 20px;
  width: 80px;
  color: white;
  font-weight: bold;
  margin-left: 20px;
`
export const Select = styled.select`
  outline: none;
  height: 20px;
  width: 150px;
  font-size: 10px;
  margin-bottom: 20px;
`

export const BgImage = styled.div`
  background-image: url(${props => props.url});
  padding: 20px;
  display: flex;
  background-size: cover;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 300px;
  font-size: ${props => props.fontSize}
  text-align: center;
`

export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
