import React from "react";
import { useState } from "react";
import { blogDetails } from "../../utils/constant";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function BlogGallery() {
  const [index, setIndex] = useState(0);

  let hasPrev = index > 0;
  let hasNext = index < blogDetails.length - 1;

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }
  let blog = blogDetails[index];
  return (
    <>
      <div className="container p-3">
        <Card className="text-center">
          <Card.Header><p class="fs-4 fw-bolder">Blog's Gallery</p></Card.Header>
          <Card.Body>
            <Card.Title>
              <h2>
                <i> {blog.name} </i>
                by {blog.author}
              </h2>
            </Card.Title>
            <Card.Text>{blog.description}</Card.Text>
            <Button
            className="mx-1"
              variant="primary"
              onClick={handlePrevClick}
              disabled={!hasPrev}
            >
              Previous
            </Button>
            <Button
              className="mx-1"
              variant="primary"
              onClick={handleNextClick}
              disabled={!hasNext}
            >
              {" "}
              Next
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            {" "}
            <h3>
              ({index + 1} of {blogDetails.length})
            </h3>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
}
