import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

export default function BlogForm({ addBlog }) {
  const [blogName, setBlogName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [blogDescription, setBlogDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      blogName,
      authorName,
      blogDescription,
    };

    addBlog(newBlog);

    setBlogName("");
    setAuthorName("");
    setBlogDescription("");
  };

    const handleReset = () => {
    setBlogName("");
    setAuthorName("");
    setBlogDescription("");
  };

  return (
    <>
      <Container className="p-3">
        <Form
          className="shadow rounded p-3"
          onSubmit={handleSubmit}
        >
          <Row className="align-items-center">
            <p className="fs-1 fw-bolder">Blog Form </p>
            <Col xs="auto mt-2 mb-2 ">
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                Blog Name
              </Form.Label>
              <Form.Control
                value={blogName}
                onChange={(e) => setBlogName(e.target.value)}
                className="mb-2"
                id="inlineFormInput"
                placeholder="Blog Name"
              />
            </Col>
            <Col xs="auto">
              <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                Author Name
              </Form.Label>
              <Form.Control
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="mb-2"
                id="inlineFormInput"
                placeholder="Author Name"
              />
            </Col>
          </Row>
          <Row>
            <Col xs="mt-2 mb-2">
              <Form.Label>Blog Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={blogDescription}
                onChange={(e) => setBlogDescription(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col xs="auto mt-2 mb-2">
              <Button
                variant="outline-danger"
                type="reset"
                className="mb-2 mx-2"
                onClick={handleReset}

              >
                Reset
              </Button>
              <Button
                type="submit"
                className="mb-2 mx-2"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
