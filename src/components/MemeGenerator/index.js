import {Component} from 'react'
import {
  BgImage,
  AlignRow,
  Background,
  Button,
  Input,
  Select,
  InputContainer,
  Heading,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {showImage: false, fontSize: 0, url: '', bottom: '', top: ''}

  onSubmitForm = event => {
    event.preventDefault()
    this.setState(prevState => ({showImage: !prevState.showImage}))
  }

  onUrl = event => {
    this.setState({url: event.target.value})
  }

  onSelect = event => {
    this.setState({fontSize: event.target.value})
  }

  onTop = event => {
    this.setState({top: event.target.value})
  }

  onBottom = event => {
    this.setState({bottom: event.target.value})
  }

  render() {
    const {showImage, fontSize, url, top, bottom} = this.state
    return (
      <Background>
        <Heading>Meme Generator</Heading>
        <AlignRow>
          <form onSubmit={this.onSubmitForm}>
            <InputContainer data-testid="meme">
              <label htmlFor="url">Image URL</label>
              <Input
                onChange={this.onUrl}
                url={url}
                id="url"
                placeholder="Enter the image URL"
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="top">Top Text</label>
              <Input
                id="top"
                onChange={this.onTop}
                placeholder="Enter the Top Text"
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="bottom">Bottom Text</label>
              <Input
                id="bottom"
                onChange={this.onBottom}
                placeholder="Enter the Bottom Text"
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor="select">Font Size</label>
              <Select
                onChange={this.onSelect}
                id="select"
                placeholder="Enter the Bottom Text"
              >
                {fontSizesOptionsList.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </Select>
            </InputContainer>
            <Button typ="submit">Generate</Button>
          </form>
          {showImage ? (
            <BgImage>
              <p fontSize={fontSize}>{top}</p>
              <p>{bottom}</p>
            </BgImage>
          ) : (
            ''
          )}
        </AlignRow>
      </Background>
    )
  }
}
export default MemeGenerator
