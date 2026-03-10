const Header = () => {
  return (
    <div className="w-full h-14 flex justify-between px-6 py-2 border border-gray-200">
      <p className="text-2xl font-semibold font-[GIP]">AI Quiz Generator</p>
      <div
        className="w-10 h-10 bg-center bg-cover rounded-full"
        style={{ backgroundImage: "url('/lubu.jpeg')" }}
      ></div>
    </div>
  );
};

export default Header;
