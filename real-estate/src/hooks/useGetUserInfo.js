import React from "react";

const useGetUserInfo = () => {
  const { name, userId, isAuth } = JSON.parse(localStorage.getItem("auth"));
  return <div>name,userId,isAuth;</div>;
};

export default useGetUserInfo;
