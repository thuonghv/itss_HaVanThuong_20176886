import React, { useState, useEffect } from "react";

function ListFriend() {
  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [list, putList] = useState(["Hoa","Hung","Long",  ]);

  const handleClick = () => {};

  const handleChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
  }, [name]);

  return (
    <div>
      <p>
        学生一覧: [
        {list.map((item) => (
          <span>{item} </span>
        ))}]
      </p>
      <p>追加する名前を入力してください.</p>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>確定</button>
      <p>追加する名前: {name}</p>
      <p>
        新しい一覧: [
        {list.map((item) => (
          <span>{item}, </span>
        ))}
        ]
      </p>
    </div>
  );
}
export default ListFriend;