import logo from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header className="">
      <div className="flex justify-center">
        <img src={logo} alt="" />
      </div>
      <h1> Take a Quiz</h1>
      <h2>
        Test your knowledge of any of the following quiz you are familiar with
      </h2>
    </header>
  );
}
