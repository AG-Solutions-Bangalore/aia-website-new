
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import meta from "../../meta/meta.json";

const DEFAULT_META = {
  title: "Best Training Institute For Top Certification Courses- AIA",
  description: "Academy of Internal Audit is an online training institute offering globally recognized professional certification courses such as CIA, CFE, and CAMS, along with other international certifications."
};

function matchRoute(pathname) {
  return Object.keys(meta).find((route) => {
    if (!route.includes(":")) return route === pathname;
    const base = route.split("/:")[0];
    return pathname.startsWith(base);
  });
}

export default function Meta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const routeKey = matchRoute(pathname);
    const metaData = meta[routeKey] || DEFAULT_META;

  
    document.title = metaData.title;

    
    let descTag = document.querySelector("meta[name='description']");
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.setAttribute("name", "description");
      document.head.appendChild(descTag);
    }
    descTag.setAttribute("content", metaData.description);
  }, [pathname]);

  return null;
}
