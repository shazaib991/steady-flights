import Head from "next/head";
import { FormSectionLogin } from "../components/LoginAndRegister/FormSectionLogin";
import { Header } from "../components/LoginAndRegister/Header";

export default function login() {
  return (
    <div>
      <Header />
      <FormSectionLogin />
    </div>
  );
}
