import { useEffect } from "react";

const CookieList: React.FC = () => {
  useEffect(() => {
    return function cleanup() {
      const elements = document.getElementsByClassName('CookieDeclaration');

      if (elements.length) {
        elements.item(0).remove();
      }
    };
  }, []);

  return (
    <script
      id="CookieDeclaration"
      src="https://consent.cookiebot.com/61c3fae0-31ac-4641-b111-e9d1591810e8/cd.js"
      type="text/javascript"
      async
    />
  );
};

export default CookieList;
