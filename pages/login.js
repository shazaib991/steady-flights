import Head from "next/head";
import { Details } from "../components/LoginAndRegister/Details";
import { Footer } from "../components/LoginAndRegister/Footer";
import { FormSectionLogin } from "../components/LoginAndRegister/FormSectionLogin";
import { Header } from "../components/LoginAndRegister/Header";

export default function login() {
  return (
    <div>
      <Header />
      <FormSectionLogin />
      <Details />
      <Footer />
    </div>
  );
}
