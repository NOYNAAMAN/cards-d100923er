import React from "react";
import ListUsers from "../components/ListUsers";
import "../../../../src/styling/css/style.css";
import PageHader from "../../../components/PageHader";
export default function AdminPage() {
  return (
    <>
      <PageHader
        titel={"Hello Admin"}
        subtitle={"here you can see all the users"}
      ></PageHader>
      <ListUsers />
    </>
  );
}
