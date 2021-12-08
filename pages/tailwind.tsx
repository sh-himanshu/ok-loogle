import ChitChat from "../components/tw/ChitChat";
import Layout from "../components/tw/Layout";
import ErinLindford from "../components/tw/ErinLindford";
import ButtonGreen from "../components/tw/ButtonGreen";
import ResponsiveDesign from "../components/tw/ResponsiveDesign";
import SignUp from "../components/tw/SignUp";
import FocusMe from "../components/tw/FocusMe";
import GroupHover from "../components/tw/GroupHover";

const TailwindExamples = () => {
  return (
    <div>
      <h1 className="bg-indigo-300 font-bold font-sans text-center text-2xl md:text-5xl md:py-5 py-2">
        Tailwind CSS Components
      </h1>
      <Layout>
        <ChitChat />
      </Layout>
      <Layout>
        <ErinLindford />
      </Layout>
      <Layout>
        <ButtonGreen />
      </Layout>
      <Layout>
        <ResponsiveDesign />
      </Layout>
      <Layout>
        <SignUp />
      </Layout>
      <Layout>
        <FocusMe />
      </Layout>
      <Layout>
        <GroupHover />
      </Layout>
    </div>
  );
};

export default TailwindExamples;
