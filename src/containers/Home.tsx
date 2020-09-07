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
import { Banner, Products, Testimoni, News } from "../features";

type HomeProps = {};
type HomeState = {
  scrollIndex: number;
};

class Home extends Component<HomeProps, HomeState> {
  mainContainerRef = React.createRef<HTMLDivElement>();
  state: HomeState = {
    scrollIndex: 0,
  };

  scrollUp = () => {
    const { scrollIndex } = this.state;
    const scrollTop = this.mainContainerRef.current!.scrollTop;
    const clientHeight = this.mainContainerRef.current!.clientHeight;
    const isMoreThenHalve =
      scrollTop >= clientHeight * scrollIndex + clientHeight / 4;
    if (isMoreThenHalve) {
      this.mainContainerRef.current!.scrollTop = clientHeight * scrollIndex;
    } else if (scrollIndex > 0) {
      this.mainContainerRef.current!.scrollTop =
        clientHeight * (scrollIndex - 1);
    }
  };

  scrollDown = () => {
    const { scrollIndex } = this.state;
    if (scrollIndex < 3) {
      this.mainContainerRef.current!.scrollTop =
        this.mainContainerRef.current!.clientHeight * (scrollIndex + 1);
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
    // console.log(
    //   `scrollTop : ${scrollTop} ,clientHeight:${clientHeight}, Index: ${index}`
    // );
    if (index !== scrollIndex) {
      this.setState({
        scrollIndex: index,
      });
    }
  };

  render() {
    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="main"
          variant="dark"
          fixed="top"
        >
          <Container>
            <Navbar.Brand href="#home">Akar Pinang Herbal</Navbar.Brand>
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
            <Banner />
          </section>
          <section className="section" id="section-2">
            <Products />
          </section>
          <section className="section" id="section-3">
            <News />
          </section>
          <section className="section" id="section-4">
            <Testimoni />
          </section>
        </div>

        <div className="section-button">
          <div id="up" onClick={this.scrollUp}>
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
          </div>
          <div id="down" onClick={this.scrollDown}>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
