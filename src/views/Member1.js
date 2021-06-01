import { Alert } from "react-bootstrap";
export function Member1() {
  return (
    <div className="w-75">
      <div className="alert alert-primary">
      <h1>Registeration Module </h1>
      </div>

      <div>
        <div className="mb-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Username"
            className="form-control"
          />
        </div>

        <div className="mb-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Password"
            className="form-control"
          />
        </div>

        <div className="mb-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Email"
            className="form-control"
          />
        </div>

        <div className="mb-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Mobile"
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <input
            type="Button"
            value="Register"
            className="btn btn-primary w-100"
          />
        </div>
      </div>
    </div>
  );
}
