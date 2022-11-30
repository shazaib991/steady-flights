import Head from "next/head";
import { Details } from "../components/LoginAndRegister/Details";
import { FormSectionLogin } from "../components/LoginAndRegister/FormSectionLogin";
import { Header } from "../components/LoginAndRegister/Header";

export default function login() {
  return (
    <div>
      <Header />
      <FormSectionLogin />
      <Details />
    </div>
  );
}
