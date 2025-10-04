import { APP_NAME } from "@/lib";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        {year} &copy; {APP_NAME}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
