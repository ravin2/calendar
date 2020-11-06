import * as React from 'react';
import { ReactMultiEmail } from 'react-multi-email';
import 'react-multi-email/style.css';
import Image from 'react-bootstrap/Image'

interface IProps {}
interface IState {
  emails: string[];
}
class Basic extends React.Component<IProps, IState> {
  state = {
    emails: this.props.emails,
  };

  render() {
    const { emails } = this.state;
    return (
      <>
          {/* <h3>Add contacts</h3> */}
          <ReactMultiEmail
            placeholder="Add Guests"
            emails={emails}
            onChange={(_emails: string[]) => {
              this.setState({ emails: _emails });
              this.props.onTitleChange(_emails)
            }}
            getLabel={(
              email: string,
              index: number,
              removeEmail: (index: number) => void,
            ) => {
              return (
                <div data-tag key={index}>
                  <div data-tag-item>
                    {email}
                  </div>
                  <span data-tag-handle onClick={() => removeEmail(index)}>
                    ×
                  </span>
                </div>
              );
            }}
          />
          <br />
           <span style={{ position:'relative', top: '-56px', left: '-5px' }}>
                                        <Image className="icon" src={require('./ASSETS/at.png')} fluid />   
          </span>
      </>
    );
  }
}

export default Basic;