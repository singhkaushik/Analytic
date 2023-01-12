import React, { useEffect, useState } from "react";

const Companies = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:4000/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const DisplayData = users.map((info) => {
    return (
      <tr>
        <td>{info.Attributes}</td>
        <td>{info.MissingValues}</td>
        <td>{info.Dtype}</td>
        <td>{info.Outliers}</td>
        <td>{info.Categorical}</td>
      </tr>
    );
  });

  return (
    <div>
      <table className="table1">
        <thead>
          <tr>
            <th>Attributes</th>
            <th>MissingValues</th>
            <th>Dtype</th>
            <th>Outliers</th>
            <th>Categorical</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
};

export default Companies;
