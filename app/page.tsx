import Footer from "@/components/layout/footer";
import ClientsSection from "./components/clients-section";
import QuestionSection from "./components/question-section";

export default function Home() {
  return (
    <main>
      <ClientsSection />
      <QuestionSection />
      <Footer />
    </main>
  );
}
