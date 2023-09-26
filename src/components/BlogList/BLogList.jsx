import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

export default function BLogList({ blogs }) {
  return (
    <>
      <p className="fs-2 fw-bolder text-center">All Blogs</p>
      {blogs.map((blog) => (
        <div className="container p-3" key={blog.id}>
          <Card className="text-center">
            <Card.Header>
              <p className="fs-4 fw-bolder">Blog</p>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                <h2>
                  <i>{blog.blogName}</i>
                  by
                  {blog.authorName}
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

BLogList.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      blogName: PropTypes.string.isRequired,
      authorName: PropTypes.string.isRequired,
      blogDescription: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
