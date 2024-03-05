import React from "react";
import { Metadata } from "next";

import LoginForm from "./LoginForm";

export default async function Admin() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}
