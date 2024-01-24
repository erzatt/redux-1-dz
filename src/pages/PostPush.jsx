import React, { useState } from "react";
import axios from "axios";
import PostPage from "./PostPage";

const PostPush = () => {
  const [postData, setPostData] = useState("");
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handlePostRequest = async () => {
    try {
      if (inputData.trim() !== "") {
        const response = await axios.post('https://dummyjson.com/posts/add', { title: inputData, userId: 1 });
        console.log('Ответ на POST-запрос:', response.data);
        // Предполагается, что вы хотите установить данные ответа в postData
        setPostData(response.data);
      } else {
        alert("Пожалуйста, введите текст!!!");
      }
    } catch (error) {
      console.error('Ошибка при выполнении POST-запроса:', error);
    }
  };

  return (
    <div>
      <h1 style={{color: 'red'}}>Отправка... POST-Запроса</h1>
      <button onClick={handlePostRequest}>Выполнить... POST-Запрос</button>
      <input onChange={handleInputChange} />
      <PostPage postData={postData} />
    </div>
  );
};

export default PostPush;
