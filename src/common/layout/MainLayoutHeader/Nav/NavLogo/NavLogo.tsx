import gamelogo from "/images/video-game.svg";

export const NavLogo = () => {
  return (
    <div className="flex items-center gap-3">
      <img src={gamelogo} className="h-8" alt="GameVault Logo" />
      <span className="text-xl font-semibold">GameVault</span>
    </div>
  );
};
