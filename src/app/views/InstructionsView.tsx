import "./InstructionsView.scss";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const InstructionsView = () => {
  return (
    <section className="instructions-view">
      <header className="p-3">
        <h1>Coding Interview Task Instructions</h1>
      </header>
      <div>
        <h2 className="h3">Requirements</h2>
        <ul>
          <li>
            You are asked to implement a simple <strong>TODO List</strong>.
          </li>
          <li>
            User can <strong className="text-success">create</strong> a new item
            with <strong>title</strong> and <strong>description</strong>.
          </li>
          <li>
            User can <strong className="text-success">update</strong>{" "}
            <strong>title</strong> or <strong>description</strong> of an item.
          </li>
          <li>
            User can <strong className="text-danger">delete</strong> an item.
          </li>
          <li>
            There should be 4 pages.
            <ol>
              <li>
                <strong>Items Page</strong> at{" "}
                <Link to="/todo/items">
                  <strong className="text-info">/todo/items</strong>
                </Link>
              </li>
              <li>
                <strong>Create Item Page</strong> at{" "}
                <Link to="/todo/items/create">
                  <strong className="text-info">/todo/items/create</strong>
                </Link>
              </li>
              <li>
                <strong>Update Item Page</strong> at{" "}
                <Link to="/todo/items/1/update">
                  <strong className="text-info">
                    /todo/items/:itemId/update
                  </strong>
                </Link>
              </li>
              <li>
                <strong>Delete Item Page</strong> at{" "}
                <Link to="/todo/items/1/delete">
                  <strong className="text-info">
                    /todo/items/:itemId/delete
                  </strong>
                </Link>
              </li>
            </ol>
          </li>
          <li>
            Endpoints are implemented as mock service worker handlers and can be
            directly consumed.
          </li>
        </ul>
        <h2 className="h3">Endpoints</h2>
        <Table bordered>
          <thead>
            <tr>
              <th>Name</th>
              <th>Method</th>
              <th>URL</th>
              <th>Request Body</th>
              <th>Response Body</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Create Item</td>
              <td>POST</td>
              <td>/items</td>
              <td>
                <pre>
                  {`{
  title: "string",
  description: "string"
}`}
                </pre>
              </td>
              <td>
                <pre>
                  {`{
  data: {
    id: "number",
    title: "string",
    description: "string",
    createdAt: "string",
  }[]
}`}
                </pre>
              </td>
            </tr>
            <tr>
              <td>Get Items</td>
              <td>GET</td>
              <td>/items</td>
              <td>-</td>
              <td>
                <pre>
                  {`{
  data: {
    id: "number",
    title: "string",
    description: "string",
    createdAt: "string",
  }[]
}`}
                </pre>
              </td>
            </tr>
            <tr>
              <td>Get Item By Id</td>
              <td>GET</td>
              <td>/items/:itemId</td>
              <td>-</td>
              <td>
                <pre>
                  {`{
  data: {
    id: "number",
    title: "string",
    description: "string",
    createdAt: "string",
  }
}`}
                </pre>
              </td>
            </tr>
            <tr>
              <td>Update Item By Id</td>
              <td>PATCH</td>
              <td>/items/:itemId</td>
              <td>
                <pre>
                  {`{
  title: "string",
  description: "string"
}`}
                </pre>
              </td>
              <td>
                <pre>
                  {`{
  data: {
    id: "number",
    title: "string",
    description: "string",
    createdAt: "string",
  }
}`}
                </pre>
              </td>
            </tr>
            <tr>
              <td>Delete Item By Id</td>
              <td>DELETE</td>
              <td>/items/:itemId</td>
              <td>-</td>
              <td>
                <pre>
                  {`{
  data: "boolean"
}`}
                </pre>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default InstructionsView;
