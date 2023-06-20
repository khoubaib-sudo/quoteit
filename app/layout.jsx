import "@styles/globals.css";
export const meatdata = {
  title: "Quoteit",
  description: "Discover & Share Quotes",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
