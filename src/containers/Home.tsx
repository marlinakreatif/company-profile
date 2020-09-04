import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

type HomeProps = {};
type HomeState = {
  scrollIndex: number;
};

class Home extends Component<HomeProps, HomeState> {
  mainContainerRef = React.createRef<HTMLDivElement>();
  state: HomeState = {
    scrollIndex: 0,
  };

  handleScroll = (scrollIndex: number) => {
    if (scrollIndex > -1 && scrollIndex < 4 && this.mainContainerRef) {
      this.mainContainerRef.current!.scrollTop =
        this.mainContainerRef.current!.clientHeight * scrollIndex;
    }
  };

  onScroll = (e: any) => {
    const element = e.target;
    const { scrollTop, clientHeight } = element;
    const { scrollIndex } = this.state;
    let index: number = 0;
    if (scrollTop <= clientHeight) {
      index = 0;
    } else if (scrollTop <= clientHeight * 2 && scrollTop > clientHeight) {
      index = 1;
    } else if (scrollTop <= clientHeight * 3 && scrollTop > clientHeight * 2) {
      index = 2;
    } else {
      index = 3;
    }

    if (scrollTop < clientHeight * 3 && scrollTop >= clientHeight * 2) {
      index = 2;
    } else if (scrollTop < clientHeight * 2 && scrollTop >= clientHeight) {
      index = 1;
    } else if (scrollTop < clientHeight && scrollTop >= 0) {
      index = 0;
    } else {
      index = 3;
    }
    console.log(
      `scrollTop : ${scrollTop} ,clientHeight:${clientHeight}, Index: ${index}`
    );
    if (index !== scrollIndex) {
      this.setState({
        scrollIndex: index,
      });
    }
  };

  render() {
    const { scrollIndex } = this.state;
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#section-2">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div
          className="main-container"
          ref={this.mainContainerRef}
          onScroll={this.onScroll}
        >
          <section className="section" id="section-1">
            1
          </section>
          <section className="section" id="section-2" style={{background:"red"}}>
            2
          </section>
          <section className="section" id="section-3" style={{background:"green"}}>
            3
          </section>
          <section className="section" id="section-4" style={{background:"yellow"}}>
            4
          </section>
        </div>

        <div className="section-button">
          <button onClick={(e) => this.handleScroll(scrollIndex - 1)}>
            UP
          </button>
          <button onClick={(e) => this.handleScroll(scrollIndex + 1)}>
            Down
          </button>
        </div>
      </>
    );
  }
}

export default Home;