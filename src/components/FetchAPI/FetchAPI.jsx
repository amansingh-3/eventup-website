import React, { useState, useEffect } from "react";
const FetchAPI = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotos(data.products);
      });
  }, []);
  return (
    <div>
      {photos.map((photo) => (
        <div className="c">
          <table>
            <tr>
              <th>id</th>
              <th>brand</th>
              <th>title</th>
            </tr>
            <tr>
              <td> {photo.id}</td>
              <td>{photo.brand}</td>
              <td>{photo.title}</td>
            </tr>
          </table>
          {/* <p>
            {photo.id}
            <strong>{photo.brand}</strong>
          </p>
          <p className="titlefetch">{photo.title}</p> */}
        </div>
      ))}
    </div>
  );
};

export default FetchAPI;
