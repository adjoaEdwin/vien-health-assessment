import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    title.trim();
    document.title = title.trim() + " - " + process.env.REACT_APP_TITLE_SUFFIX;
  }, [title]);
};

export default useTitle;
