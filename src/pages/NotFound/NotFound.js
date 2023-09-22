import React from "react";

export default function NotFound() {
  return (
    <div>
      {/* Not Found 404 */}
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}  className="container">
        <div className="row">
          <div className="col-md-12 ">
            <div  className="error-template text-center">
              <h1>Oops!</h1>
              <h2>Error 404 Not Found</h2>
              <div className="error-details">
                Sorry, an error occurred. The requested page was not found!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
