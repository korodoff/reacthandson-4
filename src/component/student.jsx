import { Link } from "react-router-dom";

const Student = () => {
  return (
    <>
      <Link class="addnew" to="/addstudent">
        |Add New Student|
      </Link>
      <table class="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Course</th>
            <th scope="col">Batch</th>
            <th scope="col">Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Krut</th>
            <td>21</td>
            <td>MREN</td>
            <td>Edit</td>
          </tr>
          <tr>
            <th scope="row">manso</th>
            <td>23</td>
            <td>MREN</td>
            <td>Edit</td>
          </tr>
          <tr>
            <th scope="row">Donal</th>
            <td colspan="2">24</td>
            <td>MREN</td>
            <td>EDIT</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Student;
