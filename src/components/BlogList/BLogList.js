import React from "react";
import Card from "react-bootstrap/Card";

export default function BLogList({ blogs }) {
  return (
    <>
      <p className="fs-2 fw-bolder text-center">All Blogs</p>
      {blogs.map((blog, index) => (
        <div className="container p-3" key={index}>
          <Card className="text-center">
            <Card.Header>
              <p className="fs-4 fw-bolder">Blog</p>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                <h2>
                  <i> {blog.blogName} </i>
                  by {blog.authorName}
                </h2>
              </Card.Title>
              <Card.Text>{blog.blogDescription}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
}
