const Hero = () => {
  const handleGitHubClick = () => {
    window.location.href = "https://github.com/manohar4229";
  };

  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-10">
        {/* <img src={logo} alt="logo"/> */}
        <span className="text-xl font-bold">SamurAI</span>
        <button type="button" onClick={handleGitHubClick} className="black_btn">
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an Open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
