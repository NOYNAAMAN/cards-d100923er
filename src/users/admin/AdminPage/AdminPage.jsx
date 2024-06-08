import React from "react";

import "../../../../src/styling/css/style.css";
import PageHader from "../../../components/PageHader";
import ListUsers from "./ListUsers";
export default function AdminPage() {
  return (
    <>
      <PageHader
        title={"Hello Admin"}
        subtitle={"here you can see all the users"}
      ></PageHader>
      <ListUsers />
    </>
  );
}
